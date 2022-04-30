const API_KEY = "27773098d92b3037352b09fea1033540";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&lang=kr&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const city = document.querySelector("#weather div:first-child");
      const weather = document.querySelector("#weather div:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].description} / ${data.main.temp} `;
    });
}
function onGeoError() {
  alert("위치 공유를 해주세요.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
