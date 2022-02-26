const ratingsContainer = document.querySelector('.ratings-container');
const ratings = document.querySelectorAll('.rating');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');

let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click',(e)=>{
    if(e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling)
    {
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerText;
    }
    else if(e.target.parentNode.classList.contains('rating')&&e.target.previousSibling&&e.target.previousElementSibling.nodeName==='IMG')
    {
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.innerText;
    }
 
})

function removeActive(){
    for(let i = 0;i<ratings.length;i++)
    {
        ratings[i].classList.remove('active');
    }
}

sendBtn.addEventListener('click',(e)=>{
    panel.innerHTML=`
        <i class="fas fa-heart"></i>
        <strong>Thankyou!</strong>
        </br>
        <strong>Feeback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})

