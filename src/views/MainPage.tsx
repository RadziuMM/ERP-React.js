import React from "react";
import GetName from "../app/features/actions/getName";
import Navigation from "../components/Navigation";

class main extends React.Component {
  render() {
    const name = <GetName/>
    return (
      <div className="App">
        <Navigation />
        MainPage
    <div>{name}</div>
      </div>
    );
  }
}

export default main;
