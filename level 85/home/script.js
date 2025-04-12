// 1
const numbers = [10, 20, 30, 40, 50];

const [a, b, c, d, e] = numbers;


// 2
const user = {
    name: "luka",
    age: 16234234,
    city: "batumi"
  };
  
  const { name, age, city } = user;

// 3
// rest  გამოიყენება მაშინ, როცა გვსურს მრავალი მნიშვნელობის ერთ ცვლადში შეკრება.

// გამოიყენება მაშინ, როცა გვსურს ობიექტის ან მასივის გაფანტვა გაშლა.

// 4
function sumAll(...numbers) {
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }
    return sum;
  }

// 5
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const copiedArray = [...originalArray];

// 6
const user1 = {
    name: "luka",
    age: 16,
    city: "batumi",
    isStudent: false,
    hobby: "coding"
};
  

const { name, age, ...restUser } = user; // name da age gamoyenebulia magito miwitlebs