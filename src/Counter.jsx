import { useReducer, useState } from "react";

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET",
  CHANGE_COUNT: "CHANGE_COUNT",
};
const reducer = (count, action) => {
  switch (action.type) {
    case ACTIONS.DECREMENT:
      return count - 1;
    case ACTIONS.INCREMENT:
      return count + 1;
    case ACTIONS.RESET:
      return 0;
    case ACTIONS.CHANGE_COUNT:
      return count + action.payload.value;
    default:
      return count;
  }
};

const Counter = ({ initialCount = 0 }) => {
  const [count, dispath] = useReducer(reducer, initialCount);

  return (
    <div>
      <button onClick={() => dispath({ type: ACTIONS.DECREMENT })}>-</button>
      {count}
      <button onClick={() => dispath({ type: ACTIONS.INCREMENT })}>+</button>
      <button onClick={() => dispath({ type: ACTIONS.RESET })}>RESET</button>
      <button
        onClick={() =>
          dispath({ type: ACTIONS.CHANGE_COUNT, payload: { value: 5 } })
        }
      >
        +5
      </button>
    </div>
  );
};

export default Counter;
