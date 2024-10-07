import { ReactNode } from "react";

type ButtonProps = {
  onClick: () => void;
  label: ReactNode;
  buttonClass: string;
};

export default function Button({ onClick, label, buttonClass }: ButtonProps) {
  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
}
