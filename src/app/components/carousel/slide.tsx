export interface slideProps {
  text: String;
}

export default function Slide({ text }: slideProps) {
  return (
    <div className="flex min-h-full min-w-full text-white border-sunset border-2 justify-center items-center">
      <div>{text}</div>
    </div>
  );
}
