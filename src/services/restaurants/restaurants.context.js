import React, {useState, useEffect, useMemo, createContext} from 'react';
import { restaurantsReq, restaurantsTransform } from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantContextProvider = (props) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const retriveRestaurants = () => {
        setIsLoading(true);
        setTimeout(()=>{
            restaurantsReq()
            .then(restaurantsTransform)
            .then((response => {
                setRestaurants(response);
                setIsLoading(false);
            }))
            .catch(err => {
                setIsLoading(false);
                setError(err);                
            });
        },2000); /* using timeout to simulate latency from API */
    };

    useEffect(()=>{
        retriveRestaurants();
    },[]);

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