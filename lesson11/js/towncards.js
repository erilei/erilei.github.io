const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    const filter = towns.filter(town => (town.name == "Preston" || town.name == "Soda Springs" || town.name == "Fish Haven"));  // temporary checking for valid response and data parsing
    for (let i = 0 ; i < filter.length; i++) {

        let card = document.createElement('section');
        let h1 = document.createElement('h1');
        let motto = document.createElement('div');
        let founded = document.createElement('p');
        let population = document.createElement('p');
        let rain = document.createElement('p');
        let image = document.createElement('img');

        h1.textContent = filter[i].name;
        motto.textContent = filter[i].motto;
        founded.textContent = "Year founded: " + filter[i].yearFounded;
        population.textContent = "Population: " + filter[i].currentPopulation;
        rain.textContent = "Annual Rainfall: " + filter[i].averageRainfall;
        image.setAttribute('src', "images/" + filter[i].photo);
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
