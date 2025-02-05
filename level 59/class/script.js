let num1 = prompt("enter: num");
let num2 = prompt("enter num");
console.log(num1 + num2);

let name1 = prompt("enter your name");
console.log("hello," + name1)


document.getElementById('name_form').addEventListener('submit', function(event) {
    event.preventDefault();  

    // მიიღეთ მომხმარებლის სახელი
    let name = document.getElementById('name').value;


    console.log("მომხმარებლის სახელი: " + name);
});