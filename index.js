function searchCity(city) {
  let apiKey = "Y3o2feet790854a8c48a5d1d7523a0fbb";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#city-name").innerHTML = data.city;
      document.querySelector("#temperature").innerHTML =
        Math.round(data.temperature.current) + "°C";

      document.querySelector("#humidity").innerHTML =
        data.temperature.humidity + "%";

      document.querySelector("#wind").innerHTML = data.wind.speed + " km/h";

      document.querySelector("#description").innerHTML =
        data.condition.description;

      document.querySelector("#weather-icon").src = data.condition.icon_url;
    })
    .catch(() => alert("City not found 🥲 Try another one."));
}

// Handle form submit
let form = document.querySelector("#search-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
});
