import React, {useState, createContext} from 'react';
import { locationReq, locationTransform } from './location.service';

export const LocationContext= createContext();

export const LocationContextProvider = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState('');
    const [keyword, setKeyword] = useState('');

    const onSearch = (searchKeyword) => {      
        setIsLoading(true);
        setKeyword(searchKeyword);        
        if(!searchKeyword.length) {
            return;
        }
        locationReq(searchKeyword.trim().toLowerCase())
            .then(locationTransform)
            .then(result => {
                setLocation(result);
                setIsLoading(false);                
            })
            .catch(err => {
                setIsLoading(false);
                setError(err);
            });
    }

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