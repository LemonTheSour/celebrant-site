import { Metadata } from "next";
import Question from "../components/question";
import QAData from "../Data/questions.json";
export const metadata: Metadata = {
  title: "Frequently Asked Questions",
};

export default function Faq() {
  return (
    <div className="flex h-screen justify-center bg-photo5">
      <div className="flex flex-col h-auto items-center bg-white border-sunset border-4 p-10 mt-20">
        <div className="text-6xl">Frequently Asked Questions</div>
        <div className="flex flex-col items-center pt-10">
          {QAData.map((questions) => (
            <Question
              key={questions.key}
              Question={questions.question}
              Answer={questions.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
