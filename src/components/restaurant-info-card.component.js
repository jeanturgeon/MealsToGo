import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import star from '../../assets/star'


const RestaurantCard = styled(Card)`
  backgroundColor: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props =>  props.theme.space[3]};
  backgroundColor: ${props => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  fontFamily: ${props => props.theme.fonts.heading};
  fontSize: ${props => props.theme.fontSizes.title};  
  color: ${props => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${props =>  props.theme.space[3]};
`

const Rating = styled.View`
  flex-direction: row;
  padding: ${props =>  props.theme.space[2]} 0;
`

const Address = styled.Text`
  fontFamily: ${props => props.theme.fonts.body};
  fontSize: ${props => props.theme.fontSizes.caption};  
`

export default function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    icon,
    photos = ["https://www.foodiesfeed.com/wp-content/uploads/2022/03/strawberry.jpg"],
    address = "100 rue de l'avenue",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = false 
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {ratingArray.map(()=> <SvgXml xml={star} width={20} height={20}/>)}        
        </Rating>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
}