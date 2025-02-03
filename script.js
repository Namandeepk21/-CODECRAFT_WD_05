// const apiKey = "2821a1afb6f8a8f6c479999fcb9c66ed";
// function getWeather() {
//     const city= document.getElementById("city").value;
//     if(!city) {
//         alert("Please enter a city name");
//         return;
//     }

// }
// const url='https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${2821a1afb6f8a8f6c479999fcb9c66ed}&units=metric';
// fetch (url) .then(response=>response.json())
// .then(data=>{
//     if(data.cod=="404"){
//         document.getElementById("weather-info").
//         innerHTML="city not found!";
//         return;
//     }
//     const weatherInfo = `
//     <h3>${data.name}, ${data.sys.country}</h3>
//     <p>Temperature: ${data.main.temp}°C</p>
//     <p>Weather: ${data.weather[0].description}</p>
//     <p>Humidity: ${data.main.humidity}%</p>
//     <p>Wind Speed: ${data.wind.speed} m/s</p>
// `;

// document.getElementById("weather-info").innerHTML = weatherInfo;
// })
// .catch(error => {
// console.error("Error fetching data:", error);
// document.getElementById("weather-info").innerHTML = "Error retrieving data.";
// });

    
const apiKey = "2821a1afb6f8a8f6c479999fcb9c66ed";  // Replace with your actual API key

function getWeather() {
    const city = document.getElementById("city").value.trim();  // Get user input

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${2821a1afb6f8a8f6c479999fcb9c66ed}&units=metric;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(City not found (${response.status}));
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("weather-info").innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            document.getElementById("weather-info").innerHTML = <p style="color:red;">${error.message}</p>;
            console.error(error);
        });
}