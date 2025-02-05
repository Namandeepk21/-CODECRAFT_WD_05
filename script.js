function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "22f230618ea1b97559bbbea62f3709c5"; // Replace with your OpenWeatherMap API key
    if(!city) {
        alert('Please enter city');
        return;

    }
    const currentweatherUrl = 'https://openweathermap.org/data/2.5/weather?q=${city}&appid=${api}';
    const forecastUrl ='https://openweathermap.org/data/2.5/weather?q=${city}&appid=${api}';
    function getWeather(){
        fetch(currentWeatherUrl)
        .then(response => response.Jason())
        .then(data => {
            displayWeather(data);
        })
        .catch(error =>{
            console.error('Error fetching current weather data:', error);
            alert('Error fetching current weather data. Please try again.');
        });
    }
    function displayWeather(data){
        const tempDivInfo = document.getElementById('temp-div');
        const weatherInfoDiv = document.getElementById('Weather-info');
        const weatherIcon = document.getElementById('weather-icon');
        const hourlyForecastDiv = document.getElementById('hourly-forecast');
    }
function display(data) {
    if(data.cod == '404'){
        weatherInfoDiv.innerHTML = '<p>${data.message}</p>';
    } else{
        const cityName = data.name;
        const temperature = Math.round(data.main.temp-273.15);
        const iconCode = data.weather[0].icon;
        const iconUrl = 'https://openweathermap.org/img/wn/${iconCode}@4x.png';
        const  temperatureHTML = '<p>${temperature}C</p>';
        const weatherHTML = '<p> ${cityname} </p>';
       const descriptionHTML = '<p>${description}</p> ';
        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHTML;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;
        showImage();
        function displayHourlyForecast(hourlyData) {
            const hourlyForecastDiv = document.getElementById('hourly-fourcast');
            const next24Hours = hourlyData.slice(0,8);
            next24Hours.foreach(item=>{
                const dateTime = new Date(item.dt * 1000);
  const hour = dateTime.getHours();

  const temperature = Math.round(item.main.temp - 273.15);
  const iconCode = item.weather[0].icon;
  const iconUrl = 'https://openweathermap.org/img/wn/${iconCode}.png';

  const hourlyItemHtml = `
    <div class="hourly-item">
      <span>${hour}:00</span>
      <img src="${iconUrl}" alt="Hourly Weather Icon">
      <span>${temperature}°C</span>
    </div>
  `;

  hourlyForecastDiv.innerHTML += hourlyItemHtml;


            });
            function showImage(){
                const weatherIcon = document.getElementById('weather-icon');
                weatherIcon.style.display = 'block';
            }
        }
    }
    }
}



