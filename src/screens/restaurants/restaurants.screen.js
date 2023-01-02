import React from "react";

import RestaurantInfoCard from "../../components/restaurant-info-card.component";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../UI/spacer.component";


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
  return (
    <>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}, {name: 5}, {name: 6}]}
        renderItem={()=> (
        <Spacer position='bottom' size='large'>
          <RestaurantInfoCard />
        </Spacer>        
        )}
        keyExtractor={(item) => item.name}        
      />      
    </>
  );
}
