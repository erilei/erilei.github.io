const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    for (let i = 0 ; i < towns.length -1; i++) {
            if (i == 0) {
                continue;
            }
            if (i == 2) {
                continue;
            }
            if (i ==3) {
                continue;
            }
        let card = document.createElement('section');
        let h1 = document.createElement('h1');
        let motto = document.createElement('div');
        let founded = document.createElement('p');
        let population = document.createElement('p');
        let rain = document.createElement('p');
        let image = document.createElement('img');

        h1.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        founded.textContent = "Year founded: " + towns[i].yearFounded;
        population.textContent = "Population: " + towns[i].currentPopulation;
        rain.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
        image.setAttribute('src', "images/" + towns[i].photo);
        image.setAttribute('alt', h1.textContent);

        card.appendChild(h1);
        card.appendChild(motto);
        card.appendChild(founded);
        card.appendChild(population);
        card.appendChild(rain);
        card.appendChild(image);

        document.querySelector('.town-cards').appendChild(card);
    }
});
