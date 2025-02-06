async function fetchWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=3df6a5be170e40289ec165011250701&q=${city}&aqi=yes`
        );

        const data = await response.json();
        console.log('data', data);

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
                const response = await fetch(
                    `https://api.weatherapi.com/v1/current.json?key=3df6a5be170e40289ec165011250701&q=${latitude},${longitude}&api=yes`);
                const data = await response.json();
                console.log('data', data);
                updateWeatherUI(data);
            } catch (error) {
                console.error("Error fetching weather:", error);
            }
        },
        (error) => {
                console.error("Geolocation error:", error);
                if (error.code === error.PERMISSION_DENIED) {
                    alert("Please enable location services or allow access to location to get weather updates.");
                } else if (error.code === error.POSITION_UNAVAILABLE) {
                    alert("Location information is unavailable. Please try again.");
                } else if (error.code === error.TIMEOUT) {
                    alert("Request to get location timed out. Please try again.");
                } else {
                    alert("An unknown error occurred while fetching location.");
                }
            }
        );
    } else {
        window.alert("Geolocation is not supported by this browser.");
    }
}

// Function to update the UI with fetched weather data
function updateWeatherUI(data) {
    document.getElementById("city").innerText = data.location.name;
    document.getElementById("temperature").innerText = data.current.temp_c + '°C';
    document.getElementById("description").innerText = data.current.condition.text;
    document.getElementById("humidity").innerText = `${data.current.humidity}%`;
    document.getElementById("wind").innerText = `${data.current.wind_kph} km/h`;

    // Update weather icon
    const icon = data.current.condition.icon;
    document.getElementById("weather-icon").src = icon;

}