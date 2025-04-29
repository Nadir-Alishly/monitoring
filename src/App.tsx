import { useState, useEffect } from 'react';

// import styles
import './styles/App.css';

// import components
import WeatherCard from './components/WeatherCard';

function App() {

    const [weatherData, setWeatherData] = useState<any>({});
    const [loading, setLoading] = useState(true);

    // hard coded location!
    const location = "Istanbul";

    useEffect(() => {
        getWeatherData();
    }, []);

    // fetch weather data from wttr.in
    const getWeatherData = async () => {
        await fetch("https://wttr.in/Istanbul?format=j1")
            .then(response => response.json())
            .then(json => json.current_condition[0])
            .then(data => setWeatherData(data))
            .then(() => setLoading(false))
            .catch(err => console.log(err));
    }

    return (
        <div className="App">
            <WeatherCard 
                loading={loading}
                location={location} 
                date_time={weatherData.localObsDateTime ?? ""}
                weatherCode={weatherData.weatherCode ?? ""}
                weatherDesc={weatherData.weatherDesc ? weatherData.weatherDesc[0].value : ""}
                temp_C={weatherData.temp_C ?? ""}
                FeelsLikeC={weatherData.FeelsLikeC ?? ""}
                cloudcover={weatherData.cloudcover ?? ""}
                humidity={weatherData.humidity ?? ""}
                perscipMM={weatherData.precipMM ?? ""}
                pressure={weatherData.pressure ?? ""}
                uvIndex={weatherData.uvIndex ?? ""}
                visibility={weatherData.visibility ?? ""}
                winddir16Point={weatherData.winddir16Point ?? ""}
                windspeedKmph={weatherData.windspeedKmph ?? ""}
            />
        </div>
    );
}

export default App;