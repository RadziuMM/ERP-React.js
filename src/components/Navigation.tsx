import React from "react";
import { useHistory } from "react-router-dom";
import Token from "../app/features/actions/getToken";

function Routes() {
  let history = useHistory();

  function handleClick(arg: Number) {
    if (arg === 0) history.push("/Main");
    if (arg === 1) history.push("/Employes");
    if (arg === 2) history.push("/Files");
    if (arg === 3) history.push("/Events");
    if (arg === 4) history.push("/Settings");
    if (arg === 5) history.push("/");
  }
  return (
    <ul>
      <button type="button" onClick={() => handleClick(0)}>
        Home
      </button>
      <button type="button" onClick={() => handleClick(1)}>
        Employers
      </button>
      <button type="button" onClick={() => handleClick(2)}>
        Files
      </button>
      <button type="button" onClick={() => handleClick(3)}>
        Events
      </button>
      <button type="button" onClick={() => handleClick(4)}>
        Settings
      </button>
      <button type="button" onClick={() => handleClick(5)}>
        Log out
      </button>
    </ul>
  );
}

class Navigation extends React.Component {
  render() {
    const checkToken = () => {
      if (document.getElementById("token")?.innerHTML === undefined) {
        setTimeout(()=>{checkToken()},100)
      } else {
        if(Number(document.getElementById("token")?.innerHTML) === 0){
          window.location.href = "/"; 
        }
      }
    };
    checkToken();
    return (
      <nav className="App">
        <span id="token">
          <Token />
        </span>
        <Routes />
      </nav>
    );
  }
}

export default Navigation;
