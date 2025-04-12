// rest
// 1
function showNames(...names) {
    console.log(names);
  }
// 2
const [first, second, ...others] = [10, 20, 30, 40, 50];
// 3
const user = {
    name: "Gio",
    age: 15,
    country: "Georgia",
    hobby: "Football"
  };
  
const { name, ...rest } = user;
// spred
// 1
const arr1 = [1, 2];
const arr2 = [3, 4];

const combined = [...arr1, ...arr2];
// 2
const obj1 = { a: 1 };
const obj2 = { b: 2 };

const merged = { ...obj1, ...obj2 };
// 3
const numbers = [5, 6, 7];
const copy = [...numbers];


// localStorage არის ბრაუზერის მეხსიერე, სადაც შეგიძლია შეინახო ინფორმაცია ისე, რომ გადატვირთვის შემდეგაც არ წაიშალოს.
