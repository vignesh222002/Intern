class Vehicle {

    constructor(name, cc, company) {
        this.name = name;
        this.cc = cc;
        this.company = company;
        this.color='RED'
    }

    detail() {
        return (`Bike name is ${this.name} and engine capacity is ${this.cc} color of a bike is ${this.color} and owned by ${this.company}`)
    }

}

class Model extends Vehicle {

    constructor(vehicleModel) {
        super();
        this.vehicleModel = vehicleModel;
    }
}

Vehicle.prototype.fullDetail = function() {
    return (`${this.name} ${this.cc}cc ${this.color} ${this.company}`)
}


let bike1 = new Vehicle('R1', 998, "Yamaha");
let bikeModel = new Model(2022)

console.log(bike1.detail());
console.log(bikeModel.vehicleModel);
console.log(bike1.fullDetail());