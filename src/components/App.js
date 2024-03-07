import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    try {
      const response = await fetch("http://localhost:6001/plants");
      const data = await response.json();
      setPlants(data);
    } catch (error) {
      console.error("Error fetching plants:", error);
    }
  };

  const handleAddPlant = async (newPlantData) => {
    try {
      console.log("Adding plant:", newPlantData);
  
      // Convert the price to a number before sending it to the server
      newPlantData.price = parseFloat(newPlantData.price);
  
      const response = await fetch("http://localhost:6001/plants", {
        method: "POST",
        headers: {
          "Content-Type": "Application/JSON",
        },
        body: JSON.stringify(newPlantData),
      });
  
      if (!response.ok) {
        console.error("Failed to add plant. Status:", response.status);
        return;
      }
  
      const data = await response.json();
      console.log("New plant added:", data);
  
      await fetchPlants();
    } catch (error) {
      console.error("Error adding plant:", error);
    }
  };
  
  

  

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} onAddPlant={handleAddPlant} />
    </div>
  );
}

export default App;
