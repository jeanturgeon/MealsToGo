import React, {useState, createContext, useEffect} from 'react';
import { locationReq, locationTransform } from './location.service';

export const LocationContext= createContext();

export const LocationContextProvider = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState('');
    const [keyword, setKeyword] = useState('San Francisco');

    const onSearch = (searchKeyword) => {      
        setIsLoading(true);
        setKeyword(searchKeyword);              
    }

    useEffect(() => {
        if(!keyword.length) {
            return;
        }
        locationReq(keyword.trim().toLowerCase())
            .then(locationTransform)
            .then(result => {
                setLocation(result);
                setIsLoading(false);                
            })
            .catch(err => {
                setIsLoading(false);
                setError(err);
            });
    },[keyword])

    return (
        <LocationContext.Provider
            value={{
                isLoading,
                error,
                location, 
                search: onSearch,
                keyword
            }}
        >
            {props.children}
        </LocationContext.Provider>
    )

}