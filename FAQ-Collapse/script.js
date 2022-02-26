const button = document.querySelectorAll('.faq-toggle');
button.forEach(btn=>{
    btn.addEventListener('click',()=>{
        const parentEl = btn.parentNode;
        parentEl.classList.toggle('active');
    })
})

