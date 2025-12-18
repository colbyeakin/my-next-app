"use client"
import React, { useState } from "react";
import Image from "next/image";

interface InfoCardProps {
  title: string;
  images: string[];
  description: string;
}

export default function InfoCard({ title, images, description }: InfoCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">

      {/* Carousel */}
      <div className="relative w-full md:w-[480px] mx-auto aspect-[16/9] overflow-hidden rounded-lg shadow-md">
        {images.map((imgSrc, index) => (
          <Image
            key={index}
            src={imgSrc}
            alt={`${title} image ${index + 1}`}
            fill
            className={`object-cover transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <button
          onClick={() => setCurrentIndex((i) => (i - 1 + images.length) % images.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded"
        >
          ‹
        </button>

        <button
          onClick={() => setCurrentIndex((i) => (i + 1) % images.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded"
        >
          ›
        </button>
      </div>

      {/* Text */}
      <div className="flex-1 space-y-3">
        <h2 className="text-2xl font-bold">{title}</h2>

        {description.split("\n\n").map((para, idx) => (
          <p key={idx} className="text-gray-700 leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}
