const form = document.querySelector('form');
const input = document.querySelector('input');
const todosUL = document.getElementById('todos');


const todos = JSON.parse(localStorage.getItem('todos'))
if(todos)
{
    todos.forEach(todo=>{
        addTodo(todo);
    })
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    addTodo()
})

function addTodo(todo){
    let todoText = input.value

    if(todo){
        todoText = todo.text;
    }

    if(todoText){
        const todoEl = document.createElement('li');
        if(todo&&todo.completed){
            todoEl.classList.add('completed');
        }
        input.value=''
        todoEl.innerText = todoText;
        todosUL.appendChild(todoEl);
        updateLS();
        todoEl.addEventListener('click',(e)=>{
            todoEl.classList.toggle('completed');
            updateLS();
        })

        todoEl.addEventListener('contextmenu',(e)=>{
            e.preventDefault();
            todoEl.remove();
            updateLS();
        })
    }
}

function updateLS(){
    const todosEl = document.querySelectorAll('li');
    const todos=[]

    todosEl.forEach(todoEl=>{
        todos.push(
            {
                text:todoEl.innerText,
                completed:todoEl.classList.contains('completed')
            }
        )
    })
localStorage.setItem('todos',JSON.stringify(todos));

}