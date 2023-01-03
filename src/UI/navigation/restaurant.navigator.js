import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import RestaurantsScreen from '../../screens/restaurants/restaurants.screen';
import {Text} from '../text.component'

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
                component={() => <Text>Restaurant Details</Text>}
            />
        </RestaurantStack.Navigator>
    )
}
