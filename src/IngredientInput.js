import React, { useState } from 'react';
import './IngredientInput.css';

const IngredientInput = () => {
  const [ingredients, setIngredients] = useState('');

  const handleInputChange = (event) => {
    setIngredients(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted ingredients:", ingredients);
    // Here you would call your backend API to process the ingredients
  };

  return (
    <div className="ingredient-input-container">
      <h2>Check for Adulterants</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ingredients}
          onChange={handleInputChange}
          placeholder="Enter ingredients separated by commas"
          className="ingredient-input"
        />
        <button type="submit" className="submit-button">Check Ingredients</button>
      </form>
    </div>
  );
};

export default IngredientInput;
