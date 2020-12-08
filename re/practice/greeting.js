const form = document.querySelector('.js-form'),
    input = form.querySelector("input"),
    greeting = document.querySelector('.js-greetings');

const USER_LS = "username",
    SHOWING_CN = 'showing';

function saveName(text){
    localStorage.setItem('username', text)
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue)
    saveName(currentValue)
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN)
    greeting.classList.add('showing')
    greeting.innerText = `Hello ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName()
    }else{
        paintGreeting(currentUser)
    }
}

function init(){
    loadName()
}

init();