// person = {
//     "name": "John",
//     "age": 30,
//     "is_student": False
// }   py

// const person = {
//     name: "John",
//     age: 30,
//     isStudent: false
// }; js


const car = {
    brand: "Toyota",
    model: "Corolla",
    startEngine: function() {
        console.log("Engine started ");
    }
};


console.log(car.brand);        
car.startEngine();   


// ფუნქცია - დამოუკიდებელი მოქმედებაა.
// მეთოდი - ობიექტის ან კლასის ფუნქციაა, რომელიც მისთვისაა მიბმული და მუშაობს მისი მონაცემების გამოყენებით.



class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

const person1 = new Person("Luka", 25, "Tbilisi");
console.log(person1);



function Car(brand, model, year, color, horsePower) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.horsePower = horsePower;
}


const myCar = new Car("BMW", "M3", 2022, "black", 450);

console.log(myCar); 