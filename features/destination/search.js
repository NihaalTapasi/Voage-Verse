const cityInput=document.querySelector(".city-input");
const searchBtn = document.querySelector(".search-btn");
const apiKey="8e5dfb3150e58de9a904fceb26958c60";

const notFoundSection = document.querySelector(".not-found");
const searchCitySection = document.querySelector(".search-city");
const weatherInfoSection = document.querySelector(".weather-info");
const imageSection = document.querySelector(".weather-summary-img");
const currentDateTxt = document.querySelector(".current-date-txt");
/*

conuntryTxt ,			contry-txt
tempTxt				temp-txt
conditionTxt			conditin-txt
humidityValueTxt		humidity-value-txt
windValueTxt			wind-value-txt weatherSummaryimg 
orcast-item-date
 */

let contryTxt = document.querySelector(".contry-txt");
let tempTxt = document.querySelector(".temp-txt")
let conditionTxt = document.querySelector(".conditin-txt")
let humidityValueTxt = document.querySelector(".humidity-value-txt")
let windValueTxt = document.querySelector(".wind-value-txt")
let weatherSummaryimg = document.querySelector(".weather-summary-img");
// const currentDateTxt = document.querySelector("./");


//https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=8e5dfb3150e58de9a904fceb26958c60

function getCurrentDate(){
    const currentDate= new Date();
    const options = {
        weekdays: 'short',
        day: '2-digit',
        month: 'short'
    }
    return currentDate.toLocaleDateString('en-GB',options);
}

searchBtn.addEventListener("click",()=>{
    if(cityInput.value.trim()!=''){
        updateWeatherInfo(cityInput.value)
        cityInput.value='';
        cityInput.blur()
    }
});


cityInput.addEventListener("keydown",(e)=>{

    if(e.key=="Enter" && cityInput.value.trim()!=''){
        updateWeatherInfo(cityInput.value)
        cityInput.value='';
        cityInput.blur()
    }
})

async function getFetchData(endPoint,city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
    const respone = await fetch(apiUrl)
    return respone.json();
}

function getWheatherIcon(id){
        if (id<=232) return 'thunderstorms.png';
        if (id<=321) return 'rain_light.png';
        if (id<=531) return 'rain_s_cloudy.png';
        if (id<=622) return 'snow_light.png';
        if (id<=781) return 'atmosphere.png';
        if (id<=800) return 'sunny.png';
        else return 'cloudy.png';

}

async function updateWeatherInfo(city){
    console.log(city);
    
    // let weatherData= await getFetchData("weather", city);
    let weatherData= await getFetchData("weather", city);
    console.log(weatherData);

    if(weatherData.cod != 200){
        showDisplaySection(notFoundSection);
        return;
    }
    // const {name: contry,main: {temp, humidity},weather: [{id, main}],wind: speed } = weatherData;
    const {
        name: country,
        main: { temp, humidity },
        weather: [{ id, main }],
        wind: { speed }
    } = weatherData;
    contryTxt.textContent= country;
    tempTxt.textContent = Math.round(temp)+' ℃';
    conditionTxt.textContent = main;
    humidityValueTxt.textContent = humidity;
    windValueTxt.textContent = speed + " m/s";
    imageSection.src=`./weather/${getWheatherIcon(id)}`;
    currentDateTxt.textContent = getCurrentDate();
    showDisplaySection(weatherInfoSection);

}

function showDisplaySection(section){
    [weatherInfoSection,searchCitySection,notFoundSection]
    .forEach(section => section.style.display="none");
    section.style.display='flex';
}