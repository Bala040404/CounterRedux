import React from "react";
import { useSelector } from "react-redux";
function Heading() {
  let count = useSelector((state) => {
    return state.abc.count;
  });
  return <div>{count}</div>;
}

export default Heading;
