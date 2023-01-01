import { Text, Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import star from '../../assets/star'
import open from '../../assets/open'
import {Spacer} from "../UI/spacer.component";


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

const Section = styled.View`
  flexDirection: row;
  alignItems: center;
`

const Rating = styled.View`
  flexDirection: row;
  padding: ${props =>  props.theme.space[2]} 0;
`

const IsOpen = styled.View`
  flex: 1;
  flexDirection: row;
  justifyContent: flex-end;
`
const Address = styled.Text`
  fontFamily: ${props => props.theme.fonts.body};
  fontSize: ${props => props.theme.fontSizes.caption};  
`

export default function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://www.foodiesfeed.com/wp-content/uploads/2022/03/strawberry.jpg"],
    address = "100 rue de l'avenue",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true 
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((val, index)=> <SvgXml key={index} xml={star} width={20} height={20}/>)}        
          </Rating>
          <IsOpen>
            {isClosedTemporarily && <Text variant='label' style={{color: 'red'}}>CLOSED TEMPORARILY</Text>}
            <Spacer position='left' size='medium'  />
            {isOpenNow && <SvgXml xml={open} width={20} height={20}/>}            
          </IsOpen>
          <Spacer  position='left' size='medium'/>
          <Image style={{width:15, height:15}} source={{uri: icon}}/>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
}