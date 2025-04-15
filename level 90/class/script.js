// 1)
class BankAccount {
    #accountNumber;
    #balance;
    #pin;
  
    constructor(accountNumber, initialBalance, pin) {
      this.#accountNumber = accountNumber;
      this.#balance = initialBalance;
      this.#pin = pin;
    }
  
    #validatePin(pin) {
      return this.#pin === pin;
    }
  
    #setBalance(amount) {
      this.#balance = amount;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#setBalance(this.#balance + amount);
        return `Deposited $${amount}. New balance is $${this.#balance}`;
      } else {
        return "Invalid deposit amount.";
      }
    }
  
    withdraw(amount, pin) {
      if (!this.#validatePin(pin)) {
        return "Incorrect PIN.";
      }
      if (amount <= 0) {
        return "Invalid withdrawal amount.";
      }
      if (amount > this.#balance) {
        return "Insufficient funds.";
      }
      this.#setBalance(this.#balance - amount);
      return `Withdrew $${amount}. Remaining balance is $${this.#balance}`;
    }
  
    checkBalance(pin) {
      if (this.#validatePin(pin)) {
        return `Your balance is $${this.#balance}`;
      } else {
        return "Incorrect PIN.";
      }
    }
  
    get accountNumber() {
      return this.#accountNumber;
    }

    set pin(newPin) {
      if (typeof newPin === "string" && newPin.length >= 4) {
        this.#pin = newPin;
      } else {
        throw new Error("PIN must be a string with at least 4 characters.");
      }
    }
  }