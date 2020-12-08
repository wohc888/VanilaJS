const clock = document.querySelector(".clock");

function operateClock(){
    const time = new Date();
    const hour = time.getHours(),
        minute = time.getMinutes();
        
    clock.innerHTML = `${hour<10 ? '0'+hour : hour}:${minute<10 ? '0'+minute : minute}`
}

function init(){
    operateClock();
    setInterval(operateClock, 1000);    
}
init();
