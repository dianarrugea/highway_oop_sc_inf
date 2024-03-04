let highway1 = [];
let highway2 = [];

function Vehicle(brand, type) {
  this.brand = brand;
  this.type = type;
  this.vehicle = {
    vehicleBrand: brand,
    vehicleType: type,
  };
}

Vehicle.prototype.driveOnHighway1 = function () {
  if (highway1.length === 0) {
    highway1.push(this.vehicle);
  } else {
    let typeToCheck = this.vehicle.vehicleType;
    let hasSameType = false;

    for (i = 0; i < highway1.length; i++) {
      if (highway1[i].vehicleType === typeToCheck) {
        hasSameType = true;
        break;
      }
    }
    if (hasSameType) {
      console.log(
        "Cannot add: ",
        this.vehicle.vehicleBrand,
        "to Highway 1",
        ", there is allready this type of vehicle on the highway: ",
        this.vehicle.vehicleType
      );
    } else {
      highway1.push(this.vehicle);
    }
  }
};

Vehicle.prototype.driveOnHighway2 = function () {
  if (highway2.length === 0) {
    highway2.push(this.vehicle);
  } else {
    let typeToCheck = this.vehicle.vehicleType;
    let hasSameType = false;

    for (i = 0; i < highway2.length; i++) {
      if (highway2[i].vehicleType === typeToCheck) {
        hasSameType = true;
        break;
      }
    }
    if (hasSameType) {
      console.log(
        "Cannot add: ",
        this.vehicle.vehicleBrand,
        "to Highway 2",
        ", there is allready this type of vehicle on the highway: ",
        this.vehicle.vehicleType
      );
    } else {
      highway2.push(this.vehicle);
    }
  }
};

function Car(brand, type) {
  Vehicle.call(this, brand, type);
}
Car.prototype = Object.create(Vehicle.prototype);

function Bus(brand, type) {
  Vehicle.call(this, brand, type);
}
Bus.prototype = Object.create(Vehicle.prototype);

function Motorcycle(brand, type) {
  Vehicle.call(this, brand, type);
}
Motorcycle.prototype = Object.create(Vehicle.prototype);

function Truck(brand, type) {
  Vehicle.call(this, brand, type);
}
Truck.prototype = Object.create(Vehicle.prototype);

const toyota = new Car("Toyota", "Car");
const mercedes = new Car("Mercedes", "Car");
const scania = new Bus("Scania", "Bus");
const triumph = new Motorcycle("Triumph", "Motorcycle");
const volvo = new Truck("Volvo", "Truck");
const daf = new Truck("DAF", "Truck");

mercedes.driveOnHighway1();
toyota.driveOnHighway1();
scania.driveOnHighway1();
triumph.driveOnHighway1();
volvo.driveOnHighway1();
daf.driveOnHighway1();

toyota.driveOnHighway2();
mercedes.driveOnHighway2();
scania.driveOnHighway2();
triumph.driveOnHighway2();
daf.driveOnHighway2();
volvo.driveOnHighway2();

let highway1Prefix = "Highway 1: ";
let highway2Prefix = "Highway 2: ";

console.log(highway1Prefix, highway1);
console.log(highway2Prefix, highway2);
