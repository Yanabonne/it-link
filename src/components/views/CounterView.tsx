import React from "react";
import { useCounterContext } from "../organisms/Counter";
import ButtonText from "../molecules/ButtonText";

export default function CounterView() {
  const { count, increment, decrement } = useCounterContext();

  return (
    <ButtonText count={count} onIncrement={increment} onDecrement={decrement} />
  );
}
