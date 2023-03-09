let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

function showWhen() {
  let h6 = document.querySelector("h6");
  h6.innerHTML = `${day} ${hours}:${minutes}`;
}
showWhen();

function searchCity(event) {
  event.preventDefault();

  let cityName = document.querySelector("h2");
  let cityInput = document.querySelector("#city-input");
  cityName.innerHTML = `${cityInput.value}`;

  let units = "metric";
  let apiKey = `000e705a9dacee472a121f7e5978d1ca`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=${units}`;
  function changeTemp(response) {
    let temp = document.querySelector(".display");
    temp.innerHTML = Math.round(`${response.data.main.temp}`);
    let humidity = document.querySelector("#humid");
    humidity.innerHTML = Math.round(`${response.data.main.humidity}`);
    let high = document.querySelector("#high");
    high.innerHTML = Math.round(`${response.data.main.temp_max}`);
    let low = document.querySelector("#low");
    low.innerHTML = Math.round(`${response.data.main.temp_min}`);
  }
  axios.get(`${apiUrl}`).then(changeTemp);
}
let form = document.querySelector("form");
form.addEventListener("submit", searchCity);
