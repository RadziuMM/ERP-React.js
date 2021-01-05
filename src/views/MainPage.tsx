import React from "react";
import GetName from "../app/features/actions/getName";
import Navigation from "../components/Navigation";
import "../styles/Main.scss";

class main extends React.Component {
  render() {
    const name = <GetName/>
    return (
      <div className="Main">
        <Navigation />
        <div>Hi {name}, welcome in your ERP panel!</div>
      </div>
    );
  }
}

export default main;
