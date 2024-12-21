// Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person1 = new Person("John", 30);
person1.greet(); // Hello, my name is John and I am 30 years old.

const person2 = new Person("Jane", 25);
person2.greet(); // Hello, my name is Jane and I am 25 years old.

const person3 = new Person("Bob", 40);
person3.greet(); // Hello, my name is Bob and I am 40 years old.

console.log(person1); // Person { name: 'John', age: 30 }
console.log(person2); // Person { name: 'Jane', age: 25 }
console.log(person3); // Person { name: 'Bob', age: 40 }

// Class Constructor
class Vehicle {
  constructor(make, model, year, color, type, speed) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.type = type;
    this.speed = speed;
  }
  info() {
    console.table({
      Make: this.make,
      Model: this.model,
      Year: this.year,
      Color: this.color,
      Type: this.type,
      Speed: this.speed,
    });
  }
}

const vehicle1 = new Vehicle("Toyota", "Camry", 2020, "White", "Sedan", 60);
const vehicle2 = new Vehicle("Honda", "Civic", 2019, "Black", "Sedan", 65);
const vehicle3 = new Vehicle("Ford", "Mustang", 2018, "Red", "Coupe", 70);

vehicle1.info(); // { Make: 'Toyota', Model: 'Camry', Year: 2020, Color: 'White', Type: 'Sedan', Speed: 60 }
vehicle2.info(); // { Make: 'Honda', Model: 'Civic', Year: 2019, Color: 'Black', Type: 'Sedan', Speed: 65 }
vehicle3.info(); // { Make: 'Ford', Model: 'Mustang', Year: 2018, Color: 'Red', Type: 'Coupe', Speed: 70 }

// Planets Class with Additional Features
class Planets {
  constructor(
    name = "Unknown",
    mass = "Unknown",
    radius = "Unknown",
    distance = "Unknown",
    gravity = "Unknown",
    temperature = "Unknown",
    atmosphere = "Unknown",
    numberOfMoons = 0
  ) {
    this.name = name;
    this.mass = mass; // kg
    this.radius = radius; // km
    this.distance = distance; // km
    this.gravity = gravity; // m/s²
    this.temperature = temperature; // °C
    this.atmosphere = atmosphere; // String
    this.numberOfMoons = numberOfMoons; // Integer
  }

  displayInfo() {
    console.table({
      Name: this.name,
      Mass: this.mass,
      Radius: this.radius,
      Distance: this.distance,
      Gravity: this.gravity,
      Temperature: this.temperature,
      Atmosphere: this.atmosphere,
      "Number of Moons": this.numberOfMoons,
    });
  }

  compareMass(otherPlanet) {
    if (this.mass === "Unknown" || otherPlanet.mass === "Unknown") {
      console.log("Mass information is missing for comparison.");
      return;
    }

    if (this.mass > otherPlanet.mass) {
      console.log(`${this.name} is more massive than ${otherPlanet.name}.`);
    } else if (this.mass < otherPlanet.mass) {
      console.log(`${this.name} is less massive than ${otherPlanet.name}.`);
    } else {
      console.log(`${this.name} and ${otherPlanet.name} have the same mass.`);
    }
  }

  isHabitable() {
    if (
      this.temperature >= 0 &&
      this.temperature <= 50 &&
      this.atmosphere.includes("Oxygen")
    ) {
      console.log(`${this.name} is potentially habitable.`);
    } else {
      console.log(`${this.name} is not habitable.`);
    }
  }

  calculateSurfaceArea() {
    if (this.radius === "Unknown") {
      console.log(
        "Radius information is missing for surface area calculation."
      );
      return;
    }

    const surfaceArea = 4 * Math.PI * Math.pow(this.radius * 1000, 2); // km² → m²
    console.log(`Surface area of ${this.name}: ${surfaceArea.toFixed(2)} m²`);
    return surfaceArea;
  }

  calculateVolume() {
    if (this.radius === "Unknown") {
      console.log("Radius information is missing for volume calculation.");
      return;
    }

    const volume = (4 / 3) * Math.PI * Math.pow(this.radius * 1000, 3); // km³ → m³
    console.log(`Volume of ${this.name}: ${volume.toFixed(2)} m³`);
    return volume;
  }
}

// Example Usage
const earth = new Planets(
  "Earth",
  5.972e24,
  6371,
  1.496e8,
  9.8,
  15,
  "78% Nitrogen, 21% Oxygen",
  1
);

const mars = new Planets(
  "Mars",
  6.417e23,
  3389,
  2.279e8,
  3.7,
  -63,
  "95% Carbon Dioxide",
  2
);

earth.displayInfo();
mars.displayInfo();

console.log("\n🌍 Mass Comparison:");
earth.compareMass(mars);

console.log("\n🌍 Habitability Check:");
earth.isHabitable();
mars.isHabitable();

console.log("\n🌍 Surface Area and Volume:");
earth.calculateSurfaceArea();
earth.calculateVolume();

mars.calculateSurfaceArea();
mars.calculateVolume();
