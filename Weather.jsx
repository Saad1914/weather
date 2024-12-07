import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

export default function Weather() {
  let [city, setCity] = useState("");
  let [show, setShow] = useState("");
  let [error, setError] = useState("");
  let key = '4e19913a47e77b135cc35a6f0ed3bc09';

  let cityval = (event) => {
    setCity(event.target.value);
    setError(""); // Reset error message when typing
  };

  let call = async () => {
    if (city === "") {
      setError("Please enter a city name");
      return;
    }

    let get = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
    let save = await get.json();
    setShow(save);

    if (save.cod === '404') {
      setError("Please enter a valid city name");
      setShow(""); // Clear previous results if the city is not found
    }
    setCity("")
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-blue-500 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-700">Weather App</h1>
        
        <div className="flex space-x-2 mb-4">
          <input
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-300" value={city}
            type="text"
            placeholder="Enter country/city"
            onChange={cityval}
          />
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-green-600 transition duration-300" 
            onClick={call}>
            <FaSearch />
          </button>
        </div>

        { 
          error && 
          <div className="text-red-500 text-center mb-4">
            <p>{error}</p>
          </div>
        }

        <div>
          {
            show && show.weather ? (
              <div className="text-center text-gray-700">
                <h2 className="text-4xl font-bold">{show.main.temp} °C</h2>
                <h3 className="text-2xl mt-2">{show.name}</h3>
                <h4 className="text-xl mt-1 capitalize">{show.weather[0].description}</h4>
              </div>
            ) : null
          }
        </div>
      </div>
    </div>
  );
}
