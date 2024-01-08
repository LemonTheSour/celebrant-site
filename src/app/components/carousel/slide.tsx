export interface slideProps {
  text: String;
  heading: String;
  icon: String;
}

export default function Slide({ text, heading, icon }: slideProps) {
  return (
    <div className="flex min-h-full min-w-full text-white justify-center text-center border-sunset border-2">
      <div className="pt-10 w-5/6">
        <div className="text-6xl pb-12">{heading}</div>
        <div className="text-2xl pb-12">{text}</div>
      </div>
    </div>
  );
}
