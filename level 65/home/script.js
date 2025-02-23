function Car(make, model, year, color,seats){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.seats = seats
}

let car1 = new Car("ford","mustang",2024,"blue","one");

console.log(car1.make,model,year,color,seats)

function Moto(make, model, year,color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}

let moto1 = new Moto("suzuki","unveil","2025","black");

console.log(moto1.make,model,year,color)