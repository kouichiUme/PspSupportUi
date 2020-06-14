import React from 'react';
import logo from './logo.svg';
import LineChart from './LineChart'


import './App.css';

const data = [
  [{ x: 0, y: 6 }, { x: 1, y: 9 }, { x: 2, y: 6 },
  { x: 3, y: 5 }, { x: 4, y: 2 }, { x: 6, y: 4 },
  { x: 7, y: 2 }, { x: 8, y: 5 }, { x: 9, y: 2 }]
];

function App() {
  return (
    <div className="App">
      <LineChart data={data} />
    </div>
  );
}

export default App;
