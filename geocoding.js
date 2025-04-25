const API_KEY = '7fc28b2d305242b7f58c57dd5bad9957';
const cityWeather = async (city) => {
    try {
        const cityWeatherResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`);
        const cityWeatherData = await cityWeatherResponse.json();

        if (!cityWeatherData || cityWeatherData.length === 0) {
            throw new Error('No City Found.');
        }

        const { lat, lon } = cityWeatherData[0];
        const WeatherResponse2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const weatherData2 = await WeatherResponse2.json();
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const weatherData = await weatherResponse.json();

        // Extracting specific data from weatherData
        const { main, weather, wind, sys } = weatherData;
        console.log('Weather Data:', weatherData);
        console.log('Rain: ', weatherData2.list[0].rain);
        // console.log({ main, weather, wind, sys });
        return { main, weather, wind, sys, rain: weatherData2.list[0].rain };

    } catch (error) {
        console.log('Error: ', error);
    }
}

export const getWeatherData = async () => {
    const data = await cityWeather('Tokyo');

    return {
        description: data.weather[0].description,
        temp: data.main.temp,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        sea_lvl: data.main.sea_level,
        wind: data.wind.speed,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        rain: data.rain ? data.rain['1h'] : 0,
    };
};
