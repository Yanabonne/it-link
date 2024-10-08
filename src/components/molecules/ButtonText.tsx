import React, { ButtonHTMLAttributes } from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

type ButtonTextProps = {
  children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function ButtonText(props: ButtonTextProps) {
  console.log(`${props.children}`);
  return (
    <Button {...props}>
      <Text>{props.children}</Text>
    </Button>
  );
}

export default ButtonText;
