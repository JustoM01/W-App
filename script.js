var searchButton = document.getElementById('search-button')
var input = document.getElementById('input')
var fiveDay = document.getElementById('five-day')
var currentDay = document.getElementById('current-Day')
// var div = document.getElementById('hide')
// var div2 = document.getElementById('hide2')
// var div3 = document.getElementById('hide3')
// var div4 = document.getElementById('hide4')
// var div5 = document.getElementById('hide5')
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
var currentDayCard = ` <div id="current-Day" >
<h2 class="city-date-icon">${new Date(data.list[0].dt_txt).toLocaleDateString("en-US")}</h2>
<p id="todays-temp">temp:${Math.floor(data.list[0].main.temp_max)}</p>
<p id="todays-humidity">humidity:${Math.floor(data.list[0].main.humidity)}</p>
<p id="todays-wind">wind:${Math.floor(data.list[0].wind.speed)} mph</p>
</div>
`
currentDay.textContent=currentDayCard





})






});


