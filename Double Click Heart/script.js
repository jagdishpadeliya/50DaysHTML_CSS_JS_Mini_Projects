const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#count');

let clickedTime = 0;
let timesClicked = 0;

loveMe.addEventListener('click',(e)=>{
    if(clickedTime==0)
        clickedTime = new Date().getTime();
    else
        {
            if((new Date().getTime()-clickedTime)<800){
                createHeart(e);
                clickedTime=0;
            }else{
                clickedTime=new Date().getTime();
            }
        }
})

function createHeart(e)
{
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInside = x-leftOffset;
    const yInside = y-topOffset;

    heart.style.top=  `${yInside}px`;
    heart.style.left=`${xInside}px`;

    loveMe.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);

    times.innerHTML = `${++timesClicked}`;

}