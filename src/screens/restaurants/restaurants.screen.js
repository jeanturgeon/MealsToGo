import React, { useContext, useState } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";

import RestaurantInfoCard from "../../components/restaurants/restaurant-info-card.component";
import { TouchableOpacity } from "react-native";
import { Search } from "../../components/restaurants/search-bar-restaurants.component";
import { FavouritesBar } from "../../components/favourites/favourites-bar.components";
import styled from "styled-components/native";
import { Spacer } from "../../UI/spacer.component";

import { RestaurantsContext } from "../../services/restaurants/restaurants.context";
import { RestaurantList } from "../../components/restaurants/restaurant-list.component";
import { FavouritesContext } from "../../services/favourites/favourites.context";

const LoadingSpinnerContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const LoadingSpinner = styled(ActivityIndicator)`
  marginleft: -25px;
`;

export default function RestaurantsScreen(props) {
  /* We are getting the navigation prop from the RestaurantStack.Navigator which is calling this screen */
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const {favourites} = useContext(FavouritesContext);
  const [toggleFavourites, setToggleFavourites] = useState(false);



  return (
    <>
      {isLoading && (
        <LoadingSpinnerContainer>
          <LoadingSpinner size={50} animating={true} color={Colors.blue300} />
        </LoadingSpinnerContainer>
      )}
      <Search 
        isFavouriteToggled={toggleFavourites}
        onFavouriteToggle={() => setToggleFavourites(!toggleFavourites)}
      />
      {toggleFavourites && 
        <FavouritesBar favourites={favourites} onNavigate={props.navigation.navigate}/>
      }
      <RestaurantList  
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity 
              onPress={() => props.navigation.navigate("RestaurantDetail",
               { restaurant: item }/* which param that will be retrieved in restaurantDetail screen*/)}>
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </>
  );
}
