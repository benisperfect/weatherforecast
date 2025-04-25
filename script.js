import * as data1 from './function.js'
import * as data from './const.js';

data.menuButton.addEventListener("click", data1.RotateAndShowMenuSideBar);
data.HomeTextButton.addEventListener("click", data1.HomeTextButton);
data.profile.addEventListener("click", data1.RotateAndShowSettingSideBar);
data.settingbuttonText.addEventListener("click", data1.settingButtonText);
data.logInButton.addEventListener("click", data1.loginoutScreen);
data.logInButton.addEventListener("click", data1.LoginButton);
data.logout.addEventListener("click", data1.LogoutButton);
data.darklight.addEventListener("click", data1.darkLightToggle);
data.darklightText.addEventListener("click", data1.darkLightToggle);

// Weather API data
import { getWeatherData } from './geocoding.js';
getWeatherData('Tokyo').then(info => {
    console.log('Weather Data:', data);
    //const
    const temp = document.getElementById("temp");
    const weather_like = document.getElementById("weather_like");
    const humidity = document.getElementById("humidity");
    const description = document.getElementById("description");
    const pressure = document.getElementById("pressure");
    const seaLevel = document.getElementById("sea-level");
    const windspeed = document.getElementById("wind");
    const country = document.getElementById("country");
    const sunrise = document.getElementById("sunrise");
    const sunset = document.getElementById("sunset");

    //print innerHTML text
    temp.innerText = `${info.temp}`;
    humidity.innerText = `${info.humidity}`;
    description.innerText = `${info.description}`;
    windspeed.innerText = `${info.wind}`;
    // document.getElementById("country").innerText = `Country: ${data.country}`;
    // document.getElementById("sea-level").innerText = `Sea Level: ${data.sea_lvl}`;
    // document.getElementById("pressure").innerText = `Pressure: ${data.pressure}`;
    // document.getElementById("sunrise").innerText = `Sunrise: ${new Date(data.sunrise * 1000).toLocaleTimeString()}`;
    // document.getElementById("sunset").innerText = `Sunset: ${new Date(data.sunset * 1000).toLocaleTimeString()}`;

    //func
    const roundedTemp = Math.round(info.temp);
    if (info.rain !== 0) {
        if (roundedTemp >= 25 && roundedTemp <= 30) {
            weather_like.src = './image/weather_icon/cloud-sun-rain.png';
        }
        if (roundedTemp >= 0 && roundedTemp <= 24) {
            weather_like.src = './image/weather_icon/cloud-showers.png';
        }
    }
    })
