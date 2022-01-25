const toDoFrom = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");
const todoContainer = document.getElementById('todo')

const TODOS_KEY = "todos";
const USER_KEY = "username";

let toDos = [];

function showTodos() {
    todoContainer.classList.remove(HIDDEN_CLASSNAME)
}

loginForm.addEventListener('submit',showTodos);

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.id = 'delete-button';
    button.innerText = "x";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDOSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newToDoObj);
    paintTodo(newToDoObj);
    saveToDos();
}

const savedUser = localStorage.getItem(USER_KEY);
console.log(savedUser);
if (savedUser !== null) {
    todoContainer.classList.remove(HIDDEN_CLASSNAME);
}

toDoFrom.addEventListener("submit", handleToDOSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY)
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}