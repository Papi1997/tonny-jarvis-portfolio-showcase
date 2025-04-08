
import { Vehicle } from './Vehicle';

// Car class
export class Car extends Vehicle {
  constructor() {
    super("Car");
  }
  
  move(): string {
    return "🚗 Driving on the road";
  }
}

// Plane class
export class Plane extends Vehicle {
  constructor() {
    super("Plane");
  }
  
  move(): string {
    return "✈️ Flying through the air";
  }
}

// Boat class
export class Boat extends Vehicle {
  constructor() {
    super("Boat");
  }
  
  move(): string {
    return "🚢 Sailing across the water";
  }
}
