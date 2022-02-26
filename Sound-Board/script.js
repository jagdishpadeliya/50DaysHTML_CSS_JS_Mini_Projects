const sounds = ['applause','boo','gasp','tada','victory','wrong'];
const buttons = document.getElementById('buttons');
sounds.forEach(sound=>{
    const btn = document.createElement("button");
    btn.classList.add("btn");

    btn.addEventListener('click',()=>{
        stopSongs();
        document.getElementById(sound).play()
    })

    btn.innerText=sound;
    buttons.appendChild(btn);    
})

function stopSongs(){
    sounds.forEach(sound=>{
        const soundEl = document.getElementById(sound);
        soundEl.pause();
    })
}