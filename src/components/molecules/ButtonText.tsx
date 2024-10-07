import React, { memo, ButtonHTMLAttributes } from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

type ButtonTextProps = {
  children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function ButtonText(props: ButtonTextProps) {
  return (
    <Button {...props}>
      <Text>{props.children}</Text>
    </Button>
  );
}

export default memo(ButtonText);
