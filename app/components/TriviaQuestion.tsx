import React from "react";

interface TriviaQuestionProps {
    question: string;
    options: string[];
    selected?: string;
    onSelect: (option: string) => void;
}

export default function TriviaQuestion({
    question,
    options,
    selected,
    onSelect,
}: TriviaQuestionProps) {
  return (
    <div className="bg-white/10 p-6 rounded-2xl shadow-lg mb-6">
      <h3 className="text-xl font-semibold mb-4">{question}</h3>

      <div className="grid gap-3">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`
              p-3 rounded-xl text-left border transition 
              ${
                selected === option
                  ? "bg-[#1e3a8a] border-blue-400 text-white"
                  : "bg-white/5 border-white/20 hover:bg-[#274bbf]/20"
              }
            `}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}