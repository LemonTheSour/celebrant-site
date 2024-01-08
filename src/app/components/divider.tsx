export interface dividerProps {
  text: String;
}

export default function Divier({ text }: dividerProps) {
  return (
    <div className="flex items-center justify-center bg-sunset h-24 w-full z-10">
      <div>{text}</div>
    </div>
  );
}
