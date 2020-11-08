import React from 'react';
import './styles/App.scss';
import { Link } from 'react-router-dom'  

function App() {

  return (
    <div className="App">
      <Link to="/Login">Login</Link>  
      <div>ELO</div>
    </div>
  );
}

export default App;
