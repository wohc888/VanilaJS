const title = document.querySelector("#title");

function handleClick(){
    const hasClass = title.classList.contains('clicked')
    if(!hasClass){
        title.classList.add("clicked")
        isClicked(hasClass)
        console.log(hasClass, title.style.color)
    }
    else{
        title.classList.remove("clicked")
        isClicked(hasClass)
        console.log(hasClass, title.style.color)
    }
}

function isClicked(hasClass){
    if(hasClass) title.style.color = 'red'
    else title.style.color = 'blue'
}

title.addEventListener("click", handleClick);