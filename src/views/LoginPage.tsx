import React from "react";
import { Link } from "react-router-dom";
import Log from "../app/features/actions/LogIn";
import "../styles/LoginPage.scss";
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
          const mess = (document.getElementById("message1") as HTMLDivElement);
          mess.innerHTML= "That name exist!Find another one!"
        }
      })
      .catch((error: any) => {
        console.error(error);
      });
  } else {
    const mess = (document.getElementById("message1") as HTMLDivElement);
    mess.innerHTML= "Passwords are diffrent!"
  }
};

class login extends React.Component {
  render() {
    return (
      <div className="app">
        <Link className="link" to="/">
          Back to HomePage
        </Link>
        <div>
          <div>
            <div>
              LOGIN
              <Log />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div>SING UP</div>
              <input placeholder="login" id="sName" />
              <br />
              <input placeholder="password" id="sPass0" />
              <br />
              <input placeholder="reapeat password" id="sPass1" />
              <br />
              <div id="message1"></div>
              <button
                onClick={() => {
                  singUp();
                }}
              >
                Sing Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default login;
