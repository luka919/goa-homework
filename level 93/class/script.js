class Animal {
    speak() {
      console.log("animals speaking something");
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log("animals seas woof");
    }
  }

  const genericAnimal = new Animal();
  genericAnimal.speak(); 
  
  const myDog = new Dog();
  myDog.speak();



  class User {
    static count = 0; 
  
    constructor(name) {
      this.name = name;
      User.count++; 
    }
  
    static getUserCount() {
      return User.count; 
    }
  }
  

  const user1 = new User("ana");
  const user2 = new User("nika");
  
  console.log(User.getUserCount());