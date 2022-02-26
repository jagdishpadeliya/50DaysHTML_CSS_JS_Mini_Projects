const hourEl=document.querySelector('.hour');
const minuteEl=document.querySelector('.minute');
const secondEl=document.querySelector('.second');
const timeEl=document.querySelector('.time');
const dateEl=document.querySelector('.date');
const toggle=document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click',(e)=>{
    const html = document.querySelector("html");
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        e.target.innerHTML = "Dark Mode";
    }
    else{
        html.classList.add('dark');
        e.target.innerHTML="Light Mode";
    }

})
function setTime(){
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours%12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const amOrPm = hours>=12?'P.M':'A.M';
    
    hourEl.style.transform=`translate(-50%,-100%) rotate(${scale(hoursForClock,0,12,0,360)}deg)`
    minuteEl.style.transform=`translate(-50%,-100%) rotate(${scale(minutes,0,60,0,360)}deg)`
    secondEl.style.transform=`translate(-50%,-100%) rotate(${scale(seconds,0,60,0,360)}deg)`  
    timeEl.innerHTML=`${hoursForClock}:${minutes<10?`0${minutes}`:minutes}:${seconds<10?`0${seconds}`:seconds}`
    dateEl.innerHTML=`${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
setTime();
setInterval(setTime,1000);