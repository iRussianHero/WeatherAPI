let apiKey = "2a5e17dce8914cc1122f1e89e7fd69af";
let apiUrl = "https://api.openweathermap.org/data/2.5/forecast";

async function getWeatherByCityName() {
  let cityName = document.forms.myForm.city.value;
  let response = await fetch(`${apiUrl}?q=${cityName}&appid=${apiKey}&units=metric`);
  let data = await response.json();
  let dataCount = data.list;
  let cards = document.querySelector('.cards')

  cards.innerHTML = '';

  dataCount.forEach(item => {
    let card = document.createElement('div');
    card.className = "card";
    card.innerHTML = `
    <img src="http://openweathermap.org/img/wn/${item.weather[0].icon}.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.city.name}  :  ${Math.round(item.main.temp)} ℃</h5>
      <p class="card-text">Min temperature : ${Math.round(item.main.temp_min)} ℃</p>  
      <p class="card-text">Max temperature : ${Math.round(item.main.temp_max)} ℃</p>  
      <p class="card-text">Pressure : ${Math.round(item.main.pressure)}</p>  
      <p class="card-text">Humidity : ${Math.round(item.main.humidity)}</p>  
    </div>
    `
    cards.appendChild(card);
  });
 }

document.forms.myForm.addEventListener('submit',function () {
  event.preventDefault();

    getWeatherByCityName();
})