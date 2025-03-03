// 1)
let minutes = Number(prompt("enter amount of minutes"))
let seconds = Number(prompt("enter amount of seconds"))

// 2)
let count = 0;

const interval = setInterval(() => {
    console.log(count);
    if (count === 15) {
        clearInterval(interval);
        console.log("Stopped at 15");
    }
    count++;
}, 500);


// 3)
setTimeout(() => {
    console.log(2);
}, 1000);

setTimeout(() => {
    console.log(1);
}, 2000);

setTimeout(() => {
    console.log(3);
}, 3000);