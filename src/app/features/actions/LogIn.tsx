import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, setName,setID } from "../action";
const axios = require("axios");

export default function Log() {
  const dispatch = useDispatch();
  let history = useHistory();
  return (
    <div>
      <input placeholder="login" id="lName"></input><br/>
      <input placeholder="password" id="lPassword"></input><br/>
      <div id="message" className="mess"></div>
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
              return res.data;
            })
            .then((res: string) => {
              try{
              if (Number(JSON.parse(res[0])) === 1) {
                dispatch(setID(Number(JSON.parse(res[1]))))
                dispatch(setToken());
                dispatch(
                  setName(
                    (document.getElementById("lName") as HTMLInputElement).value
                  )
                );
                history.push("/Main");
              }}catch{
                const mess = (document.getElementById("message") as HTMLDivElement);
                mess.innerHTML= "Bad name or password!"
              }
            })
            .catch((error: any) => {
              console.error(error);
            });
        }}
      >
        Login
      </button>
    </div>
  );
}
