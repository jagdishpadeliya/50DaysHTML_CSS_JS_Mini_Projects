// const dayEl = document.getElementById('days');
// const hourEl = document.getElementById('hours');
// const minEl = document.getElementById('mins');
// const secEl = document.getElementById('seconds');
// const myBirthday='20 Feb 2022';
function  countdown(){
//     const  myBirthdayDate =  new Date(myBirthday);
//     const currDate = new Date();
//     const totalSeconds = (myBirthdayDate-currDate)/1000;
//     const daysRem = Math.floor(totalSeconds/(3600*24));
//     const hoursRem = Math.floor(totalSeconds/3600)%24;
//     const minRem = Math.floor((totalSeconds%3600)/60);
//     const secRem = Math.floor(totalSeconds%3600%60);
//     dayEl.innerHTML=formatTime(daysRem);
//     hourEl.innerHTML=formatTime(hoursRem);
//     minEl.innerHTML=formatTime(minRem);
//     secEl.innerHTML=formatTime(secRem);
// location.reload();
}
// function formatTime(time)
// {
//     return (time<10?`0${time}`:time);
// }
countdown();
setInterval(countdown,1000);