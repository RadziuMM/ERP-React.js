import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectMovies } from "./storeO";


export default function Movie() {
    const movies = useSelector(selectMovies);
    const dispatch = useDispatch();
  return (
    <div>
       <div>\{movies}\</div> 
      <button onClick={()=>{
          dispatch(increment())
          }
        }>xD</button>
    </div>
  );
}
