import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Action from '../app/features/actions';

function LogIn() {
  let history = useHistory();

  function handleClick() {
    history.push("/main");
  }

  return (
    <button type="button" onClick={handleClick}>
      LogIn
    </button>
  );
}
class login extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Link to="/">Home</Link>
        <Action/>
        <LogIn/>
      </div>
    );
  }
}
export default login
