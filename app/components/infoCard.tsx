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

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex gap-8 items-start">
      
      {/* LEFT SIDE — Smaller Carousel */}
      <div className="relative w-120 aspect-[16/9] overflow-hidden rounded-lg shadow-md">
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

        {/* Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded"
        >
          ‹
        </button>

        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded"
        >
          ›
        </button>
      </div>

      {/* RIGHT SIDE — Text */}
      <div className="flex-1 space-y-2">
        <h2 className="text-2xl font-bold">{title}</h2>

        {description
          .split("\n\n")
          .map((para, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed">
              {para}
            </p>
          ))}
      </div>
    </div>
  );
}
