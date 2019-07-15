    
let apiURLstring1 = "https://api.openweathermap.org/data/2.5/weather?id=5586437&units=imperial&APPID=a79b147b7791f4c09f3c781da76d6580";
let weatherRequest1 = new XMLHttpRequest();
weatherRequest1.open('GET', apiURLstring1, true);
weatherRequest1.send();
weatherRequest1.onload = function () {
    let weatherData = JSON.parse(weatherRequest1.responseText);
    document.getElementById("boise-hitemp").innerHTML = weatherData.main.temp_max;
    document.getElementById("boise-currently").innerHTML = weatherData.weather[0].main;
    document.getElementById("boise-windSpeed").innerHTML = weatherData.wind.speed;
    document.getElementById("boise-humidity").innerHTML = weatherData.main.humidity;
    document.getElementById("boise-windchill").innerHTML = getWindChill("boise");
}


let apiURLstring2 = "https://api.openweathermap.org/data/2.5/weather?id=5596475&units=imperial&APPID=a79b147b7791f4c09f3c781da76d6580";
let weatherRequest2 = new XMLHttpRequest();
weatherRequest2.open('GET', apiURLstring2, true);
weatherRequest2.send();
weatherRequest2.onload = function () {
    let weatherData = JSON.parse(weatherRequest2.responseText);
    document.getElementById("if-hitemp").innerHTML = weatherData.main.temp_max;
    document.getElementById("if-currently").innerHTML = weatherData.weather[0].main;
    document.getElementById("if-windSpeed").innerHTML = weatherData.wind.speed;
    document.getElementById("if-humidity").innerHTML = weatherData.main.humidity;
    getWindChill("if")
}


let apiURLstring3 = "https://api.openweathermap.org/data/2.5/weather?id=5780026&units=imperial&APPID=a79b147b7791f4c09f3c781da76d6580";
let weatherRequest3 = new XMLHttpRequest();
weatherRequest3.open('GET', apiURLstring3, true);
weatherRequest3.send();
weatherRequest3.onload = function () {
    let weatherData = JSON.parse(weatherRequest3.responseText);
    document.getElementById("provo-hitemp").innerHTML = weatherData.main.temp_max;
    document.getElementById("provo-currently").innerHTML = weatherData.weather[0].main;
    document.getElementById("provo-windSpeed").innerHTML = weatherData.wind.speed;
    document.getElementById("provo-humidity").innerHTML = weatherData.main.humidity;
    getWindChill("provo")
}


let apiURLstring4 = "https://api.openweathermap.org/data/2.5/weather?id=5856194&units=imperial&APPID=a79b147b7791f4c09f3c781da76d6580";
let weatherRequest4 = new XMLHttpRequest();
weatherRequest4.open('GET', apiURLstring4, true);
weatherRequest4.send();
weatherRequest4.onload = function () {
    let weatherData = JSON.parse(weatherRequest4.responseText);
    document.getElementById("slc-hitemp").innerHTML = weatherData.main.temp_max;
    document.getElementById("slc-currently").innerHTML = weatherData.weather[0].main;
    document.getElementById("slc-windSpeed").innerHTML = weatherData.wind.speed;
    document.getElementById("slc-humidity").innerHTML = weatherData.main.humidity;
    getWindChill("slc")
}

/*Calculates windchill */

function getWindChill(city) {
    let t= parseInt(document.getElementById(`${city}-hitemp`).innerHTML);
    let s = parseInt(document.getElementById(`${city}-windSpeed`).innerHTML);
    result = windChill(t, s);
    return document.getElementById(`${city}-windchill`).innerHTML = result;
  }
  
  function windChill(t, s) {
    let windChillResult = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    let windchill = windChillResult.toFixed(2);
    return windchill;
  }