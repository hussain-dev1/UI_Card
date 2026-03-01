// const start = document.querySelector("#start");
// const stopt = document.querySelector("#stop");
// const reset = document.querySelector("#reset");
// const buttons = document.querySelectorAll("button")
// const myUpdate = document.querySelector("#myUpd")

// let val = 0

// myUpdate.textContent = val;
// const myStart = function(){
//     myUpdate.innerHTML = val++;
//     // console.log(val
// }
// start.addEventListener("click", ()=>{
//     setInterval(myStart, 100);
// })

// let intervalId = null;
// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         if (button.innerText === "Start") {
//             if (intervalId !== null) return;
//             intervalId = setInterval(() => {
//                 myUpdate.textContent = String(++val).padStart(2, '0');
//             }, 100);
//         }
//         if (button.innerText === "Stop") {
//             clearInterval(intervalId)
//             intervalId = null;
//         }
//         if (button.innerText === 'Reset'){
//             clearInterval(intervalId)
//             intervalId = null;
//             val=00;
//             myUpdate.textContent = val;
//         }
//     })
// })


// let fruits = ['Banana', 'Apple', 'PineApple', 'Orange', 'Watermelon']

// let fruitsLower = fruits.map(item=>item.toLowerCase())
// console.log(fruitsLower)

// let remainingFruits = fruitsLower.filter(fruit=>fruit !=='apple')
// let findFruit = fruitsLower.find(fruit=>fruit ==='apple')
// console.log(remainingFruits)
// console.log(findFruit)


const content = document.querySelector(".content");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const menus = document.querySelector(".menu");
let isDark = false;
btn.addEventListener("click", () => {
    menus.classList.toggle('menu');
    
    isDark = !isDark;
    if (menus && input.value) {
        console.log(input.value);
        content.textContent = input.value;
    }
    if (isDark) {
        menus.style.transitionDuration = '1000ms'
        document.body.style.color = "white";
        document.body.style.backgroundColor = "black";
    } else {
        document.body.style.color = "black";
        menus.style.transitionDuration = '1ms'
        document.body.style.backgroundColor = "white";
    }
    input.value = '';
})