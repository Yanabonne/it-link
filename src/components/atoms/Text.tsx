type TextProps = {
  text: string;
};

export default function Text({ text }: TextProps) {
  return <span>{text}</span>;
}
