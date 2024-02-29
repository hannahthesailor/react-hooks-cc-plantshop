import React from "react";
import PlantCard from "./PlantCard";

const PlantList = ({ plants, onToggleStock }) => {
  return (
    <div>
      <h2>Plants</h2>
      <ul className="cards">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} onToggleStock={onToggleStock} />
        ))}
      </ul>
    </div>
  );
};

export default PlantList;
