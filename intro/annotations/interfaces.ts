interface Vehicle {
  name: string;
  year: Date;
  isBroken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  isBroken: true,
  summary() {
    return `This old ${this.name} is ${this.isBroken}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
