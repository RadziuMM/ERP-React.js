import { useSelector } from "react-redux";
import { token } from "../action";

export default function Token() {
  console.log(token)
  return useSelector(token)
}
