import React from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

type ButtonTextProps = {
  onClick: () => void;
  label: string;
  buttonClass: string;
};

export default function ButtonText({
  onClick,
  label,
  buttonClass,
}: ButtonTextProps) {
  return <Button label={label} onClick={onClick} buttonClass={buttonClass} />;
}
