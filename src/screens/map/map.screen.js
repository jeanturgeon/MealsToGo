import React, {useState, useEffect, useContext} from 'react';
import MapView, {Marker, Callout} from 'react-native-maps';
import styled from 'styled-components/native';

import {Search as SearchBarMap} from '../../components/map/search-bar-map.component';
import { LocationContext } from '../../services/location/location.context';
import { RestaurantsContext } from '../../services/restaurants/restaurants.context';
import {MapCallout} from '../../components/map/map-callout.component';

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`

export const MapScreen = ( {navigation} /* from the Navigator*/ ) => {

    const {location} = useContext(LocationContext);
    const {restaurants =[]} = useContext(RestaurantsContext);

    const [latDelta, setLatDelta] = useState(0);
    const {lat, lng, viewport} = location;

    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;
        
        setLatDelta( northeastLat - southwestLat); 
        /* to know which part of the city map to render on load (North-South distance) */

    },[location, viewport]);

    return (
        <>
            <SearchBarMap />
            <Map 
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02 /* East-West zoom level */
                }}
            >
                {restaurants.map((restaurant) => {
                    return (
                        <Marker
                            key={restaurant.name}
                            title={restaurant.name}
                            coordinate={{
                                latitude: restaurant.geometry.location.lat,
                                longitude:restaurant.geometry.location.lng,
                            }}
                        >
                            <Callout
                                onPress={() => navigation.navigate("RestaurantDetail", {restaurant: restaurant})}
                            >
                                <MapCallout restaurant={restaurant}/>
                            </Callout>
                        </Marker>                        
                    )
                })}
            </Map>
        </>
    )
}