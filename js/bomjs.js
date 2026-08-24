let myWind;

// select div id
const width =document.getElementById('p1');
const height =document.getElementById('p2');

width.innerHTML = "inner window width is :" + window.innerWidth;
height.innerHTML = "inner window height is :" + window.innerHeight;

function openWind() {
    myWind = window.open("https://jsoneditoronline.org");
    
}

function closeWind() {
    myWind.close();
}