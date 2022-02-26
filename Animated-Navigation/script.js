const btn = document.querySelector(".icon#toggle");
const nav = document.querySelector("nav");

btn.addEventListener('click',()=>{
    nav.classList.toggle('active');
})