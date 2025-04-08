
import React, { useState } from 'react';

// Assignment 1: Design Your Own Class
// Base class: SmartDevice
class SmartDevice {
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

// Inherited class: Smartphone
class Smartphone extends SmartDevice {
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

// Assignment 2: Polymorphism Challenge
// Base class for vehicles
class Vehicle {
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

// Car class
class Car extends Vehicle {
  constructor() {
    super("Car");
  }
  
  move(): string {
    return "🚗 Driving on the road";
  }
}

// Plane class
class Plane extends Vehicle {
  constructor() {
    super("Plane");
  }
  
  move(): string {
    return "✈️ Flying through the air";
  }
}

// Boat class
class Boat extends Vehicle {
  constructor() {
    super("Boat");
  }
  
  move(): string {
    return "🚢 Sailing across the water";
  }
}

const Classes = () => {
  // States for Assignment 1
  const [phone] = useState(new Smartphone("iPhone 13", "Apple", 2021, true));
  const [deviceStatus, setDeviceStatus] = useState("Device is OFF");
  const [pictureStatus, setPictureStatus] = useState("");
  
  // States for Assignment 2
  const [vehicles] = useState([new Car(), new Plane(), new Boat()]);
  const [vehicleActions, setVehicleActions] = useState<string[]>([]);
  
  // Handlers for Assignment 1
  const handleTogglePower = () => {
    setDeviceStatus(phone.powerToggle());
    setPictureStatus("");
  };
  
  const handleTakePicture = () => {
    setPictureStatus(phone.takePicture());
  };
  
  // Handlers for Assignment 2
  const handleMoveVehicles = () => {
    setVehicleActions(vehicles.map(vehicle => `${vehicle.getVehicleInfo()} - ${vehicle.move()}`));
  };

  return (
    <section id="classes" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-display font-bold text-center mb-12 text-portfolio-800">
          Object-Oriented Programming Demos
        </h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Assignment 1: Class Design */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-portfolio-700">Assignment 1: Class Design</h3>
            <div className="mb-4">
              <p className="text-gray-700 mb-2"><strong>Device Info:</strong> {phone.getInfo()}</p>
              <p className="text-gray-700 mb-4"><strong>Status:</strong> {deviceStatus}</p>
              
              <div className="flex space-x-4 mb-4">
                <button 
                  onClick={handleTogglePower}
                  className="px-4 py-2 bg-portfolio-700 text-white rounded hover:bg-portfolio-800 transition-colors"
                >
                  Power {phone.isOn ? 'OFF' : 'ON'}
                </button>
                
                <button 
                  onClick={handleTakePicture}
                  className="px-4 py-2 bg-portfolio-600 text-white rounded hover:bg-portfolio-700 transition-colors"
                  disabled={!phone.isOn}
                >
                  Take Picture
                </button>
              </div>
              
              {pictureStatus && (
                <p className="text-gray-700 mt-2">{pictureStatus}</p>
              )}
            </div>
            
            <div className="bg-gray-100 p-4 rounded mt-4">
              <h4 className="font-bold mb-2">Class Hierarchy:</h4>
              <p>SmartDevice (Base Class) → Smartphone (Derived Class)</p>
              <p className="mt-2 text-sm text-gray-600">
                Demonstrates inheritance, encapsulation, and method overriding
              </p>
            </div>
          </div>
          
          {/* Assignment 2: Polymorphism */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-portfolio-700">Assignment 2: Polymorphism</h3>
            
            <button 
              onClick={handleMoveVehicles}
              className="px-4 py-2 bg-portfolio-700 text-white rounded hover:bg-portfolio-800 transition-colors mb-4"
            >
              Move All Vehicles
            </button>
            
            <div className="space-y-2 mt-4">
              {vehicleActions.length > 0 ? (
                vehicleActions.map((action, index) => (
                  <p key={index} className="p-2 bg-gray-100 rounded">{action}</p>
                ))
              ) : (
                <p className="text-gray-600">Click the button to see polymorphism in action!</p>
              )}
            </div>
            
            <div className="bg-gray-100 p-4 rounded mt-6">
              <h4 className="font-bold mb-2">Polymorphism Example:</h4>
              <p>Vehicle (Base Class) → Car, Plane, Boat (Derived Classes)</p>
              <p className="mt-2 text-sm text-gray-600">
                Each class implements the move() method differently, demonstrating polymorphism
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;
