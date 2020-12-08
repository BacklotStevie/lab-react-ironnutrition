import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodList from './foodlist/foodlist'

function App() {
  return (
    <div>
      <FoodList />
    </div>
  );
}

export default App;
