// 2.0
// function helloUser(user, age){
//     console.log('Hello! ', user, ". you are ", age, ", right?" );
// }

// helloUser("Tom", 23);

//------------------------------------------------------------------------
// 2.1

// function helloUser(user, age){
//     return `Hello! ${user}, you are ${age}, right?`;
// } // 백틱 쓸때는 옵션키(맥북) 누르고 해야댐

// const greetTom = helloUser("Tom", 23);

// console.log(greetTom);

// const calculator = {
//     plus: function(n1, n2){
//         return n1+n2;
//     },
//     multiply: function(n1, n2){
//         return n1*n2;
//     }
// }

// console.log(calculator.plus(5, 5));
// console.log(calculator.multiply(5, 5));

//------------------------------------------------------------------------
// 2.2

// const title = document.getElementById("title");
// title.innerHTML = "Hi! from JS"
// console.log(title);

//------------------------------------------------------------------------

// 2.3       console.dir(object);, querySelector는 첫번째 node 반환

// const title = document.querySelector("#title");
// title.innerHTML = "Hi! from JS";
// title.style.color = "red";
// document.title = "I own you now";
// document.body.style.backgroundColor = "orange";


//------------------------------------------------------------------------


// 2.4

// const title = document.querySelector("#title");

// function handleClick(){
//     title.style.color = "blue";
// }

// window.addEventListener("click", handleClick);



//------------------------------------------------------------------------

// 2.5 if / else

// if(20 > 5 && "nicolas" === "nicolas"){
//     console.log("yes");
// }else{
//     console.log("no");
// }


//------------------------------------------------------------------------


// 2.6

const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#9ag43e";

function handleClick() {
    const currentColor = title.style.color;
    
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
        console.log(title.style.color);
    } else{
        title.style.color = BASE_COLOR;
        console.log(title.style.color);
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick);
}

init();