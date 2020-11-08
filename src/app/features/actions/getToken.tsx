import { useSelector } from "react-redux";
import { token } from "../action";

export default function Token() {
  const x = useSelector(token)
  return x;
}
