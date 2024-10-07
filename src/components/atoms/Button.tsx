import { ReactNode } from "react";

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
  buttonClass: string;
};

export default function Button({
  onClick,
  children,
  buttonClass,
}: ButtonProps) {
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}
