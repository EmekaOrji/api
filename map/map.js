// $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=Lagos,Nigeria&units=imperial&APPID=fb66097ad07484ab52d762e086dbd409', (data) => {
//   console.log(data);
// });



function Get(yourUrl){
  var Httpreq = new XMLHttpRequest();
  Httpreq.open("GET",yourUrl,false);
  Httpreq.send(null);
  return Httpreq.responseText;
}

var data = JSON.parse(Get('https://api.openweathermap.org/data/2.5/weather?q=Kaduna,Nigeria&units=imperial&APPID=fb66097ad07484ab52d762e086dbd409'));
console.log(data);

var icon = document.querySelector('.icon');
var city = document.querySelector('.city');
var state = document.querySelector('.weather_state');
var temperature = document.querySelector('.weather_temperature');
icon.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
city.textContent = data.name;
state.textContent = data.weather[0].main;
temperature.prepend(Math.floor(data.main.temp));
