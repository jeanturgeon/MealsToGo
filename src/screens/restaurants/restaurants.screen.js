import React, {useContext} from "react";
import { ActivityIndicator, Colors } from "react-native-paper";

import RestaurantInfoCard from '../../components/restaurants/restaurant-info-card.component';
import { FlatList } from "react-native";
import { Search } from '../../components/restaurants/search-bar.component'
import styled from "styled-components/native";
import { Spacer } from "../../UI/spacer.component";

import { RestaurantsContext } from "../../services/restaurants/restaurants.context";




const LoadingSpinnerContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%
`;

const LoadingSpinner = styled(ActivityIndicator)`
  marginLeft: -25px;
`

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {    
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16
  }
})``;


export default function RestaurantsScreen() {
  const {isLoading, error, restaurants} = useContext(RestaurantsContext);
  return (
    <>
      {isLoading && (
        <LoadingSpinnerContainer>
          <LoadingSpinner size={50} animating={true} color={Colors.blue300} /> 
        </LoadingSpinnerContainer>
      )}
     <Search />
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
