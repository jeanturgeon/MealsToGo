import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const RestaurantCard = styled(Card)`
  backgroundColor: white;
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${props =>  props.theme.space[3]};
  backgroundColor: ${props => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${props =>  props.theme.space[3]};
`;

export const Section = styled.View`
  flexDirection: row;
  alignItems: center;
`;

export const Rating = styled.View`
  flexDirection: row;
  padding: ${props =>  props.theme.space[2]} 0;
`;

export const IsOpen = styled.View`
  flex: 1;
  flexDirection: row;
  justifyContent: flex-end;
`;