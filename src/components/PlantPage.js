// PlantPage.js

import React, { useEffect, useState } from 'react';
import NewPlantForm from './NewPlantForm';
import PlantList from './PlantList';
import Search from './Search';

function PlantPage({ plants, onAddPlant }) {
  const [filteredPlants, setFilteredPlants] = useState(plants);

  useEffect(() => {
    setFilteredPlants(plants);
  }, [plants]);

  const handleSearch = (searchTerm) => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const filtered = plants.filter((plant) =>
      plant.name.toLowerCase().includes(lowercasedSearchTerm)
    );
    console.log('Filtered plants:', filtered);
    setFilteredPlants(filtered);
  };

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search onSearch={handleSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
