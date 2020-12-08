const body = document.querySelector("body");

const IMAGE_AMOUNT = 3;

function handleImgLoad(){
    console.log("finished loading");
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `image/${imgNumber}.jpeg`;
    image.classList.add("bgImg")
    body.appendChild(image);
    image.addEventListener("loadend", handleImgLoad)
}

function genRandom(){
    const number = Math.ceil(Math.random()*IMAGE_AMOUNT)
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();