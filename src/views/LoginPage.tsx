import React from "react";
import { Link } from "react-router-dom";
import Log from "../app/features/actions/LogIn";
const axios = require("axios");

const singUp = () => {
  const name = (document.getElementById("sName") as HTMLInputElement).value;
  const pass0 = (document.getElementById("sPass0") as HTMLInputElement).value;
  const pass1 = (document.getElementById("sPass1") as HTMLInputElement).value;
  if (pass0 === pass1) {
    axios
      .post("/api/acc/add", {
        name: `${name}`,
        password: `${pass0}`,
      })
      .then((res: { statusCode: any; data: any }) => {
        console.log(`statusCode: ${res.statusCode}`);
        return res.data;
      })
      .then((res: string) => {
        if (Number(JSON.parse(res)) === 1) {
          alert("Account successful created!");
        } else {
          alert("That name exist!Find another one!");
        }
      })
      .catch((error: any) => {
        console.error(error);
      });
  } else {
    alert("passwords are difrent");
  }
};

class login extends React.Component {
  render() {
    return (
      <div className="App">
        <Link to="/">Home</Link>
        <div> LOGIN </div>
        <Log />
        <div>Sing up</div>
        <input id="sName" />
        <input id="sPass0" />
        <input id="sPass1" />
        <button
          onClick={() => {
            singUp();
          }}
        >
          Sing Up
        </button>
      </div>
    );
  }
}
export default login;
