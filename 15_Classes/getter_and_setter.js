// Getter and Setter Best Practices
class Person {
  constructor(name, age) {
    this._name = name; // Özel değişkenler (_name, _age)
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    if (typeof newName === 'string' && newName.trim().length > 0) {
      this._name = newName;
    } else {
      console.error('Invalid name value. Name must be a non-empty string.');
    }
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Setter for age
  set age(newAge) {
    if (typeof newAge === 'number' && newAge > 0) {
      this._age = newAge;
    } else {
      console.error('Invalid age value. Age must be a positive number.');
    }
  }
}

// Example Usage
const person1 = new Person('Alice', 25);

console.log(person1.name); // Getter çağrısı
console.log(person1.age);

person1.name = 'Bob'; // Setter çağrısı
person1.age = 30;

console.log(person1.name); // Güncellenmiş değer
console.log(person1.age);

// Geçersiz veri atamaları
person1.name = ''; // Hata mesajı gösterir
person1.age = -5; // Hata mesajı gösterir
