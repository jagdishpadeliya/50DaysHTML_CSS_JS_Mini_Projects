const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((item,idx)=>{
    item.addEventListener('click',()=>{
        hideAllContents();
        deActivateAllItems();

        item.classList.add('active');
        contents[idx].classList.add('show');
    })
})

function hideAllContents(){
    contents.forEach(content=>{
        // content.classList.remove('show');
    })
}

function deActivateAllItems(){
    listItems.forEach(item=>{
        item.classList.remove('active');
    })
}