// 1)
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
      total += num;
    }
    return total;
  }


console.log(sum(2, 3));                  
console.log(sum(10, 20, 30));           
console.log(sum(100));              
console.log(sum(1, 2, 3, 4, 5));  




// 2)
const person = {
    name: "luka",
    age: 15
  };
  
  const contact = {
    email: "luka@gmail.com",
    phone: "599 127 947"
  };
  
 
  const fullInfo = {
    ...person,
    ...contact
  };
  
  console.log(fullInfo);




// 3)
const fruits = ["apple", "pear"];
const vegetables = ["carrot", "potato"];


const food = [...fruits, ...vegetables];

console.log(food);
