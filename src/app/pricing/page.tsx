'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

export default function Pricing() {
  const [totalArea, setTotalArea] = useState(1000);
  const [buildingType, setBuildingType] = useState('private');
  const [additionalFunctions, setAdditionalFunctions] = useState({
    configurator: false,
    weatherPro: false,
    touchPresentation: false,
    thirdPerson: false,
    autoMode: false,
    firstPerson: false,
  });
  const [sourceData, setSourceData] = useState('none');
  const [totalPrice, setTotalPrice] = useState(0);

  // Memoized function to calculate base price based on area and building type
  const calculateBasePrice = useCallback(() => {
    const area = totalArea / 10.764;
    const pricePerSquareMeter = {
      private: 15,
      'low-rise': 12,
      apartment: 10,
      commercial: 20,
      cultural: 18,
    };
    return area * pricePerSquareMeter[buildingType as keyof typeof pricePerSquareMeter];
  }, [totalArea, buildingType]);

  // Memoized function to calculate additional functions cost
  const calculateAdditionalCost = useCallback(() => {
    let additionalCost = 0;
    if (additionalFunctions.configurator) additionalCost += 1000;
    if (additionalFunctions.weatherPro) additionalCost += 500;
    if (additionalFunctions.touchPresentation) additionalCost += 1000;
    if (additionalFunctions.thirdPerson) additionalCost += 300;
    if (additionalFunctions.autoMode) additionalCost += 300;
    if (additionalFunctions.firstPerson) additionalCost += 300;
    return additionalCost;
  }, [additionalFunctions]);

  // Memoized function to calculate discount based on source data
  const calculateDiscount = useCallback((basePrice: number) => {
    let discount = 0;
    switch (sourceData) {
      case 'model':
        discount = basePrice * 0.3;
        break;
      case 'design':
        discount = basePrice * 0.05;
        break;
      default:
        discount = 0;
    }
    return discount;
  }, [sourceData]);

  // Update total price whenever any input changes
  useEffect(() => {
    const basePrice = calculateBasePrice();
    const additionalCost = calculateAdditionalCost();
    const discount = calculateDiscount(basePrice);
    setTotalPrice(basePrice + additionalCost - discount);
  }, [calculateBasePrice, calculateAdditionalCost, calculateDiscount]);

  const handleAdditionalFunctionChange = (functionName: string) => {
    setAdditionalFunctions((prev) => ({
      ...prev,
      [functionName]: !prev[functionName as keyof typeof additionalFunctions],
    }));
  };

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Price Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate the cost of your interactive architectural visualization project
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-8">
            {/* Total Area Input */}
            <div>
              <label className="block text-lg font-medium text-gray-900 mb-4">
                Total Area (ft²)
              </label>
              <input
                type="range"
                min="1000"
                max="107639"
                value={totalArea}
                onChange={(e) => setTotalArea(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between mt-2">
                <span className="text-sm text-gray-600">1,000 ft²</span>
                <span className="text-sm text-gray-600">107,639 ft²</span>
                <span className="text-sm font-medium text-gray-900">
                  {totalArea.toLocaleString()} ft²
                </span>
              </div>
            </div>

            {/* Building Types */}
            <div>
              <label className="block text-lg font-medium text-gray-900 mb-4">
                Types of Buildings
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={buildingType}
                onChange={(e) => setBuildingType(e.target.value)}
              >
                <option value="private">
                  Private sector (residential buildings up to 3000 m²)
                </option>
                <option value="low-rise">
                  Low-rise residential complex (from 3000 m² total)
                </option>
                <option value="apartment">
                  Apartment residential building (from 3000 m²)
                </option>
                <option value="commercial">Commercial real estate</option>
                <option value="cultural">
                  Cultural and recreational facilities
                </option>
              </select>
            </div>

            {/* Basic Functionality */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Basic Functionality
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600"
                    checked
                    disabled
                  />
                  <span className="ml-2 text-gray-700">Professional camera</span>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600"
                    checked
                    disabled
                  />
                  <span className="ml-2 text-gray-700">
                    Weather and time settings (LITE ver.)
                  </span>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600"
                    checked
                    disabled
                  />
                  <span className="ml-2 text-gray-700">
                    &quot;DRONE&quot; Presentation mode
                  </span>
                </div>
              </div>
            </div>

            {/* Additional Functions */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Additional Functions
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600"
                      checked={additionalFunctions.configurator}
                      onChange={() =>
                        handleAdditionalFunctionChange('configurator')
                      }
                    />
                    <span className="ml-2 text-gray-700">Configurator</span>
                  </div>
                  <span className="text-gray-600">+$1000</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600"
                      checked={additionalFunctions.weatherPro}
                      onChange={() =>
                        handleAdditionalFunctionChange('weatherPro')
                      }
                    />
                    <span className="ml-2 text-gray-700">
                      Weather and time settings (PRO ver.)
                    </span>
                  </div>
                  <span className="text-gray-600">+$500</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600"
                      checked={additionalFunctions.touchPresentation}
                      onChange={() =>
                        handleAdditionalFunctionChange('touchPresentation')
                      }
                    />
                    <span className="ml-2 text-gray-700">
                      TOUCH PRESENTATION mode
                    </span>
                  </div>
                  <span className="text-gray-600">+$1000</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600"
                      checked={additionalFunctions.thirdPerson}
                      onChange={() =>
                        handleAdditionalFunctionChange('thirdPerson')
                      }
                    />
                    <span className="ml-2 text-gray-700">3RD PERSON mode</span>
                  </div>
                  <span className="text-gray-600">+$300</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600"
                      checked={additionalFunctions.autoMode}
                      onChange={() => handleAdditionalFunctionChange('autoMode')}
                    />
                    <span className="ml-2 text-gray-700">AUTO mode</span>
                  </div>
                  <span className="text-gray-600">+$300</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600"
                      checked={additionalFunctions.firstPerson}
                      onChange={() =>
                        handleAdditionalFunctionChange('firstPerson')
                      }
                    />
                    <span className="ml-2 text-gray-700">1ST PERSON mode</span>
                  </div>
                  <span className="text-gray-600">+$300</span>
                </div>
              </div>
            </div>

            {/* Source Data */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Source Data
              </h3>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={sourceData}
                onChange={(e) => setSourceData(e.target.value)}
              >
                <option value="none">NONE</option>
                <option value="model">
                  Ready-made 3D model (-30%)
                </option>
                <option value="design">
                  Architectural design and static visualizations (-5%)
                </option>
              </select>
            </div>

            {/* Total Price */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">
                  TOTAL PRICE
                </span>
                <span className="text-3xl font-bold text-blue-600">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Send Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}