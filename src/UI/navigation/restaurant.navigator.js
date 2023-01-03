import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import RestaurantsScreen from '../../screens/restaurants/restaurants.screen';
import { RestaurantDetailsScreen } from '../../components/restaurants/restaurant-details.screen';


const RestaurantStack = createStackNavigator();
export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator headerMode='none' screenOptions={{...TransitionPresets.ModalPresentationIOS}}>
            <RestaurantStack.Screen 
                name='Restaurants'
                component={RestaurantsScreen}
            />
            <RestaurantStack.Screen 
                name='RestaurantDetail'
                component={RestaurantDetailsScreen}
            />
        </RestaurantStack.Navigator>
    )
}
