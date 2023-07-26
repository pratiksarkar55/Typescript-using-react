import React, { PropsWithChildren } from "react";

import "./App.css";
import TodoApp from "./Todo-using-useReducer/TodoApp";
import Counter from "./VERY-IMPORTANT-PassingState/Counter";

const Heading: React.FunctionComponent<{ title: string; age: number }> = ({
  title,
  age,
}) => {
  return (
    <h2>
      Name is ${title} and age is ${age}
    </h2>
  );
};

const Heading2: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <h2>This is Heading 2 component</h2>;
};

// const Heading2: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
//   return <h2>{children}</h2>;
// };

function App() {
  return (
    <>
      {/* <Heading title={"Hello"} age={20} />
      <Heading2>
        <div>Children 1</div>
      </Heading2> */}
      {/* <TodoApp /> */}
      <Counter />
    </>
  );
}

export default App;
