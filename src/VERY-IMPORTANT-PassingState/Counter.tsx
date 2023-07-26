import React, { useState } from "react";
import Button from "../Generic/Button";

function useCount(initialValue: number) {
  return useState<number>(initialValue);
}

type UseCountType = ReturnType<typeof useCount>;

const Counter = () => {
  const [count, setCount] = useCount(0);
  return (
    <div>
      <Child count={count} setCount={setCount} />
    </div>
  );
};

const Child: React.FunctionComponent<{
  count: UseCountType[0];
  setCount: UseCountType[1];
}> = ({
  count,
  setCount,
}: {
  count: UseCountType[0];
  setCount: UseCountType[1];
}) => {
  console.log("Child");
  return (
    <div>
      <div>Count is {count}</div>
      <Button
        style={{ color: "red!important" }}
        onClick={() => {
          setCount(count + 1);
        }}
        interfaceProps=""
      >
        Click to increase count
      </Button>
    </div>
  );
};

export default Counter;
