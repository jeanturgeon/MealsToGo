import React from "react";

import RestaurantInfoCard from "../../components/restaurant-info-card.component";
import { StatusBar, SafeAreaView, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margintop: ${StatusBar.currentHeight + 5}px;
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
`;

export default function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
}
