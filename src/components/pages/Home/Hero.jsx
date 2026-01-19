"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Summer Collection 2024",
      subtitle: "Up to 50% Off",
      description: "Discover the latest trends in fashion",
      bg: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/dd8c4572135951.5bdceabf1554c.png",
    },
    {
      title: "New Arrivals",
      subtitle: "Just Dropped",
      description: "Be the first to wear the newest styles",
      bg: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/91a31572135951.5bdceabf15b1a.png",
    },
    {
      title: "Premium Quality",
      subtitle: "Luxury Items",
      description: "Experience elegance and comfort",
      bg: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/2fae0a72135951.5bdceabf169d0.png",
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);

  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );

  // Optional: Auto-play functionality
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <section className="relative h-96 md:h-[80vh] overflow-hidden bg-gray-900">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.bg})` }}
        >
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-2xl md:text-3xl mb-2">{slide.subtitle}</p>
              <p className="text-lg md:text-xl mb-6">{slide.description}</p>
              <Link
                href={"/products"}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition text-white"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition text-white"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
