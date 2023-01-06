import React, {useEffect} from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { SettingsScreen } from '../../screens/settings/settings.screen';
import { FavouritesScreen } from '../../screens/favourites/favourites.screen';

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
    return (
        <SettingsStack.Navigator
            headerMode='none'
            screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,}}
        >
            <SettingsStack.Screen 
                name='Settings'
                component={SettingsScreen}
            />
            <SettingsStack.Screen 
                name='Favourites'
                component={FavouritesScreen}
            />
        </SettingsStack.Navigator>
    );
};
