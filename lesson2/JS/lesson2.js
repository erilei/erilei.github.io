window.onload = updateBox;

function updateBox(){
    let lastUpdate = "Last Updated: " + document.lastModified;
    let date = new Date().getFullYear();

    document.getElementById('year').innerHTML = date;
    document.getElementById('updated').innerHTML = lastUpdate;
}