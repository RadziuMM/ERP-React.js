import React from "react";
import { Link } from "react-router-dom";
import Log from "../app/features/actions/LogIn";

class login extends React.Component {

  render() {
    return (
      <div className="App">
        <Link to="/">Home</Link>
        <Log />
      </div>
    );
  }
}
export default login;
