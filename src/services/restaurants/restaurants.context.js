import React, {useState, useEffect, createContext, useContext} from 'react';
import { restaurantsReq, restaurantsTransform } from './restaurants.service';
import { LocationContext } from '../location/location.context';

export const RestaurantsContext = createContext();

export const RestaurantContextProvider = (props) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const {location} = useContext(LocationContext);

    const retriveRestaurants = (loc) => {
        setIsLoading(true);
        setRestaurants([]);

        setTimeout(()=>{
            restaurantsReq(loc)
            .then(restaurantsTransform)
            .then((response => {
                setIsLoading(false);
                setRestaurants(response);                
            }))
            .catch(err => {
                setIsLoading(false);
                setError(err);                
            });
        },2000); /* using timeout to simulate latency from API */
    };

    useEffect(()=>{
        if(location) {
            const locationCoords = `${location.lat},${location.lng}`
            retriveRestaurants(locationCoords);
        }        
    },[location]);

    return (
        <RestaurantsContext.Provider 
            value={{
                restaurants:restaurants,
                isLoading: isLoading,
                error: error
                }
            }
        >
            {props.children}
        </RestaurantsContext.Provider>
    )
}