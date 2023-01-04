import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {AntDesign} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { FavouritesContext } from '../../services/favourites/favourites.context';

const FavouriteButton = styled(TouchableOpacity)`    
    position: absolute;
    top: ${props =>  props.theme.space[4]};
    right: ${props =>  props.theme.space[4]};    
    zIndex: 9;
`;

export const Favourite = ({restaurant}) => {
    const {favourites, addToFavourites, removeFromFavourite} = useContext(FavouritesContext);

    const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);
    
    return (
        <FavouriteButton
            onPress={() => !isFavourite ? addToFavourites(restaurant) : removeFromFavourite(restaurant)}
        >
            <AntDesign 
                /* if favourite, display red heart, if not, display white heart outline*/
                name={isFavourite ? 'heart' : 'hearto'}
                color={isFavourite ? 'red' : 'white'}                
                size={24}                
            />
        </FavouriteButton>
    );
}