import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = (props) => {

    const [favourites, setFavourites] = useState([]);
    
    const addFavourite = (restaurant) => {
        setFavourites([...favourites, restaurant]);
    };

    const removeFavourite = (restaurant) => {
        const updatedFavourites = favourites.filter((fav) => fav.placeId !== restaurant.placeId);
        setFavourites(updatedFavourites);
    }

    const saveFavourites = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@favourites', jsonValue);
        } catch (e) {
            console.log('error saving Favourites');
        }
    }

    const getFavourites = async () => {
        try {
            const value = await AsyncStorage.getItem('@favourites');
            if(value !== null) {
                setFavourites(JSON.parse(value));
            }
        } catch(e) {
            console.log('error loading');
        }
    }

    useEffect(()=>{
        getFavourites();
    },[])


    useEffect(()=>{
        saveFavourites(favourites);
    },[favourites])


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

