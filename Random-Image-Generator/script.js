let container = document.querySelector('.container');
let imgSrc = "https://source.unsplash.com/random/"
let rowLength = 10
for(let i=0;i<rowLength*3;i++){
    const img = document.createElement('img');
    img.src=imgSrc+getRandomSize();
    container.appendChild(img);
}
function getRandomSize(){
    return `${getRandomNr()}x${getRandomNr()}`
}
function getRandomNr(){
    return Math.floor(Math.random()*10)+300;
}