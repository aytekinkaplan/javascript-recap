const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York",
  DataTransferItemList: "Hello",
  greet: function () {
    console.log(
      `Hello, my name is ${this.firstName} ${this.lastName}. I am ${this.age} years old and I live in ${this.city}.`
    );
  },
};

person.greet();

const copyPerson = Object.assign({}, person);
console.log(copyPerson);
copyPerson.firstName = "Jane";
copyPerson.lastName = "Smith";
copyPerson.age = 35;
copyPerson.city = "Los Angeles";
copyPerson.greet();

const keys = Object.keys(person);
console.log("Keys:", keys);

const values = Object.values(person);
console.log("Values:", values);

const entries = Object.entries(person);
console.log("Entries:", entries);

const hasFirstName = "firstName" in person;
console.log("Has firstName:", hasFirstName);

const hasAge = "age" in person;
console.log("Has age:", hasAge); 

const hasDataTransferItemList = "DataTransferItemList" in person;
console.log("Has DataTransferItemList:", hasDataTransferItemList);