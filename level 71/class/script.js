// 1)
let elements = document.getElementsByClassName("mc");
console.log(elements);


// 2)
let elementById = document.querySelector("#mid");
let elementbyclass = document.querySelector(".mc2");
console.log(elementById);
consol.log(elementbyclass);


// 3)
let image = document.querySelector("#appleimg");


image.src = "images.jpg";
image.width = 300;


// 4)
let paragraph = document.querySelector("#paragraph");


paragraph.style.color = "white";         
paragraph.style.backgroundColor = "blue"; 
paragraph.style.fontSize = "24px"; 


// 5)
let newp = document.createElement("p");
let textnode = document.createTextNode("this is new p");
newp.appendChild(textnode);
let div = document.querySelector("#mydiv");
div.appendChild(newp);