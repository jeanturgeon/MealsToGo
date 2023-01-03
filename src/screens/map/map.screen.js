import React, {useState, useEffect, useContext} from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';

import {Search as SearchBarMap} from '../../components/map/search-bar-map.component';

const Map = styled(MapView)`
    height: 100%;
    width: 100%;
`

export const MapScreen = () => {


    return (
        <>
            <SearchBarMap />
            <Map />
        </>
    )
}