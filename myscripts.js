// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// alert("hi")

const weatherApi = {
    key: "71b9d42ffc05fdbe6adfdeae76b23d5a",
    baseUrl: " https://api.openweathermap.org/data/2.5/weather"
}
const searchInputBox = document.getElementById('input-box');
// Event Listener function on Keypress
searchInputBox.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        console.log(searchInputBox.value);
        getweatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }
})

//Get weather report

function getweatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(showWeatherReport);
}

//show weather report
function showWeatherReport(weather) {
    console.log(weather);
    let city = document.getElementById('city'); {
        city.innerHTML = `<i class="fa-solid fa-city"></i> ${weather.name}, ${weather.sys.country}`;
    }
    let latLon = document.getElementById('lat-lon'); {
        latLon.innerHTML = `<i class="fa-solid fa-globe"></i> Latitude ${weather.coord.lat}&deg N <i class="fa-solid fa-globe"></i> Longitude ${weather.coord.lon}&deg; E`;
    }
    let tempreature = document.getElementById('temp'); {
        tempreature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
    }
    let feelLiketemp = document.getElementById('feel-temp'); {
        feelLiketemp.innerHTML = `Feels Like ${Math.round(weather.main.feels_like)}&deg;C`;
    }
    let minMaxtemp = document.getElementById('min-max'); {
        minMaxtemp.innerHTML = `<i class="fa-solid fa-temperature-low"></i> Min ${Math.floor(weather.main.temp_min)}&deg;C    <i class="fa-solid fa-temperature-high"></i> Max ${Math.ceil(weather.main.temp_max)}&deg;C`;
    }
    let humidity = document.getElementById('humidity'); {
        humidity.innerHTML = `<i class="fa-solid fa-droplet"></i> Humidity ${(weather.main.humidity)}%`;
    }
    let pressure = document.getElementById('pressure'); {
        pressure.innerHTML = `Pressure ${(weather.main.pressure)}mb`;
    }
    let windSpeed = document.getElementById('wind'); {
        windSpeed.innerHTML = `<i class="fa-solid fa-wind"></i> Wind Speed ${(weather.wind.speed)}km/h`;
    }
    let weatherType = document.getElementById("weather"); {
        weatherType.innerText = `${weather.weather[0].main}`;
    }
    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerHTML = dateMange(todayDate);
    if (weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('clear.jpg')"
    }
    else if (weatherType.textContent == 'Clouds') {
        document.body.style.backgroundImage = "url('cloud.jpg')"
    }
    else if (weatherType.textContent == 'Haze') {
        document.body.style.backgroundImage = "url('haze.jpg')"
    }
    else if (weatherType.textContent == 'Rain') {
        document.body.style.backgroundImage = "url('rain.jpg')"
    }
    else if (weatherType.textContent == 'Smoke') {
        document.body.style.backgroundImage = "url('smoke.jpg')"
    }
    else if (weatherType.textContent == 'Snow') {
        document.body.style.backgroundImage = "url('snow.jpg')"
    }
    else if (weatherType.textContent == 'Thunderstrom') {
        document.body.style.backgroundImage = "url('thunder strome.jpg')"
    }

}
//date manage
function dateMange(dateArg) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];
    return `<i class="fa-regular fa-calendar"></i> ${date}-${month}-${day}-${year}`;
}