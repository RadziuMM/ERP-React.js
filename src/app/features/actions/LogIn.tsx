import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, setName } from "../action";

export default function Log() {
  const dispatch = useDispatch();
  let history = useHistory();
  return (
    <div>
         <input id='name'></input>
      <button
        onClick={() => {
          dispatch(setToken());
          dispatch(setName((document.getElementById('name') as HTMLInputElement).value));
          history.push("/Main");
        }}
      >
        x
      </button>
    </div>
  );
}
