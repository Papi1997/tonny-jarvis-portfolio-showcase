
// Base class for vehicles
export class Vehicle {
  type: string;
  
  constructor(type: string) {
    this.type = type;
  }
  
  move(): string {
    return "Moving...";
  }
  
  getVehicleInfo(): string {
    return `Vehicle type: ${this.type}`;
  }
}
