const clockContainer = document.querySelector(".js-clock"), 
clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const seconds = date.getSeconds(), 
        minutes = date.getMinutes(),
        hours = date.getHours();
    
    clockTitle.innerText = `${hours >= 10 ? hours:'0'+hours}:${minutes >= 10 ? minutes:'0'+minutes}:${seconds >= 10 ? seconds:'0'+seconds}`;
}

function handleClick(){
    clockTitle.classList.toggle('clicked');
}

function init(){
    getTime();
    setInterval(getTime, 1000)
    clockTitle.addEventListener("click", handleClick)
}

init();