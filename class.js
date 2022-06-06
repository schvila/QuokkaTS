const cars = [];

class Car {
  constructor(m) {
    this.model = m;
  }
  save() {
    cars.push(this);
  }
  static getAll() {
    return cars;
  }
}

let c1 = new Car('Audi');
c1.save();
let c2 = new Car('Skoda');
c2.save();

console.log(Car.getAll());