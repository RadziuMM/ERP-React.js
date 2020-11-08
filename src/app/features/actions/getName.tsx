import { useSelector } from "react-redux";
import { name } from "../action";

export default function Name() {
  return useSelector(name)
}
