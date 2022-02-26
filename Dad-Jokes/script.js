const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generateJoke();

//using Async/Wait

async function generateJoke(){
    const config={
        headers:{
            Accept:'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com',config)

    const data= await res.json();

    jokeEl.innerHTML = data.joke;
}



// Using then

jokeBtn.addEventListener('click',generateJoke);

// function generateJoke(){
//     fetch('https://icanhazdadjoke.com', {
//         headers:{
//             Accept:'application/json'
//         }
//     }).then(res=>res.json()).then(data=>{
//         jokeEl.innerText = data.joke;
//     })
// }