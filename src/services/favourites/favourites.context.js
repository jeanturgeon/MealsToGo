import React, {createContext, useState, useEffect ,useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthenticationContext } from '../auth/authentication.context';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = (props) => {
    const { user } = useContext(AuthenticationContext);

    const [favourites, setFavourites] = useState([]);
    
    const addFavourite = (restaurant) => {
        setFavourites([...favourites, restaurant]);
    };

    const removeFavourite = (restaurant) => {
        const updatedFavourites = favourites.filter((fav) => fav.placeId !== restaurant.placeId);
        setFavourites(updatedFavourites);
    }

    const saveFavourites = async (value, uid) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
        } catch (e) {
            console.log('error saving Favourites');
        }
    }

    const getFavourites = async (uid) => {
        try {
            const value = await AsyncStorage.getItem(`@favourites-${uid}`);
            if(value !== null) {
                setFavourites(JSON.parse(value));
            }
        } catch(e) {
            console.log('error loading');
        }
    }

    useEffect(()=>{
        if(user) {
            getFavourites(user.uid);
        }
        
    },[user])


    useEffect(()=>{
        if(user) {
            saveFavourites(favourites, user.uid);
        }
        
    },[favourites, user])


    return (
        <FavouritesContext.Provider
            value ={{
                favourites: favourites,
                addToFavourites: addFavourite,
                removeFromFavourite: removeFavourite,
            }}
        >
            {props.children}
        </FavouritesContext.Provider>
    )
};

