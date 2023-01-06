import React, {useEffect} from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import { SettingsScreen } from '../../screens/settings/settings.screen';

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
                component={() => null}
            />
        </SettingsStack.Navigator>
    );
};
