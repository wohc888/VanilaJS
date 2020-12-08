const toDoForm = document.querySelector(".form-toDo"),
    toDoInput = toDoForm.querySelector(".toDo-input"),
    toDoList = document.querySelector(".toDo-list");

const TODOS_LS = 'toDos';

let toDos = [];
let toDoId = 1;

function saveToLocal(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function deleteToDo(event){
    event.preventDefault();
    const target = event.target,
        parent = target.parentNode;


    toDoList.removeChild(parent);

    const cleanedToDos = toDos.filter(toDo => {
        return toDo.id !== parseInt(parent.id)
    });
    toDos = cleanedToDos;
    saveToLocal();
}

function setupToDo(text){
    const li = document.createElement('li'),
        span = document.createElement('span'),
        delBtn = document.createElement('span');

    span.innerText = text;
    delBtn.innerText = ' ❌';
    delBtn.classList.add = 'clickable';
    delBtn.addEventListener("click", deleteToDo)

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = toDoId;
    

    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: toDoId
    };

    toDos.push(toDoObj);
    toDoId++;
    saveToLocal();   
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    console.log(currentValue);
    setupToDo(currentValue);
}

function loadToDos(localToDos){
    const parsedToDos = JSON.parse(localToDos);
    parsedToDos.forEach(toDo => {
        setupToDo(toDo.text);
    });
}

function init(){
    const isToDos = localStorage.getItem(TODOS_LS);
    if(isToDos !== null){
        loadToDos(isToDos); 
    }
    toDoForm.addEventListener("submit", handleSubmit);
}

init();