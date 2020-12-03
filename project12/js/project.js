let date = new Date().getFullYear();
let d = new Date();
let monthDay = d.getDate();
let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];    
document.getElementById('updated').innerHTML = days[d.getDay()] + ', ' + monthDay + ' ' + monthNames[d.getMonth()]+ ' ' + d.getFullYear();

function toggleMenu() {    
    document.getElementById("primaryNav").classList.toggle("hide");
};

WebFont.load({
    google: {
        families: [
        'Acme', 'Sarala'
        ]
    }
});