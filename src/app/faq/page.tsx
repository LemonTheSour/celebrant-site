import { Metadata } from "next";
import Question from "../components/question";
import QAData from "../Data/questions.json";
export const metadata: Metadata = {
  title: "Frequently Asked Questions",
};

export default function Faq() {
  return (
    <div className="flex flex-col h-screen items-center">
      <div className="pt-10">
        <p>
          The best way to find all the answers you need is to ask directly!
          Until we get a chance to chat, here's a few things to help you get
          started!
        </p>
      </div>
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
  );
}
