import React from 'react';
import style from './QueriesHistory.module.scss'
import {useSelector, useDispatch} from "react-redux";
import {fetchWeatherAction} from "../../redux/slices/weatherSlices";


const QueriesHistory = () => {
    const state = useSelector(state => state);
    const { citiesHistory } = state
    const dispatch = useDispatch()


    return (
        <div className={style.wrapper}>
            <p className={style.title}>Last 10 queries</p>
            <ul className={style.queries}>
                {citiesHistory.map(city => (
                    <li key={city} className={style.queryItem}>
                        <button className={style.queryBtn} onClick={() => dispatch(fetchWeatherAction(city))}>{city}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QueriesHistory;