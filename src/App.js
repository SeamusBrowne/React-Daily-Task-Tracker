import React from 'react';
import Column from './Column';
import Countdown from './Countdown';

function App() {
  return (
    <div className="App">
      <h1>Daily Task Tracker</h1>
      <Countdown />
      <Column />
    </div>
  );
}

export default App;
