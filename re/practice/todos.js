const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [],
    newId = 1;

function deleteToDo(event){
    const selected = event.target,
        parent = selected.parentNode;
    
    toDoList.removeChild(parent);
    const cleanToDos = toDos.filter((toDo) => {
        return toDo.id !== parseInt(parent.id);
    });
    toDos = cleanToDos;
    saveToDos();
} 

function saveToDos(){;
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}

function paintToDo(text){ // think i need to make another function that just PAINTS todos, this function technically makes a new li
    const li = document.createElement("li"),
        delBtn = document.createElement("span"),
        span = document.createElement("span");
    
    // make a li that holds delete button, explaining text,
    // and id for that li

    delBtn.innerText = " ❌";
    delBtn.classList.add("clickable");
    delBtn.addEventListener("click", deleteToDo)
    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId; 
    // append span and button in the li
    toDoList.appendChild(li);
    // append li in the ul, so that it works as a list
    const toDoObj = {
        text: text,
        id: newId
    }; // li object to put in the toDos list.
    newId+=1;
    toDos.push(toDoObj); // push object in the list
    saveToDos(); // save everytime paint func is calle
}

function handleSubmit(event){
    event.preventDefault();
    // prevent none-value submits
    const currentValue = toDoInput.value; // value inside the input box
    paintToDo(currentValue); // call paint func
}

function loadToDos(loadedToDos){
    const parsedToDos = JSON.parse(loadedToDos);

    parsedToDos.forEach((toDo) => {
        paintToDo(toDo.text)
    })
    // paintLoadedToDos(parsedToDos)
} // load todos already saved in local, will use paint

function paintLoadedToDos(loadedAndParsed){
    return
}// will paint saved toDos

function init(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    // check if todos already exist
    if(loadedToDos !== null){
        loadToDos(loadedToDos)
    }// if exists, load them

    toDoForm.addEventListener("submit", handleSubmit)
    // whether todos already exist or not, need to get
    // todos anyway, so add submit handler
}

init();

