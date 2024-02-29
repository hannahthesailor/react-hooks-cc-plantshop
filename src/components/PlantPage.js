import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants }) {
  const [filteredPlants, setFilteredPlants] = useState(plants);

  useEffect(() => {
    setFilteredPlants(plants);
  }, [plants]);

  const handleSearch = (searchTerm) => {
    const filtered = plants.filter((plant) =>
      plant.name.toLowerCase().includes(searchTerm)
    );
    setFilteredPlants(filtered);
  };

  return (
    <main>
      <NewPlantForm />
      <Search onSearch={handleSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
