class Person {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    return this.name;
  }
}
class BankAccount extends Person {
  constructor(name, balance) {
    super(name) ;
    this.balance = balance;
  }
  deposit(money) {
    if (money > 0) {
      this.balance += money;
    } else {
      console.log("Eksik veya Hatalı miktar girdiniz");
    }
  }
  withdraw(money) {
    if (money > 0 && this.balance >= money) {
      console.log((this.balance -= money));
    } else if (money >= this.balance) {
      console.log("Bu işlem icin yeterli Bakiyeniz Bulunmamaktadır ");
    } else {
      console.log("Eksik veya Hatalı miktar girdiniz");
    }
  }
  balance() {
    return `Bakiyeniz : ${this.balance}`;
  }
}

const garantBank = new BankAccount("Mucahit", 2000);

console.log(garantBank.sayName());
