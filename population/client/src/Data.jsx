import React, { useState, useEffect } from 'react';
// import './index.css';

const PopulationData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [year, setYear] = useState('');
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    const fetchPopulationData = async () => {
      try {
        const response = await fetch(
          'https://datausa.io/api/data?drilldowns=Nation&measures=Population'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch population data');
        }
        const result = await response.json();
        setData(result.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPopulationData();
  }, []);

  useEffect(() => {
    if (year && data) {
      const filtered = data.find((item) => item.Year === year);
      setFilteredData(filtered || null);
    } else {
      setFilteredData(null);
    }
  }, [year, data]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (

<div className='bg-red-900 ' >redfilerskdjf,msljmc

</div>
  );
};

export default PopulationData;


// weatherApp

// import React, { useState } from "react";
// import axios from "axios";

// const WeatherApp = () => {
//   const [city, setCity] = useState("");
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState("");

//   const fetchCurrentWeather = async () => {
//     const options = {
//       method: "GET",
//       url: "https://api.weatherstack.com/current",
//       params: {
//         access_key: "e6d08e8e513244cd76ec4e40d0a978be",
//         query: city,
//       },
//     };

//     try {
//       const response = await axios.request(options);
//       if (response.data.success === false) {
//         setError(response.data.error.info);
//         setWeatherData(null);
//       } else {
//         setWeatherData(response.data);
//         setError("");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("An error occurred while fetching weather data.");
//       setWeatherData(null);
//     }
//   };

//   return (
//     <div className=" bg-gradient-to-b from-blue-500 to-blue-900 mt-5 lex items-center justify-center text-danger font-sans">
//       <div className="max-w-md w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 shadow-xl text-center">
//         <h1 className="text-3xl font-bold mb-4">WEATHER APP</h1>
//         <div className="flex items-center justify-center mb-4">
//           <input
//             type="text"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             placeholder="Enter city"
//             className="px-4 py-2 rounded-l bg-gray-200 text-gray-900 w-3/4"
//           />
//           <button
//             onClick={fetchCurrentWeather}
//             className="bg-cyan  text-black px-4 py-2 rounded-r"
//           >
//             Search
//           </button>
//         </div>

//         {error && <p className="text-red-500">{error}</p>}

//         {weatherData && (
//           <div>
//             <h2 className="text-2xl font-semibold">
//               {weatherData.location.name}, {weatherData.location.country}
//             </h2>
//             <p className="text-lg">{weatherData.current.weather_descriptions[0]}</p>
//             <div className="flex justify-center items-center mt-4">
//               <div className="text-5xl font-bold">{weatherData.current.temperature}°C</div>
//               <img
//                 src={weatherData.current.weather_icons[0]}
//                 alt="Weather Icon"
//                 className="w-16 h-16 ml-4"
//               />
//             </div>
//             <div className="mt-4 text-sm">
//               <p><strong>Wind:</strong> {weatherData.current.wind_speed} km/h</p>
//               <p><strong>Humidity:</strong> {weatherData.current.humidity}%</p>
//               <p><strong>Pressure:</strong> {weatherData.current.pressure} mb</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WeatherApp;


