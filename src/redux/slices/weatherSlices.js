import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const key = '72a15cc46bc81e06a0739bfe8356c582'

export const fetchWeatherAction = createAsyncThunk(
    "weather/fetch",
    async (payload, {rejectWithValue, getState, dispatch}) => {
        try {
            const {data} = await axios.get(
                `http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${key}`
            );
            return data;
        } catch (error) {
            if (!error?.response) {
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }
    }
);


const weatherSlice = createSlice({
    name: "currentWeather",
    initialState: {
        loading: false,
        error: undefined,
        citiesHistory: []
    },
    extraReducers: builder => {
        builder.addCase(fetchWeatherAction.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
            state.weather = action?.payload;
            state.loading = false;
            state.error = undefined;
            const citiesHistory = state.citiesHistory.filter(city => city !== action.payload.name);
            citiesHistory.unshift(action.payload.name);
            state.citiesHistory = citiesHistory.slice(0, 5)
        });
        builder.addCase(fetchWeatherAction.rejected, (state, action) => {
            state.loading = false;
            state.weather = undefined;
            state.error = action?.payload;
        });
    },
});

export default weatherSlice.reducer