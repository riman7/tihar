let array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];
function colorChange(){
    let color = "#";
    for(let i = 1; i<=6; i++){
        color = color + array[randomNumber()];
    }
    return color;
}

randomNumber = () =>{
    return Math.floor(Math.random() * array.length);
}
getRandomTime = () =>{
    return (Math.random() * 3 + 1);
}
getRandomCircleSize = () =>{
    return Math.floor(Math.random() * 3 + 2);
}


start = () => {
    circle = document.querySelectorAll('.circle');
circle.forEach(myFunction);
function myFunction(item, index){
    let  box = document.querySelector(`.b${index + 1}`);
    let wh = getRandomCircleSize();
    let col = colorChange();
    let col2 = colorChange();
    item.style.width = `min(${wh}vh, ${wh }vw)`;
    item.style.height = `min(${wh}vh, ${wh }vw)`;
    item.style.backgroundColor = col;
    item.style.boxShadow = `0 0 min(${wh - 1}vh, ${wh - 1}vw)  ${col}`;

    box.style.border = "solid" + col + " 4px";
    box.style.transition = "ease all " + getRandomTime() + "s";
    box.style.backgroundColor = col2; 
    box.style.boxShadow = `0 0 20px ${col}`;
    box.style.filter = `blur(${.1 * wh}px) saturate(125%)`
}
}
let typing = document.querySelector(".typing");
setTimeout(()=>{typing.innerHTML = "Diwali"}, 3000);
changeMessage = () =>{

    typing.innerHTML = "Tihar!";
    setTimeout(()=>{typing.innerHTML = "Diwali"}, 3000);
    
}
setInterval(changeMessage, 6000)
setInterval(start, 1500);
