let array = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];
randomNumber = () =>{
    return Math.floor(Math.random() * array.length);
}

getRandomTime = () =>{
    return (Math.random() * 3);
}
getRandomBorderSize = () =>{
    return Math.floor(Math.random() * 15 + 15);
}
getRandomBlur = () => {
    return Math.floor(Math.random() * 4 + 1);
}

function colorChange(){
    let color = "#";
    for(let i = 1; i<=6; i++){
        color = color + array[randomNumber()];
    }
    return color;
}
start = () => {
    for(let i=1; i<=100; i++){
        document.querySelector(".b" + i).style.transition = "ease " + getRandomTime() + "s";
        document.querySelector(".b" + i).style.backgroundColor = colorChange();
        document.querySelector(".b" + i).style.border = "solid" + colorChange() + " " + getRandomBorderSize() + "px";
        document.querySelector(".b" + i).style.filter = "blur(" + getRandomBlur() + "px)";
        document.querySelector(".b" + i).style.boxShadow = "0 0 " + getRandomBorderSize() + "px"+ colorChange() ;
    }
}
setInterval(start, 1500);