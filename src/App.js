import React from 'react';
import './App.css';
import PlateauPanel from './PlateauPanel';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <PlateauPanel plateauHeight={5} plateauWidth={5}/>

      </header>
    </div>
  );
}

export default App;
