import { HTMLAttributes } from "react";

type TextProps = {
  children: string | number;
} & HTMLAttributes<HTMLSpanElement>;

export default function Text(props: TextProps) {
  return <span {...props}>{props.children}</span>;
}
