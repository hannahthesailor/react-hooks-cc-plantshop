// NewPlantForm.js

import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: "", // Keep price as a string
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlant({
      ...newPlant,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert the price to a string
    const newPlantWithPriceAsString = {
      ...newPlant,
      price: newPlant.price.toString(),
    };

    // Call the onAddPlant function with the updated plant data
    await onAddPlant(newPlantWithPriceAsString);

    // Clear the form after submission
    setNewPlant({ name: "", image: "", price: "" });
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={newPlant.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newPlant.image}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={newPlant.price}
          onChange={handleInputChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
