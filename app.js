const colors = ["green", "red", "rgba(133,122,200)","#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // get random number between 0 and 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    // style the body background
    document.body.style.backgroundColor = colors[randomNumber];
    // change the text content of class "color" with new color name
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    // get random number from 0 all the way to 1 using Math.random()
    // to round down the number to the closest integer use Math.floor()
    return Math.floor(Math.random() * colors.length);
}