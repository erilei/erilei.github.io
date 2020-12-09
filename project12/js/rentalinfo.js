const requestURL = 'https://erilei.github.io/project12/data/rental.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {
    const rentals = jsonObject['rentals'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    let type1 = rentals[0].type;
    document.getElementById('type1').textContent = type1;
    let person1 = rentals[0].people;
    document.getElementById('person1').textContent = person1;
    let resHalf1 = rentals[0].resHalf;
    document.getElementById('resHalf1').textContent = resHalf1;
    let resFull1 = rentals[0].resFull;
    document.getElementById('resFull1').textContent = resFull1;
    let walkHalf1 = rentals[0].walkHalf;
    document.getElementById('walkHalf1').textContent = walkHalf1;
    let walkFull1 = rentals[0].walkFull;
    document.getElementById('walkFull1').textContent = walkFull1;

    let type2 = rentals[1].type;
    document.getElementById('type2').textContent = type2;
    let person2 = rentals[1].people;
    document.getElementById('person2').textContent = person2;
    let resHalf2 = rentals[1].resHalf;
    document.getElementById('resHalf2').textContent = resHalf2;
    let resFull2 = rentals[1].resFull;
    document.getElementById('resFull2').textContent = resFull2;
    let walkHalf2 = rentals[1].walkHalf;
    document.getElementById('walkHalf2').textContent = walkHalf2;
    let walkFull2 = rentals[1].walkFull;
    document.getElementById('walkFull2').textContent = walkFull2;
    

    // for (let i = 0; i < prophets.length; i++ ) {
    //     let card = document.createElement('section');
    //     let h2 = document.createElement('h2');
    //     let birth = document.createElement('p');
    //     let place = document.createElement('p');
    //     let image = document.createElement('img');

    //     h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
    //     birth.textContent = "Date of birth: " + prophets[i].birthdate;
    //     place.textContent += "Place of birth: " + prophets[i].birthplace;
    //     image.setAttribute('src', prophets[i].imageurl);
    //     image.setAttribute('alt', h2.textContent + " - " + prophets[i].order);

    //     card.appendChild(h2);
    //     card.appendChild(birth);
    //     card.appendChild(place);
    //     card.appendChild(image);

    //     document.querySelector('div.cards').appendChild(card);
    // }
});
