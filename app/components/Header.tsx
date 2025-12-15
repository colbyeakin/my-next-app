"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [hovered, setHovered] = useState<string | null>(null);

  const links = [
    { name: "Home", href: "/" },
    { name: "Trivia", href: "/trivia" },
  ];

  return (
    <header className="w-full bg-[#0a1a4a] text-yellow-200 py-6 shadow-xl border-b-4 border-yellow-400">
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        {/* Mickey-inspired decorative line */}
        <div className="flex items-center gap-3 mb-3">
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold tracking-wide text-yellow-300 drop-shadow-lg font-[Cinzel]">
          The Magical History of Disney Parks
        </h1>

        {/* Subtext */}
        <p className="text-yellow-200 text-lg mt-1 italic tracking-wide mb-4">
          “Where imagination builds the world”
        </p>

        {/* NAVIGATION BAR */}
        <nav className="mt-2">
          <ul className="flex gap-10 text-xl font-semibold tracking-wide">
            {links.map((link) => (
              <li key={link.name} className="relative">
                <Link
                  href={link.href}
                  onMouseEnter={() => setHovered(link.name)}
                  onMouseLeave={() => setHovered(null)}
                  className="transition-all duration-300 hover:text-yellow-300"
                >
                  {link.name}
                </Link>

                {/* Magical underline sparkle */}
                <span
                  className={`
                    absolute left-1/2 -bottom-1 h-[3px] rounded-full bg-yellow-300 transition-all duration-500
                    ${hovered === link.name ? "w-full -translate-x-1/2 opacity-100" : "w-0 opacity-0"}
                  `}
                ></span>

                {/* Floating sparkle animation */}
                {hovered === link.name && (
                  <span className="absolute -top-2 left-[40%] w-2 h-2 bg-yellow-300 rounded-full animate-ping"></span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
