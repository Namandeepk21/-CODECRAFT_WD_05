const apiKey = "22f230618ea1b97559bbbea62f3709c5"; // Replace with your OpenWeatherMap API key
 // Replace with your OpenWeatherMap API key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

// Function to fetch weather by city name
async function fetchWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    try {
        const response = await fetch('${apiUrl}?q=${city}&appid=${apiKey}&units=metric');
        const data = await response.json();

        if (data.cod !== 200) {
            alert("City not found. Please enter a valid city.");
            return;
        }

        updateWeatherUI(data);
    } catch (error) {
        console.error("Error fetching weather:", error);
    }
}

// Function to fetch weather by user's current location
function getWeatherByLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            try {
                const response = await fetch('${apiUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric');
                const data = await response.json();
                updateWeatherUI(data);
            } catch (error) {
                console.error("Error fetching weather:", error);
            }
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Function to update the UI with fetched weather data
function updateWeatherUI(data) {
    document.getElementById("city").innerText = data.name;
    document.getElementById("temperature").innerText ='${Math.round(data.main.temp)}°C';
    document.getElementById("description").innerText = 'data.weather[0].description';
    document.getElementById("humidity").innerText = '${data.main.humidity}% ';
    document.getElementById("wind").innerText = '${data.wind.speed} km/h';

    // Update weather icon
    const iconCode = 'data.weather[0].icon';
    document.getElementById("weather-icon").src = 'https://openweathermap.org/img/wn/${iconCode}.png';
}

// Auto-fetch weather on page load using user location
window.onload = getWeatherByLocation;