import React, {useContext} from "react";

import RestaurantInfoCard from "../../components/restaurant-info-card.component";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../UI/spacer.component";

import { RestaurantsContext } from "../../services/restaurants/restaurants.context";


const SearchContainer = styled.View`
  padding: ${props =>  props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    // padding: 16 //will apply padding 16 to the content of each RestaurantInfoCard
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16
  }
})``;


export default function RestaurantsScreen() {
  const {isLoading, error, restaurants} = useContext(RestaurantsContext);
  return (
    <>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({item})=> {
          return (
            <Spacer position='bottom' size='large'>
              <RestaurantInfoCard restaurant={item}/>
            </Spacer>        
        )}}
        keyExtractor={(item) => item.name}        
      />      
    </>
  );
}
