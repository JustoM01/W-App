var searchButton = document.getElementById('search-button')
var input = document.getElementById('input')
var fiveDay = document.getElementById('five-day')
var currentDay = document.getElementById('current-Day')
var temp= document.querySelector('.temp')
var Api = 'http://api.openweathermap.org/data/2.5/forecast'
var apikey= '3f229a0cbb5a3bd75972e71a79b56b2b'
 var input = document.getElementById('input')
 




 // .then((data) => console.log(data))//




searchButton.addEventListener('click',function() {  
        fetch(`${Api}?q=${input.value}&appid=${apikey}&units=imperial`)
.then((response => response.json()))
  .then((data) => { for(var i = 0; i < data.list.length; i+=8){
    console.log(data)
    console.log(data.list[i])
    var todayTemp = document.getElementById('todays-temp');
    todayTemp.textContent = data.list[0].main.temp_max;
    var fiveDayCard = ` <div id="day-${i}" class="hide-card">
    <h2 class="city-date-icon">${new Date(data.list[i].dt_txt).toLocaleDateString("en-US")}</h2>
    <p class="temp">temp:${Math.floor(data.list[i].main.temp_max)}</p>
    <p class="humidity">humidity:${Math.floor(data.list[i].main.humidity)}</p>
    <p class="wind">wind:${Math.floor(data.list[i].wind.speed)} mph</p>
  </div>
`
fiveDay.innerHTML+=fiveDayCard


  }

   
  })

});


searchButton.addEventListener('click',function() {  
  fetch(`${Api}?q=${input.value}&appid=${apikey}&units=imperial`)
.then((response => response.json()))
.then((data) => { 
console.log(data)
var City = document.getElementById('city');
City.textContent = data.city.name;
var todayTemp = document.getElementById('todays-temp');
todayTemp.textContent = data.list[0].main.temp_max;
var todaysIcon = document.getElementById('todays-icon')
todaysIcon.textContent = data.list[0].weather[0].main;
var todaysHumidity = document.getElementById('todays-humidity')
todaysHumidity.textContent = data.list[0].main.humidity;
var todaysWind = document.getElementById('todays-wind')
todaysWind.textContent = data.list[0].wind.speed;







})






});


