const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];  // temporary checking for valid response and data parsing

    let event = document.createElement('ul');
    let listOne = document.createElement('li');
    let listTwo = document.createElement('li');
    let listThree = document.createElement('li');
    let listFour = document.createElement('li');


    listOne.textContent = towns[1].events[0];
    listTwo.textContent = towns[1].events[1];
    listThree.textContent = towns[1].events[2];
    listFour.textContent = towns[1].events[3];

    event.appendChild(listOne);
    event.appendChild(listTwo);
    event.appendChild(listThree);
    event.appendChild(listFour);

  
    document.querySelector('.event-list').appendChild(event);
    }
);