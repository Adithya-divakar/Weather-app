key="9b6f3e4bcd5f9c61012f21173cae78da"

let result= document.getElementById('result');
let searchbtn= document.getElementById('search-btn')
let cityRef =document.getElementById('city');

let getWeather=()=>{
    let cityValue =cityRef.value;

    if( cityValue.length ==0){
        result.innerHTML=`<h3> Please enter a city name</h3>`
    }
    else{
    
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    cityRef.value="";
    fetch(url).then((resp)=> resp.json())
    .then(data=>{
        

        result.innerHTML=`<h2> ${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4> 
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1 class=",weather_temp">${data.main.temp}&#176c</h1>
        <div class="temp-container">
        <div id="min">
        <h4 class="title"> min</h4>
        <h4 class="temp">${data.main.temp_min}</h4>
        </div>
        <div >
        <h4 class="title"> max</h4>
        <h4 class="temp">${data.main.temp_max}</h4>
        </div>
        </div>
        `;

    })
    .catch(()=>{
        result.innerHTML=`<h3 class="msg"> City not found</h3>`
    })
}

}

window.addEventListener('load',getWeather);
