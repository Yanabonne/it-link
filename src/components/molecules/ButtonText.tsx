import React, { memo } from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

type ButtonTextProps = {
  onClick: () => void;
  label: string;
  buttonClass: string;
};

function ButtonText({ onClick, label, buttonClass }: ButtonTextProps) {
  return (
    <Button onClick={onClick} buttonClass={buttonClass}>
      <Text text={label} />
    </Button>
  );
}

export default memo(ButtonText);
