document.body.style.background="red";
var p = document.createElement("P");
document.body.appendChild(p);
p.innerHTML = "This is a paragraph";

document.getElementById("Blue").style.color="blue";
document.getElementsByClassName("test")[0].style.color="yellow";

function makeBlue(){
    document.body.style.background="blue";
}

function makeWhite(){
    document.body.style.background="white";
}