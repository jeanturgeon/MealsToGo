import React from 'react';
import styled from 'styled-components/native';
import { ScrollView, TouchableOpacity } from 'react-native';


import { Spacer } from '../../UI/spacer.component';
import { Text } from '../../UI/text.component';
import { CompactRestaurantInfo } from '../restaurants/compact-restaurant-info.component';

const FavouritesContainer = styled.View`
    padding: ${props =>  props.theme.space[2]} 
`;

export const FavouritesBar = ({favourites, onNavigate}) => {
    if(!favourites.length) {
        return null;
    }
    return (
        <FavouritesContainer>
            <Spacer position='left' size='large'>
                <Text variant='caption'>Favourites</Text>
            </Spacer>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {
                    favourites.map((restaurant) => {
                        const key=restaurant.name;
                        return (
                            <Spacer key={key} position='left' size='large'>                                
                                <TouchableOpacity
                                    onPress={()=> onNavigate("RestaurantDetail", {restaurant})}
                                >
                                    <CompactRestaurantInfo restaurant={restaurant} />
                                </TouchableOpacity>                                
                            </Spacer>
                        );
                    })
                }

            </ScrollView>
        </FavouritesContainer>
    );
}