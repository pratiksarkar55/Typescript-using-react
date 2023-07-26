import React, { useCallback, useReducer } from "react";
interface ActionType {
  type: string;
  payload: {
    id: number;
    text?: string;
  };
}
type StateType = { id: number; text: string }[] | Array<any>;
const callback = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((v) => v.id !== action.payload.id);
    default:
      return state;
  }
};
const TodoApp = () => {
  const [toDOs, dispatch] = useReducer<
    (state: StateType, action: ActionType) => StateType
  >(callback, []);
  return (
    <div>
      {toDOs?.map((toDo) => {
        return (
          <div key={toDo.id}>
            <div>{toDo.text}</div>
            <button
              onClick={() => {
                dispatch({ type: "DELETE", payload: { id: toDo.id } });
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button
        onClick={() => {
          dispatch({
            type: "ADD",
            payload: {
              id: toDOs.length + 1,
              text: "One " + (toDOs.length + 1),
            },
          });
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TodoApp;
