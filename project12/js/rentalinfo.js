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

    let type3 = rentals[2].type;
    document.getElementById('type3').textContent = type3;
    let person3 = rentals[2].people;
    document.getElementById('person3').textContent = person3;
    let resHalf3 = rentals[2].resHalf;
    document.getElementById('resHalf3').textContent = resHalf3;
    let resFull3 = rentals[2].resFull;
    document.getElementById('resFull3').textContent = resFull3;
    let walkHalf3 = rentals[2].walkHalf;
    document.getElementById('walkHalf3').textContent = walkHalf3;
    let walkFull3 = rentals[2].walkFull;
    document.getElementById('walkFull3').textContent = walkFull3;
    
    let type4 = rentals[3].type;
    document.getElementById('type4').textContent = type4;
    let person4 = rentals[3].people;
    document.getElementById('person4').textContent = person4;
    let resHalf4 = rentals[3].resHalf;
    document.getElementById('resHalf4').textContent = resHalf4;
    let resFull4 = rentals[3].resFull;
    document.getElementById('resFull4').textContent = resFull4;
    let walkHalf4 = rentals[3].walkHalf;
    document.getElementById('walkHalf4').textContent = walkHalf4;
    let walkFull4 = rentals[3].walkFull;
    document.getElementById('walkFull4').textContent = walkFull4;

    let type5 = rentals[4].type;
    document.getElementById('type5').textContent = type5;
    let person5 = rentals[4].people;
    document.getElementById('person5').textContent = person5;
    let resHalf5= rentals[4].resHalf;
    document.getElementById('resHalf5').textContent = resHalf5;
    let resFull5 = rentals[4].resFull;
    document.getElementById('resFull5').textContent = resFull5;
    let walkHalf5 = rentals[4].walkHalf;
    document.getElementById('walkHalf5').textContent = walkHalf5;
    let walkFull5 = rentals[4].walkFull;
    document.getElementById('walkFull5').textContent = walkFull5;
    
    let type6 = rentals[5].type;
    document.getElementById('type6').textContent = type6;
    let person6 = rentals[5].people;
    document.getElementById('person6').textContent = person6;
    let resHalf6= rentals[5].resHalf;
    document.getElementById('resHalf6').textContent = resHalf6;
    let resFull6 = rentals[5].resFull;
    document.getElementById('resFull6').textContent = resFull6;
    let walkHalf6 = rentals[5].walkHalf;
    document.getElementById('walkHalf6').textContent = walkHalf6;
    let walkFull6 = rentals[5].walkFull;
    document.getElementById('walkFull6').textContent = walkFull6;

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
