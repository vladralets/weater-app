import style from './CitySearch.module.scss'
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import {fetchWeatherAction} from '../../redux/slices/weatherSlices'

import React from 'react';

const CitySearch = () => {
    const dispatch = useDispatch();

    const [city, setCity] = useState("Kyiv");

    
    return (
        <form className={style.cityForm} onSubmit={(e) => {
            e.preventDefault();
            dispatch(fetchWeatherAction(city))
            setCity('')}
        }>
            <label className={style.label} htmlFor="city">Weater Forecast</label>
            <div>
                <input className={style.input} 
                        type="text" 
                        id='city' 
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        placeholder="Search City"
                        />
                <button className={style.button}>Search</button>
            </div>
        </form>
    );
};

export default CitySearch;