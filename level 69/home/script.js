// 1)
time = document.getElementById("time");
const data1 = new Date();
console.log(data1.getHours(),data1.getMinutes(),data1.getSeconds());


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