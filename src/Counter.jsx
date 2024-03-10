import React from "react";
import { increment, decrement } from "./slices/counterSlice";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  let count = useSelector((state) => state.abc.count);
  let dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
