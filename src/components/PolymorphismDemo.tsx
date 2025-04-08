
import React, { useState } from 'react';
import { Car, Plane, Boat } from '../models/VehicleTypes';
import { Vehicle } from '../models/Vehicle';

const PolymorphismDemo = () => {
  const [vehicles] = useState<Vehicle[]>([new Car(), new Plane(), new Boat()]);
  const [vehicleActions, setVehicleActions] = useState<string[]>([]);
  
  const handleMoveVehicles = () => {
    setVehicleActions(vehicles.map(vehicle => `${vehicle.getVehicleInfo()} - ${vehicle.move()}`));
  };

  return (
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
  );
};

export default PolymorphismDemo;
