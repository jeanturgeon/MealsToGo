import React, { useContext} from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import { FavouritesContext } from '../../services/favourites/favourites.context';
import { SafeArea } from '../../UI/safe-area.component';
import { Text } from '../../UI/text.component';
import { Spacer } from '../../UI/spacer.component';
import { RestaurantList } from '../../components/restaurants/restaurant-list.component';
import RestaurantInfoCard from '../../components/restaurants/restaurant-info-card.component';

const NoFavouritesArea = styled.View`
    flex: 1;
    width: 100%;
    marginTop: 10px;
    alignItems: center;
    justifyContent: center;

`;

export const FavouritesScreen = ({navigation}) => {
    const {favourites} = useContext(FavouritesContext);

    return ( 
        favourites.length ? (
            <SafeArea>
                <RestaurantList  
                data={favourites}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity 
                        onPress={() => props.navigation.navigate("RestaurantDetail",{ restaurant: item })}>
                        <Spacer position="bottom" size="large">
                            <RestaurantInfoCard restaurant={item} />
                        </Spacer>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(item) => item.name}
            />
            </SafeArea>) : (
            <NoFavouritesArea><Text>No favourites yet</Text></NoFavouritesArea>
        )                    
    );
}