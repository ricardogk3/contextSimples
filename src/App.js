import './App.css';
import React, { useState } from 'react';
import Context from './Context';
import Counter from './componentes/Counter';

function App() {
  const [total, setTotal] = useState(0)

  return (
    <Context.Provider value={[total, setTotal]}>
      <div className="App">
        <header className="App-header">
          <div>
            <p>App.js: {total}</p>
            <p> DevMedia Context API</p>
            <Counter /> 
          </div>
        </header>
      </div>
    </Context.Provider>
  );
}

export default App;
