import { Metadata } from "next";
import Question from "../components/question";
import QAData from "../Data/questions.json";
export const metadata: Metadata = {
  title: "Frequently Asked Questions",
};

export default function Faq() {
  return (
    <div className="flex justify-center h-screen bg-photo5 bg-cover">
      <div className="flex flex-col overflow-auto w-4/6 items-center bg-white p-10 mb-10 mt-40">
        <div className="text-4xl">Frequently Asked Questions</div>
        <div className="w-3/4 text-start pt-10">
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
