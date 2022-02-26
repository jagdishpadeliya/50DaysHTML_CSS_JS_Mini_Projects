const home = document.getElementById('home');
const about = document.getElementById('about');
const services = document.getElementById('services');
const contact = document.getElementById('contact');
const nav = document.querySelector('.nav');
const activeLink = document.querySelectorAll('.container ul a')
const title= document.querySelector('.hero .container h1')
const titleDes =document.querySelector('.hero .container p')
console.log(title);

window.addEventListener('scroll',fixNav);
function fixNav(){
    if(window.scrollY>nav.offsetHeight+150){
        console.log(window.scrollX+" ",window.scrollY+" ",nav.offsetHeight);
        nav.classList.add('active');
    }
    else
    {
        nav.classList.remove('active');
    }
}

home.addEventListener('click',()=>{
    changeState();
    home.classList.add('current');
    title.innerText="Welcome to my Website";
});
about.addEventListener('click',()=>{
    changeState();
    about.classList.add('current')
    title.innerText="About";
});
services.addEventListener('click',()=>{
    changeState();
    services.classList.add('current')
    title.innerText="Services";
});
contact.addEventListener('click',()=>{
    changeState();
    contact.classList.add('current')
    title.innerText="Contact";
});

function changeState(){
    activeLink.forEach((link)=>{
        link.classList.remove('current');
    })
}