import React from "react";
import { useReducer } from "react";

const ACTIONS = {
  UPDATE_INPUT: "UPDATE_INPUT",
  ADD_TASK: "ADD_TASK",
  DELETE_TASK: "DELETE_TASK",
  RESET: "RESET",
};

const reducer = (state, action) => {
  console.log({ state, action });
  switch (action.type) {
    case ACTIONS?.UPDATE_INPUT:
      return { ...state, title: action.payload.title };
    case ACTIONS.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { title: state.title, isCompleted: false }],
        title: "",
      };
    case ACTIONS.DELETE_TASK:
      return {
        ...state,
        tasks: state?.tasks?.filter(
          (cur) => cur.title !== action.payload.title
        ),
      };
    default:
      return state;
  }
};
const ToDoList = () => {
  const [state, dispatch] = useReducer(reducer, {
    title: "",
    tasks: [],
  });
  //   console.log(state);
  return (
    <div>
      <h1>To Do List</h1>
      <input
        type="text"
        value={state?.title}
        onChange={(e) =>
          dispatch({
            type: ACTIONS.UPDATE_INPUT,
            payload: {
              title: e.target.value,
              isCompleted: false,
            },
          })
        }
      />
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.ADD_TASK,
          })
        }
      >
        Add state
      </button>
      <ul>
        {state.tasks.map((task, index) => (
          <li key={index}>
            {task.title}
            <input
              type="checkbox"
              onChange={() =>
                dispatch({
                  type: ACTIONS.DELETE_TASK,
                  payload: { title: task.title },
                })
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
