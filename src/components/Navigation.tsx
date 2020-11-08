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
      if (document.getElementById("xD")?.innerHTML === undefined) {
        setTimeout(()=>{checkToken()},100)
      } else {
        if(Number(document.getElementById("xD")?.innerHTML) === 0){
          console.log('xd')
          console.log('token test: failed!')
          window.location.href = "/"; 
        } else { console.log('token test: passed!')}
      }
    };
    checkToken();
    return (
      <nav className="App">
        <span id="xD">
          <Token />
        </span>
        <Routes />
      </nav>
    );
  }
}

export default Navigation;
