export interface QuestionProps {
  Question: String;
  Answer: String;
}

export default function Question({ Question, Answer }: QuestionProps) {
  return (
    <div className="w-1/2">
      <div className="bg-slate-400 text-5xl pl-10">{Question}</div>
      <div className="bg-slate-200 text-3xl pl-10">{Answer}</div>
    </div>
  );
}
