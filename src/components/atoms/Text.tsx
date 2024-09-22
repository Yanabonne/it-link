interface TextProps {
  text: number;
}

export default function Text({ text }: TextProps) {
  return <span>{text}</span>;
}
