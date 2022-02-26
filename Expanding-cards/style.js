const panels = document.querySelectorAll(".panel");
panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeActivePanel();
        panel.classList.add('active');   
    })
})
function removeActivePanel(){
    panels.forEach(panel=>{
        if(panel.classList.contains('active'))
            panel.classList.remove('active');
    })
}
// const div1 = document.getElementById("panel1");
// const div2 = document.getElementById("panel2");
// const div3 = document.getElementById("panel3");
// const div4 = document.getElementById("panel4");
// const div5 = document.getElementById("panel5");
// function getDivActive(){
//     const divActive = document.querySelector(".active");
//     return divActive;
// }
// div1.addEventListener('click',()=>{
//     console.log("div1");    
//     const divActive = getDivActive();
//     divActive.classList.remove('active');
//     div1.classList.add('active');
// })
// div2.addEventListener('click',()=>{
//     console.log("div2");  
//     const divActive = getDivActive();
//     divActive.classList.remove('active');
//     div2.classList.add('active');
// })
// div3.addEventListener('click',()=>{
//     const divActive = getDivActive();
//     divActive.classList.remove('active');
//     div3.classList.add('active');
// })
// div4.addEventListener('click',()=>{
//     const divActive = getDivActive();
//     divActive.classList.remove('active');
//     div4.classList.add('active');
// })
// div5.addEventListener('click',()=>{
//     const divActive = getDivActive();
//     divActive.classList.remove('active');
//     div5.classList.add('active');
// })
