import React from "react";
import Navigation from "../components/Navigation";
import ID from "../app/features/actions/getID";
import "../styles/Settings.scss";
const axios = require("axios");

const _name = (arg: any) => {
  const id = document.getElementById("id_container")?.innerHTML;
  axios
    .post("/api/acc/edit", {
      acc_id: `${id}`,
      name: `${arg}`,
    })
    .catch((error: any) => {
      console.error(error);
    });
};
const _password = (arg0: any, arg1: any) => {
  const id = document.getElementById("id_container")?.innerHTML;
  if (arg0 === arg1) {
    axios
      .post("/api/acc/editPass", {
        acc_id: `${id}`,
        password: `${arg0}`,
      })
      .catch((error: any) => {
        console.error(error);
      });
    (document.getElementById("feedbackBox") as HTMLDivElement).innerHTML =
      "password changed!";
  } else {
    (document.getElementById("feedbackBox") as HTMLDivElement).innerHTML =
      "passwords no matching!";
  }
};
const _delete = () => {
  const id = document.getElementById("id_container")?.innerHTML;
  axios
    .post("/api/acc/delete", {
      acc_id: `${id}`,
    })
    .catch((error: any) => {
      console.error(error);
    });
};

class Settings extends React.Component {
  render() {
    return (
      <div className="settings">
        <Navigation />
        <span id="id_container">
          <ID />
        </span>
        <div className="wrapper">
          <div>
            <div className="label">change name</div>
            <input type="text" placeholder="new nick" id="newName" />
            <button
              onClick={() => {
                _name(
                  (document.getElementById("newName")! as HTMLInputElement)
                    .value
                );
              }}
            >
              change
            </button>
          </div>
          <div>
            <div className="label">change password</div>
            <input
              id="newPassword--0"
              type="password"
              placeholder="new password"
            />
            <input id="newPassword--1" type="password" placeholder="again" />
            <div id="feedbackBox" className="mess"></div>
            <button
              onClick={() => {
                _password(
                  (document.getElementById(
                    "newPassword--0"
                  )! as HTMLInputElement).value,
                  (document.getElementById(
                    "newPassword--1"
                  )! as HTMLInputElement).value
                );
              }}
            >
              change
            </button>
          </div>
          <div>
          <div className="label">delete account</div>
            <button
              onClick={() => {
                _delete();
              }}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
