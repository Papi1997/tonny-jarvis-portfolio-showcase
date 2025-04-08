
import React, { useState } from 'react';
import { Smartphone } from '../models/Smartphone';

const ClassDesignDemo = () => {
  const [phone] = useState(new Smartphone("iPhone 13", "Apple", 2021, true));
  const [deviceStatus, setDeviceStatus] = useState("Device is OFF");
  const [pictureStatus, setPictureStatus] = useState("");
  
  const handleTogglePower = () => {
    setDeviceStatus(phone.powerToggle());
    setPictureStatus("");
  };
  
  const handleTakePicture = () => {
    setPictureStatus(phone.takePicture());
  };

  return (
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
  );
};

export default ClassDesignDemo;
