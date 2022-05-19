const apiUrl =
  "https://api.weatherbit.io/v2.0/forecast/daily?city=iledelareunion&key=7bc152c09b624226978633b7943659b1&days=5&lang=fr";

const weatherDisplay = (data) => {
  const weatherDisplay = document.querySelector(".weather");
  const { temp, icon } = data;
  console.log(data);
  const iconUrl = `https://www.weatherbit.io/static/img/icons/${icon}.png`;
  const iconDisplay = document.createElement("img");
  iconDisplay.classList.add("weather-icon");
  iconDisplay.src = `${iconUrl}`;
  iconDisplay.alt = "Icone météo";
  weatherDisplay.appendChild(iconDisplay);

  const tempDisplay = document.createElement("span");
  tempDisplay.classList.add("weather-temp");
  tempDisplay.textContent = `${temp}°C`;
  weatherDisplay.appendChild(tempDisplay);
};

fetch(apiUrl).then((response) => {
  response.json().then((data) => {
    const currentWeather = data.data[0];
    const currentData = {
      temp: currentWeather.temp,
      icon: currentWeather.weather.icon,
      dateTime: currentWeather.datetime,
    };
    weatherDisplay(currentData);
  });
});
