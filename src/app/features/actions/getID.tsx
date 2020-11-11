import { useSelector } from "react-redux";
import { id } from "../action";

export default function ID() {
  const x = useSelector(id)
  return x;
}
