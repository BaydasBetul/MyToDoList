const todoInput = document.querySelector('.todo_inputItem');
const todoButon = document.querySelector('.todo_buton');
const todoSelect = document.querySelector('.todo_select');
const todoList = document.querySelector('.todo_list');

todoButon.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
todoSelect.addEventListener('click', SelectTodo)

function addTodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const todoLi = document.createElement('li');
    todoLi.innerText = todoInput.value;
    todoLi.classList.add('todo_items');
    todoDiv.appendChild(todoLi);
    if (todoInput.value === "") {
        return null
    }

    const completButon = document.createElement('button');
    completButon.innerHTML = '<i class="fas fa-check"></i>';
    completButon.classList.add('complet_btn');
    todoDiv.appendChild(completButon);

    const deleteButon = document.createElement('button');
    deleteButon.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButon.classList.add('delete_btn');
    todoDiv.appendChild(deleteButon);

    todoList.appendChild(todoDiv);
    todoInput.value = ""
}


function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === "delete_btn") {
        const todo = item.parentElement;
        todo.classList.add('del')
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    }
    // completitem
    if (item.classList[0] === "complet_btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completItem');
    }

}

function SelectTodo(e) {
    const selecttodo = todoList.childNodes;
    for (let i = 1; i < selecttodo.length; i++) {
        switch (e.target.value) {

            case "all":
                selecttodo[i].style.display = "flex";
                break;
            case "completed":
                if (selecttodo[i].classList.contains('completItem')) {
                    selecttodo[i].style.display = "flex";
                } else {
                    selecttodo[i].style.display = "none";
                }
                break;
            case "uncompleted":
                if (!selecttodo[i].classList.contains('completItem')) {
                    selecttodo[i].style.display = "flex";
                } else {
                    selecttodo[i].style.display = "none";
                }
                break;

        }

    }

}

let heute = new Date();
let jahre = heute.getFullYear();
let monat = heute.getMonth() + 1;
let tag = heute.getDate();
let stunde = heute.getHours();
let seconde = heute.getMinutes();
const date = `${jahre}/${monat}/${tag}  ${stunde}:${seconde}`
document.getElementById('date').innerHTML = date;