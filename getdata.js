const API_KEY = '7fc28b2d305242b7f58c57dd5bad9957';
const cityWeather = async (city) => {
    try {
        const cityWeatherResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`);
        const cityWeatherData = await cityWeatherResponse.json();

        if (!cityWeatherData || cityWeatherData.length === 0) {
            throw new Error('No City Found.');
        }

        const { lat, lon } = cityWeatherData[0];
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const weatherData = await weatherResponse.json();
        console.log('Weather Data:', weatherData);
        return weatherData;
    } catch (error) {
        console.log('Error: ', error);
    }
}

cityWeather('Tokyo');
