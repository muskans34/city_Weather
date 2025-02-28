import React, { useState, useEffect } from 'react';

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
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Population Data</h1>
        <input
          type="text"
          placeholder="Enter year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          
        />
        {filteredData ? (
          <div className="bg-gray-50 p-4 rounded-md shadow-inner">
            <p className="">Year: <span className="font-semibold">{filteredData.Year}</span></p>
            <p className="text-lg">Population: <span className="font-semibold">{filteredData.Population}</span></p>
            <p className="text-lg">Slug Nation: <span className="font-semibold">{filteredData['Slug Nation']}</span></p>
          </div>
        ) : (
          year && <p className="text-red-500">No data available for the entered year.</p>
        )}
      </div>
    </div>
  );
};

export default PopulationData;
