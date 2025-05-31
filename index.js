let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let div = document.querySelector("div");
btn.addEventListener("click",function(){
    
    let randomColor = getrandomcolor();
    h2.innerText = randomColor;
    // or h2= randomColor;
    div.style.backgroundColor = randomColor;
}
)
function getrandomcolor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue =Math.floor(Math.random()*255);
    let color = `rgb(${red},${green},${blue})`;
    return color;
}

// part10.js ka hai ye