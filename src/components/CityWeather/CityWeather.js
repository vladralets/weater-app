import React from 'react';
import style from './CityWeather.module.scss'
import {useSelector} from 'react-redux';

const CityWeather = () => {
    const state = useSelector(state => state);
    const {weather} = state

    const currentWeather = `${Math.ceil(Number(weather?.main.temp - 276))} °C`

    return (
        <div>
            <p className={style.text}>{!weather ? 'Data is loading' : `${weather.name} (Today) ${currentWeather}`}</p>
        </div>
    );
};

export default CityWeather;