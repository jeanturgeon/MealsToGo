import React from 'react';
import RestaurantInfoCard from './restaurant-info-card.component'

export const RestaurantDetailsScreen = ({route}) => {
    /* we get a route prop from the RestaurantStack.Navigator */
    const {restaurant} = route.params;
    
    return <RestaurantInfoCard restaurant = {restaurant} />    
};
