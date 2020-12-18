import React from "react";
import Navigation from "../components/Navigation";
import ID from "../app/features/actions/getID";
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
const _password = (arg: any) => {
  const id = document.getElementById("id_container")?.innerHTML;
  axios
    .post("/api/acc/editPass", {
      acc_id: `${id}`,
      password: `${arg}`,
    })
    .catch((error: any) => {
      console.error(error);
    });
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
      <div className="App">
        <Navigation />
        <span id="id_container">
          <ID />
        </span>
        <div>
          <div>
            change name
            <input type="text" id="newName" />
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
            change password
            <input id="newPassword" type="text" placeholder="new password" />
            <input type="text" />
            <button
              onClick={() => {
                _password((document.getElementById("newPassword")! as HTMLInputElement)
                .value);
              }}
            >
              change
            </button>
          </div>
          <div>
            delete account{" "}
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
