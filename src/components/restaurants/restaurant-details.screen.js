import React, {useState} from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';

import RestaurantInfoCard from './restaurant-info-card.component'

export const RestaurantDetailsScreen = ({route}) => {
    /* we get a route prop from the RestaurantStack.Navigator */
    const {restaurant} = route.params;

    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);
    
    return (
        <ScrollView>
            <RestaurantInfoCard restaurant = {restaurant} />
            <List.Accordion 
                title='Breakfast'
                left={(props) => <List.Icon {...props} icon='bread-slice' />} 
                expanded={breakfastExpanded}
                onPress={() => setBreakfastExpanded(!breakfastExpanded)}
            >
                <List.Item title="Eggs Benedict" />
                <List.Item title="Classic Breakfast" />
            </List.Accordion>
              <List.Accordion 
                title='Lunch'
                left={(props) => <List.Icon {...props} icon='hamburger' />} 
                expanded={lunchExpanded}
                onPress={() => setLunchExpanded(!lunchExpanded)}
            >
                <List.Item title="Burgers & Fries" />
                <List.Item title="Poutine" />
                <List.Item title="Club Sandwich" />
                <List.Item title="Celeri Cream Soup" />
            </List.Accordion>
              <List.Accordion 
                title='Dinner'
                left={(props) => <List.Icon {...props} icon='food-variant' />} 
                expanded={dinnerExpanded}
                onPress={() => setDinnerExpanded(!dinnerExpanded)}
            >
                <List.Item title="Filet Mignon" />
                <List.Item title="Spaghetti Bolognese" />
                <List.Item title="Chicken Caesar Salad" />
            </List.Accordion>
              <List.Accordion 
                title='Drinks'
                left={(props) => <List.Icon {...props} icon='cup' />} 
                expanded={drinksExpanded}
                onPress={() => setDrinksExpanded(!drinksExpanded)}
            >
                <List.Item title="Vodka Cranberry" />
                <List.Item title="Champagne" />
                <List.Item title="Molson Beers" />
                <List.Item title="Coffee" />
                <List.Item title="Coke" />
            </List.Accordion>    
        </ScrollView>
    )
};
