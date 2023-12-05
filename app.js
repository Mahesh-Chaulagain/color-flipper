const colors = ["green", "red", "rgba(133,122,200)","#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // get random number between 0 and 3
    const randomNumber = 2;
    // style the body background
    document.body.style.backgroundColor = colors[randomNumber];
    // change the text content of color with new color name
    color.textContent = colors[randomNumber];
})