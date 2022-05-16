const apiUrl =
  "https://api.weatherbit.io/v2.0/forecast/daily?city=iledelareunion&key=7bc152c09b624226978633b7943659b1&days=5&lang=fr";

const weatherDisplay = (data) => {
  const { temp, icon } = data;
  console.log(data);
  const iconUrl = `https://www.weatherbit.io/static/img/icons/${icon}.png`;
  const tempDisplay = document.querySelector(".weather-temp");
  tempDisplay.textContent = `${temp}°C`;
  const iconDisplay = document.querySelector(".weather-icon");
  iconDisplay.src = `${iconUrl}`;
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
