
import { SmartDevice } from './SmartDevice';

// Inherited class: Smartphone
export class Smartphone extends SmartDevice {
  batteryLevel: number;
  hasCamera: boolean;

  constructor(name: string, brand: string, yearReleased: number, hasCamera: boolean) {
    super(name, brand, yearReleased);
    this.batteryLevel = 100;
    this.hasCamera = hasCamera;
  }

  takePicture(): string {
    if (!this.isOn) {
      return "Can't take picture, device is off";
    }
    
    if (!this.hasCamera) {
      return "This device doesn't have a camera";
    }
    
    this.batteryLevel -= 5;
    return "📸 Picture taken! Battery level reduced to " + this.batteryLevel + "%";
  }

  // Override the base class method
  getInfo(): string {
    return `${super.getInfo()} - Battery: ${this.batteryLevel}%, Camera: ${this.hasCamera ? 'Yes' : 'No'}`;
  }
}
