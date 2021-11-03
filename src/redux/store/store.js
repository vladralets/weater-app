import {configureStore} from "@reduxjs/toolkit";
import weatherReducer from "../slices/weatherSlices"

export const store = configureStore({
    reducer: weatherReducer,
})

