
import camelize from "camelize";
import { mocks, mockImages } from "./mock/";

export const restaurantsReq = (location = "37.7749295,-122.4194155" /*SFO*/) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    !mock ? reject("not found") : resolve(mock);
  });
};

export const restaurantsTransform = ({results = []}) => {
    const mappedResults = results.map((restaurant) => {
        restaurant.photos = restaurant.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
        });
        return {
            ...restaurant, 
            /* 
            *we are taking all the exisiting properties that are currently 
            *in the returned restaurant and adding our own properties:
             */
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
            /*
            *Some restaurants don't have the field opening_hours. So we need to verify that 
            *the field exists and that the open_now field is set to true to make sure that 
            *the restaurant is indeed Open Now
            */
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now, 

        };
    } )
    return camelize(mappedResults);
}