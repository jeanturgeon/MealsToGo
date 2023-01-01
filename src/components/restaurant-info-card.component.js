import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";


const RestaurantCard = styled(Card)`
  backgroundColor: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props =>  props.theme.space[3]};
  backgroundColor: ${props => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  padding: ${props =>  props.theme.space[3]};
  color: ${props => props.theme.colors.ui.primary};
`;

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

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
}