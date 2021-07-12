class Vehicle {
  constructor(public color: string) {}

  public drive(): void {
    console.log("driving...");
  }

  protected honk(): void {
    console.log("Beep!!!");
  }
}

class Truck extends Vehicle {
  public wheels: number;
  constructor(wheels: number, color: string) {
    super(color);
    this.wheels = wheels;
  }
  drive(): void {
    console.log("Vrooommm");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}
