import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faWind, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

function WeatherInfoDetails({ weatherInfo, getTemperatureColor }) {
    const [humidityAnimation, setHumidityAnimation] = useState(false);
    const [windAnimation, setWindAnimation] = useState(false);
    const [pressureAnimation, setPressureAnimation] = useState(false);

    useEffect(() => {
        const humidityInterval = setInterval(() => {
            setHumidityAnimation(prevState => !prevState);
        }, 1000);
        const windInterval = setInterval(() => {
            setWindAnimation(prevState => !prevState);
        }, 1500);
        const pressureInterval = setInterval(() => {
            setPressureAnimation(prevState => !prevState);
        }, 2000);

        return () => {
            clearInterval(humidityInterval);
            clearInterval(windInterval);
            clearInterval(pressureInterval);
        };
    }, []);

    return (
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] p-2">
            <div className="text-center">
                <p className="text-lg text-white">{weatherInfo.weather[0].description}</p>
                <p className={`text-white ${getTemperatureColor(weatherInfo.main.temp)}`}>Temperature: {weatherInfo.main.temp} °C</p>
                <div className={`flex items-center justify-center mt-2 ${humidityAnimation ? 'text-blue-400' : 'text-white'}`}>
                    <FontAwesomeIcon icon={faTint} className="mr-2" style={{ fontSize: "2em" }} />
                    <p className="transition-all duration-300 ease-in-out">Humidity: {weatherInfo.main.humidity}%</p>
                </div>
                <div className={`flex items-center justify-center mt-2 ${windAnimation ? 'text-blue-400' : 'text-white'}`}>
                    <FontAwesomeIcon icon={faWind} className="mr-2" style={{ fontSize: "2em" }} />
                    <p className="transition-all duration-300 ease-in-out">Wind Speed: {weatherInfo.wind.speed} m/s</p>
                </div>
                <div className={`flex items-center justify-center mt-2 ${pressureAnimation ? 'text-blue-400' : 'text-white'}`}>
                    <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" style={{ fontSize: "2em" }} />
                    <p className="transition-all duration-300 ease-in-out">Pressure: {weatherInfo.main.pressure} hPa</p>
                </div>
            </div>
        </div>
    );
}

export default WeatherInfoDetails;
