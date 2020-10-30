function adjustRating(severevalue) {
    document.getElementById("severevalue").innerHTML = severevalue;
}

let d = new Date();

if (d.getDay() == 5){
    document.querySelector("#pancake").style.display = "block";
}

function toggleMenu() {    
    document.getElementById("primaryNav").classList.toggle("hide");
}

let date = new Date().getFullYear();
let monthDay = d.getDate();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];    
document.getElementById('updated').innerHTML = days[d.getDay()] + ', ' + monthDay + ' ' + monthNames[d.getMonth()]+ ' ' + d.getFullYear();