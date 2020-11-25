const api = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=fd8f25b1843809fa73e36be00a0574ef&units=imperial";
const iconURL = "http://openweathermap.org/img/w/";
const abbreviate = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

fetch(api)
    .then(res => {
        return res.json()
    })
    .then(fiveDay => {

        const fiveDayTime = fiveDay.list.filter(entry => new Date(entry.dt_txt).getHours() == 18);

        for (i=0; i< fiveDayTime.length; i++) {
            let section = document.createElement('section');
            let day = document.createElement('h4');
            let temp = document.createElement('p');
            let icon = document.createElement('img');

            let date = new Date(fiveDayTime[i].dt_txt);
            day.textContent = abbreviate[date.getDay()];

            icon.src = iconURL + fiveDayTime[i].weather[0].icon + '.png';
            icon.alt = fiveDayTime[i].weather[0].description;

            temp.textContent = fiveDayTime[i].main.temp + '\xB0F';

            section.append(day);
            section.append(icon);
            section.append(temp);

            document.getElementById('forecastGrid').appendChild(section);
        }
    });