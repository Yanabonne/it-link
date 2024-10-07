import React from "react";
import { useCounterContext } from "../organisms/Counter";
import Counter from "../organisms/Counter";

export default function CounterView() {
  const { count, increment, decrement } = useCounterContext();

  return (
    <Counter count={count} onIncrement={increment} onDecrement={decrement} />
  );
}
