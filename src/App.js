import './App.scss';
import CitySearch from "./components/CitySearch/CitySearch";
import CityWeather from "./components/CityWeather/CityWeather";
import QueriesHistory from "./components/QueriesHistory/QueriesHistory";
import {Provider} from "react-redux";
import {store} from "./redux/store/store";
import CurrentWeather from "./components/Weather/CurrentWeather/CurrentWeather";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <div className='header'>
                    <CitySearch/>
                    <CityWeather/>
                </div>
                <QueriesHistory />
                <CurrentWeather />
            </div>
        </Provider>
    );
}

export default App;
