import React, { memo } from "react";
import Button from "../atoms/Button";

type ButtonTextProps = {
  onClick: () => void;
  label: string;
  buttonClass: string;
};

function ButtonText({ onClick, label, buttonClass }: ButtonTextProps) {
  return <Button label={label} onClick={onClick} buttonClass={buttonClass} />;
}

export default memo(ButtonText);
