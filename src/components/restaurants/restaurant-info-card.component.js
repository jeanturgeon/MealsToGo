import { Text } from "../../UI/text.component";
import { SvgXml } from "react-native-svg";

import star from '../../../assets/star'
import open from '../../../assets/open'
import {Spacer} from "../../UI/spacer.component";
import { Icon, RestaurantCard, RestaurantCardCover, Info, Section, Rating, IsOpen} from "./restaurant-info-card.styles";

export default function RestaurantInfoCard({ restaurant = {} }) {

  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;
 

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={restaurant.name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant='label'>{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((val, index)=> <SvgXml key={`star-${placeId}-${index}`} xml={star} width={20} height={20}/>)}        
          </Rating>
          <IsOpen>
            {isClosedTemporarily && <Text variant='error'>CLOSED TEMPORARILY</Text>}
            <Spacer position='left' size='medium'  />
            {isOpenNow && <SvgXml xml={open} width={20} height={20}/>}            
          </IsOpen>
          <Spacer  position='left' size='medium'/>
          <Icon source={{uri: icon}}/>
        </Section>
        <Text variant='caption'>{address}</Text>
      </Info>
    </RestaurantCard>
  );
}