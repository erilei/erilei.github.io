const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=77600,mx&appid=fd8f25b1843809fa73e36be00a0574ef&units=imperial"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const desc = jsObject.weather[0].description;  // note how we reference the weather array
        document.getElementById('current-cond').textContent = desc;
        const temp = jsObject.main.temp;
        document.getElementById('temp-max').textContent = temp;
        const humid = jsObject.main.humidity;
        document.getElementById('humid').textContent = humid;

    });