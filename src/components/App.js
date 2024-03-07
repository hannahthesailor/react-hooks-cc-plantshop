import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
     .then(response => response.json())
     .then(plantData => setPlants(plantData))
  }, []);

  function handleAddPlant(newPlantData) {
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(newPlantData)
    })
    .then(response => response.json())
    .then(newPlant => {
      setPlants(currentPlants => [...currentPlants, newPlant]);
    })
    .catch(error => {
      console.error('Error adding plant:', error);
    });
  }
  

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} onAddPlant={handleAddPlant} />
    </div>
  );
}

export default App;
