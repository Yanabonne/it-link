import React from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

interface ButtonTextProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function ButtonText({
  count,
  onIncrement,
  onDecrement,
}: ButtonTextProps) {
  return (
    <div className="counter">
      <Text text={count} />
      <Button label="Increment" onClick={onIncrement} />
      <Button label="Decrement" onClick={onDecrement} />
    </div>
  );
}
