function searchCity(city) {
  let apiKey = "3o2feet790854a8c48a5d1d7523a0fbb";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (!data.city) {
        alert("City not found 🥲");
        return;
      }

      document.querySelector("#city-name").innerHTML = data.city;

      document.querySelector("#temperature").innerHTML =
        Math.round(data.temperature.current) + "°C";

      document.querySelector("#humidity").innerHTML =
        data.temperature.humidity + "%";

      document.querySelector("#wind").innerHTML = data.wind.speed + " km/h";

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

      let hours = now.getHours().toString().padStart(2, "0");
      let minutes = now.getMinutes().toString().padStart(2, "0");

      let time = `${hours}:${minutes}`;

      document.querySelector(
        "#description"
      ).innerHTML = `${day} ${time} • ${data.condition.description}`;

      document.querySelector(
        "#weather-icon"
      ).src = `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${data.condition.icon}.png`;
    })
    .catch((error) => {
      console.log(error);
      alert("Something went wrong.");
    });
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
});
