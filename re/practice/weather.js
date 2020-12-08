const weather = document.querySelector(".js-weather");

const COORDS = 'coords';
const API_KEY = '997b1aa499cb14cf6ac6d58362166ecf';

function getWeather(lat, long){
    const data = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(data).then((response)=>{
        return response.json();
    }).then((json)=>{
        const temperature = json.main.temp,
            place = json.name;
        weather.innerText =`${temperature} @ ${place}`
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoError(){
    console.log('error loading geo coords');
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude,
        longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();