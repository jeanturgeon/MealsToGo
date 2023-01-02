import { Text } from "../../UI/text.component";
import { SvgXml } from "react-native-svg";

import star from '../../../assets/star'
import open from '../../../assets/open'
import {Spacer} from "../../UI/spacer.component";
import { Icon, RestaurantCard, RestaurantCardCover, Info, Section, Rating, IsOpen} from "./restaurant-info-card.styles";

export default function RestaurantInfoCard({ restaurant }) {
 

  const ratingArray = Array.from(new Array(Math.floor(restaurant.rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={restaurant.name} source={{ uri: restaurant.photos[0] }} />
      <Info>
        <Text variant='label'>{restaurant.name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((val, index)=> <SvgXml key={index} xml={star} width={20} height={20}/>)}        
          </Rating>
          <IsOpen>
            {restaurant.isClosedTemporarily && <Text variant='error'>CLOSED TEMPORARILY</Text>}
            <Spacer position='left' size='medium'  />
            {restaurant.isOpenNow && <SvgXml xml={open} width={20} height={20}/>}            
          </IsOpen>
          <Spacer  position='left' size='medium'/>
          <Icon source={{uri: restaurant.icon}}/>
        </Section>
        <Text variant='caption'>{restaurant.vicinity}</Text>
      </Info>
    </RestaurantCard>
  );
}