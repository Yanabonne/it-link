import { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  label: ReactNode;
}

export default function Button({ onClick, label }: ButtonProps) {
  return (
    <button className="counter__button" onClick={onClick}>
      {label}
    </button>
  );
}
