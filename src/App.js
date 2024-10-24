import React from 'react';
import './IngredientInput.css';
import IngredientInput from './IngredientInput'; // Import the IngredientInput component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Food Fraud Detection System</h1>
        <IngredientInput />  {/* Include the IngredientInput component here */}
      </header>
    </div>
  );
}

export default App;
