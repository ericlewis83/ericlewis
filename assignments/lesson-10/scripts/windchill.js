if (t <= 50 && s >= 3) {
    let windchill = Math.round(n * 100) / 100;
    document.getElementById("chill").innerHTML = windchill;
} else
    document.getElementById("chill").innerHTML = "N/A";

    let t = parseInt(document.getElementById('hitemp').innerHTML);
    let s = parseInt(document.getElementById('windspeed').innerHTML);
    let result = 35.74 + (0.6215 * t) - (35.75 * s ** 0.16) + (0.4275 * t * s ** 0.16);
    document.getElementById('windchill').innerHTML = result.toFixed(1);