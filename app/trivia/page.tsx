"use client";

import React, { useState, useEffect } from "react";
import TriviaQuestion from "@/app/components/TriviaQuestion";
import { triviaQuestions } from "@/app/data/triviaQuestions";
import Confetti from "react-confetti";

export default function TriviaPage() {
  const [answers, setAnswers] = useState<{ [id: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [animateBadge, setAnimateBadge] = useState(false);

  const handleSelect = (id: number, option: string) => {
    setAnswers((prev) => ({ ...prev, [id]: option }));
  };

  const score = triviaQuestions.filter(
    (q) => answers[q.id] === q.answer
  ).length;

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // DISNEY BADGE SYSTEM
  const getBadge = (score: number) => {
    if (score <= 3) {
      return {
        title: "🌱 Apprentice Mouseketeer",
        description:
          "Every great Disney adventure starts with curiosity and a pair of Mickey ears. You’re just beginning your magical journey!",
      };
    }
    if (score <= 7) {
      return {
        title: "🎈 Kingdom Adventurer",
        description:
          "You’ve roamed the parks, braved the queues, and soaked in the stories. You’re well on your way to becoming a true Disney expert!",
      };
    }
    if (score <= 11) {
      return {
        title: "✨ Dreamlight Navigator",
        description:
          "You don’t just visit the Disney parks — you understand their heart. Your imagination guides you like a glowing trail of pixie dust.",
      };
    }
    if (score <= 14) {
      return {
        title: "🌟 Legend of the Parks",
        description:
          "From Main Street to Galaxy’s Edge, you know every detail like it’s part of your very own enchanted map. You’re a true Disney parks legend!",
      };
    }
    return {
      title: "👑🐭 Sorcerer of the Mouse Kingdom",
      description:
        "With wisdom worthy of Walt and magic worthy of Mickey, you’ve achieved the highest honor. The kingdom bows to your Disney mastery!",
    };
  };

  const badge = getBadge(score);

  // Trigger badge animation on reveal
useEffect(() => {
  let timeout: NodeJS.Timeout;

  if (showResults) {
    // Delay slightly to allow the component to mount
    timeout = setTimeout(() => setAnimateBadge(true), 50);
  }

  return () => clearTimeout(timeout);
}, [showResults]);


  return (
    <div className="max-w-3xl mx-auto p-8 text-black">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Disney Parks Trivia
      </h1>

      {/* MICKEY DIVIDER */}
      <div className="flex items-center justify-center gap-6 mb-10">
        <div className="flex-1 h-px bg-gray-300" />
        <div className="relative flex items-center justify-center">
          <div className="w-8 h-8 bg-black rounded-full"></div>
          <div className="absolute -top-2.5 -left-2.5 w-5 h-5 bg-black rounded-full"></div>
          <div className="absolute -top-2.5 -right-2.5 w-5 h-5 bg-black rounded-full"></div>
        </div>
        <div className="flex-1 h-px bg-gray-300" />
      </div>

      {!showResults && (
        <>
          {triviaQuestions.map((q) => (
            <TriviaQuestion
              key={q.id}
              question={q.question}
              options={q.options}
              selected={answers[q.id]}
              onSelect={(option) => handleSelect(q.id, option)}
            />
          ))}

          <button
            onClick={() => setShowResults(true)}
            className="mt-6 w-full bg-[#1e3a8a] py-4 rounded-xl text-lg font-bold hover:bg-[#274bbf] transition text-white"
          >
            Submit Answers
          </button>
        </>
      )}

      {showResults && (
        <div className="text-center mt-10 relative">
          {/* 🎉 CONFETTI */}
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={250}
            gravity={0.2}
            tweenDuration={8000}
          />

          {/* MAGICAL BADGE REVEAL */}
          <div
            className={`inline-block p-6 rounded-2xl bg-white/10 relative
            transform transition-all duration-700
            ${animateBadge ? "scale-110 opacity-100 animate-bounce" : "scale-50 opacity-0"}
            `}
          >
            {/* Sparkles */}
            <span className="absolute top-0 left-1/2 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></span>
            <span className="absolute bottom-0 right-1/3 w-2 h-2 bg-yellow-300 rounded-full animate-ping delay-150"></span>
            <span className="absolute top-1/3 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-ping delay-300"></span>

            <h2 className="text-4xl font-extrabold mb-4">{badge.title}</h2>
            <p className="text-lg text-gray-700">{badge.description}</p>
          </div>

          <button
            className="mt-6 bg-[#1e3a8a] py-4 px-6 rounded-xl hover:bg-[#274bbf] text-white"
            onClick={() => {
              setAnswers({});
              setShowResults(false);
            }}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
