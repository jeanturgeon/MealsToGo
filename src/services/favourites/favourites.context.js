import React, {createContext, useState} from 'react';

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

