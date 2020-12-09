const api = "https://api.openweathermap.org/data/2.5/forecast?zip=77600,mx&appid=fd8f25b1843809fa73e36be00a0574ef&units=imperial";
const iconURL = "http://openweathermap.org/img/w/";
const abbreviate = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

fetch(api)
    .then(res => {
        return res.json()
    })
    .then(threeDay => {

        const threeDayTime = threeDay.list.filter(entry => new Date(entry.dt_txt).getHours() == 18);

        for (i=0; i< 3; i++) {
            let section = document.createElement('section');
            let day = document.createElement('h3');
            let temp = document.createElement('p');
            let icon = document.createElement('img');

            let date = new Date(threeDayTime[i].dt_txt);
            day.textContent = abbreviate[date.getDay()];

            icon.src = iconURL + threeDayTime[i].weather[0].icon + '.png';
            icon.alt = threeDayTime[i].weather[0].description;

            temp.textContent = threeDayTime[i].main.temp + '\xB0F';

            section.append(day);
            section.append(icon);
            section.append(temp);

            document.getElementById('forecastGrid').appendChild(section);
        }
    });