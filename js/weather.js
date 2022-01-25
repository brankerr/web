const API_KEY ='cf321b8297b58a739361abf9798a7129'

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((res)=> res.json())
        .then((data)=>{
        const location = document.querySelector('#location');
        const temperature = document.querySelector('#temperature')
        const weather = document.querySelector('#condition')
        location.innerText = `위치 : ${data.name}`;
        temperature.innerText = `온도 : ${data.main.temp}°C`
        weather.innerText = `날씨 : ${data.weather[0].main}`
    })
}
function onGeoError(){
    alert('Geolocation error');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

