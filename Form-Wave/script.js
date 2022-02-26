const labels = document.querySelectorAll(".form-control label");
// labels.forEach((label)=>{
//     console.log(label);
//     label.innerHTML = label.innerText
//                       .split('')
//                       .map((character, index)=>{
//                         `<span>${character}</span>`
//                       }).join('');

// })

labels.forEach(label=>{
    // console.log(label.innerText)
    label.innerHTML=label.innerText
                    .split('')
                    .map((character, index)=>
                    `<span style="transition-delay: ${50*index}ms;">${character}</span>`
                    ).join("")
})