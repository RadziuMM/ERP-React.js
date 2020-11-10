import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, setName } from "../action";
const axios = require("axios");

export default function Log() {
  const dispatch = useDispatch();
  let history = useHistory();
  return (
    <div>
      <input id="lName"></input>
      <input id="lPassword"></input>
      <button
        onClick={() => {
          const name = (document.getElementById("lName") as HTMLInputElement)
            .value;
          const password = (document.getElementById(
            "lPassword"
          ) as HTMLInputElement).value;

          axios
            .post("/api/acc/check", {
              name: `${name}`,
              password: `${password}`,
            })
            .then((res: { statusCode: any; data: any }) => {
              console.log(`statusCode: ${res.statusCode}`);
              return res.data;
            })
            .then((res: string) => {
              if (Number(JSON.parse(res)) === 1) {
                dispatch(setToken());
                dispatch(
                  setName(
                    (document.getElementById("lName") as HTMLInputElement).value
                  )
                );
                history.push("/Main");
              } else {
                alert("bad name or password!");
              }
            })
            .catch((error: any) => {
              console.error(error);
            });
        }}
      >
        x
      </button>
    </div>
  );
}
