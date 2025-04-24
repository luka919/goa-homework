class BankAccount {
    #balance;
  
    constructor(initialBalance = 0) {
      this.#balance = initialBalance;
    }
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited $${amount}`);
      } else {
        console.log("Please enter a positive amount.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrew $${amount}`);
      } else {
        console.log("Check the amount – it may be more than the balance or invalid.");
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  const myAccount = new BankAccount(100);
  myAccount.deposit(50);       
  myAccount.withdraw(30);     
  console.log(myAccount.getBalance());


class Author {
    constructor(name) {
      this.name = name;
    }
  
    getName() {
      return this.name;
    }
  }




  class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author; 
    }
  

    printDetails() {
      console.log(`"${this.title}" by ${this.author.getName()}`);
    }
  }

  const author = new Author("J.K. Rowling");
  const book = new Book("Harry Potter and the Sorcerer's Stone", author);
  
  book.printDetails()



class Employee {
    #salary;
  
    constructor(name, salary) {
      this.name = name;
      this.#salary = salary;
    }
  
    getSalary() {
      return this.#salary;
    }
  
    getName() {
      return this.name;
    }
  }
  
  class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary);
      this.department = department;
    }
  
    printInfo() {
      console.log(
        `Name: ${this.getName()}, Department: ${this.department}, Salary: $${this.getSalary()}`
      );
    }
  }
  
  const manager = new Manager("Alice Johnson", 75000, "Engineering");
  manager.printInfo(); 