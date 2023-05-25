import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TronGrid } from './components';
import { svgGrid } from './svgs';


function App() {
  return (
    <div className="App">
      <body>
        <TronGrid />
         {/* {svgGrid} */}
      </body>
    </div>
  );
}

export default App;
