import React from 'react'
import './App.css';
import Child from './child'
import {TransectionProvider} from './transContext'

function App() {
  return (
    <div className="App">
      <Child />
    </div>
  );
}

export default App;
