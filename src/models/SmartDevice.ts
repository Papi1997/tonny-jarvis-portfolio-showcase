
// Base class: SmartDevice
export class SmartDevice {
  name: string;
  brand: string;
  yearReleased: number;
  isOn: boolean;

  constructor(name: string, brand: string, yearReleased: number) {
    this.name = name;
    this.brand = brand;
    this.yearReleased = yearReleased;
    this.isOn = false;
  }

  powerToggle(): string {
    this.isOn = !this.isOn;
    return `Device is now ${this.isOn ? 'ON' : 'OFF'}`;
  }

  getInfo(): string {
    return `${this.name} by ${this.brand} (${this.yearReleased})`;
  }
}
