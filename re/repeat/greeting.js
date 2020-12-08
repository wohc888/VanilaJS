const form = document.querySelector('.form-name'),
    input = form.querySelector('.name-input'),
    greeting = document.querySelector('.name-greeting');

const NAME_LS = 'username';

function handleClick(event){
    event.preventDefault();
    localStorage.removeItem(NAME_LS);
    input.classList.remove('hide');
    askName();
}

function addDelBtn(){
    const delBtn = document.createElement("span");
    const greet = document.querySelector(".name-greeting");

    delBtn.classList.add("clickable");
    delBtn.innerHTML = ' ❌';
    delBtn.addEventListener("click", handleClick);

    greet.appendChild(delBtn)
}

function saveName(name){
    localStorage.setItem(NAME_LS, name);
}

function handleSubmit(event){
    event.preventDefault();
    const name = input.value;
    input.classList.add("hide")
    saveName(name);
    greetUser(name);
}

function askName(){
    greeting.innerHTML = 'What is your name?';
    input.classList.remove('hide');
    form.addEventListener("submit", handleSubmit);
}

function greetUser(name){
    const time = new Date();
    const hours = time.getHours();

    if(0 <= hours && hours <= 6){
        greeting.innerHTML = `You better sleep, ${name}`;
    }else if(7 <= hours && hours <= 11){
        greeting.innerHTML = `Hey ${name}! good morning and have a lovely day!`;
    }else if(12 <= hours && hours <= 18){
        greeting.innerHTML = `Long day ${name}, it's a long day`;
        addDelBtn();
    }else{
        greeting.innerHTML = `Done, ${name} relax`;
    }
}

function init(){
    const isUsername = localStorage.getItem(NAME_LS);

    if(isUsername){
        greetUser(isUsername);
    }else{
        askName();
    }
}

init();