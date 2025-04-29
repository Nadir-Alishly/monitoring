// import icons from fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudSun, faCloudRain, faCloudShowersHeavy, faCloudBolt, faSmog, faSnowflake, faQuestion, faDroplet, faWater, faArrowsDownToLine, faEye } from '@fortawesome/free-solid-svg-icons';

import { PuffLoader } from 'react-spinners';

// import styles
import '../styles/WeatherCard.css';

interface props {
    loading: boolean;
    location: string;
    date_time: string;
    weatherCode: string;
    weatherDesc: string;
    temp_C: string;
    FeelsLikeC: string;
    cloudcover: string;
    humidity: string;
    perscipMM: string;
    pressure: string;
    uvIndex: string;
    visibility: string;
    winddir16Point: string;
    windspeedKmph: string;
}

function WeatherCard({loading, location, date_time, weatherCode, weatherDesc, temp_C, FeelsLikeC, cloudcover, humidity, perscipMM, pressure, uvIndex, visibility, winddir16Point, windspeedKmph}: props) {

    // function for formatting dte
    const formatDate = (date: string) => {
        const formatted = new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        }).replace(',', '');
        return formatted;
    }

    // function for getting the icon based on weather code
    const getIcon = (weatherCode: string) => {
        switch (weatherCode) {
            case '113':
                return <FontAwesomeIcon icon={faSun} />;
            case '116':
                return <FontAwesomeIcon icon={faCloudSun} />;
            case '119':
                return <FontAwesomeIcon icon={faCloud} />;
            case '296':
                return <FontAwesomeIcon icon={faCloudRain} />;
            case '353':
                return <FontAwesomeIcon icon={faCloudShowersHeavy} />;
            case '389':
                return <FontAwesomeIcon icon={faCloudBolt} />;
            case '248':
                return <FontAwesomeIcon icon={faSmog} />;
            case '227':
                return <FontAwesomeIcon icon={faSnowflake} />;
            //More codes can be added here    
            default:
                return <FontAwesomeIcon icon={faQuestion} />;
        }
    }

    // check if loading
    if (loading) {
        return (
            <div className="weather-card">
                <div className='weather-card-loading'>
                    <PuffLoader color='#fff' loading={loading} size={60} />
                </div>
            </div>
        )
    }

    return (
        <div className="weather-card">

            <h4 className='weather-card-date'>{formatDate(date_time)}</h4>

            <h2 className='weather-card-location'>{location}</h2>
            
            <div className="weather-card-icon">
                {getIcon(weatherCode)}
                <p>{weatherDesc}</p>
            </div>
            
            <h1 className='weather-card-temperature'>{temp_C}°</h1>
            <h3 className='weather-card-temperature-feels'>Feels like {FeelsLikeC}°</h3>
        
            <ul className='weather-card-details'>
                <li title='Cloud Cover'>
                    <FontAwesomeIcon icon={faCloud} />
                    <p>{cloudcover}%</p>
                </li>
                <li title='Humidity'>
                    <FontAwesomeIcon icon={faDroplet} />
                    <p>{humidity}%</p>
                </li>
                <li title='Precipitation'>
                    <FontAwesomeIcon icon={faWater} />
                    <p>{perscipMM}mm</p>
                </li>
                <li title='Pressure'>
                    <FontAwesomeIcon icon={faArrowsDownToLine} />
                    <p>{pressure}hPa</p>
                </li>
                <li title='UV Index'>
                    <FontAwesomeIcon icon={faSun} />
                    <p>{uvIndex}(UV)</p>
                </li>
                <li title='Visibility'>
                    <FontAwesomeIcon icon={faEye} />
                    <p>{visibility}km</p>
                </li>
            </ul>

            <p className='weather-card-wind'>Wind: {winddir16Point} {windspeedKmph}km/h</p>
        </div>
    )
}

export default WeatherCard;