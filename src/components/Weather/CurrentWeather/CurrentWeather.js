import React from 'react';
import {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import {fetchWeatherAction} from '../../../redux/slices/weatherSlices'

import style from './CurrentWeather.module.scss'

const CurrentWeather = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state);
    const {weather} = state

    useEffect(() => {
        dispatch(fetchWeatherAction("Kyiv"));
      }, []);

    return (
        <div>
            <div className={style.wrapper}>
                <div className={style.mainInfo}>
                    <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`} alt="/" />
                    <p>{weather?.weather[0].main}</p>
                </div>
                <h3 className={style.position}>
                    {weather?.name}, {weather?.sys?.country}
                </h3>
                <h4 className={style.temperature}>{Math.ceil(Number(weather?.main.temp - 276))} °C</h4>
                <p className={style.description}>
                    The weather condition in {weather?.name}, {weather?.sys?.country} is described as : {weather?.weather[0].description} with a temperature of {Math.ceil(Number(weather?.main.temp)) - 276} °C and a humidity of {weather?.main?.humidity} %
                  </p>
            </div>
        </div>
    );
};

export default CurrentWeather;