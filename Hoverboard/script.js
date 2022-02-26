const container = document.getElementById('container');

const SQUARES = 506;

for(let i=0;i<SQUARES;i++)
{
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover',()=>{
        setColor(square);
    })

    square.addEventListener('mouseout',()=>{
        removeColor(square);
    })
    container.appendChild(square);
}

const colors = ['#FF0000','#00FF00','#0000FF','#FFFF00','#00FFFF','#F08080','#FF6347','#FFA500','#7CFC00','#6A5ACD','#DDA0DD','#D2691E'];

function setColor(element){
    const color = getRandomColor();
    element.style.backgroundColor=color;
    element.style.boxShadow=`0 0 2px ${color}, 0 0 10px ${color}`

}

function removeColor(element){
    element.style.backgroundColor=`#1d1d1d`
    element.style.boxShadow=`0 0 2px #000`
}

function getRandomColor(){
    return colors[Math.floor(Math.random()*colors.length)];
}