import React, { useState } from "react";

function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(plant.inStock !== false);

  const handleClick = () => {
    setInStock((prevStock) => !prevStock);
  };

  const formattedPrice = typeof plant.price === "number" ? plant.price : "N/A";

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {formattedPrice}</p>
      {inStock ? (
        <button className="primary" onClick={handleClick}>
          In Stock
        </button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
