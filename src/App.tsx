import React from 'react';
import './styles/App.scss';
import { Link } from 'react-router-dom'  
import Action from './app/features/actions';

function App() {

  return (
    <div className="App">
      <Link to="/login">Login</Link>  
      <div>ELO</div>
      <Action/>
    </div>
  );
}

export default App;
