import React from "react";
import { Star, MapPin, MessageSquareQuote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mohyminul Islam",
      rating: 5,
      text: "Amazing quality and fast shipping! The customer service team was incredibly helpful.",
      location: "Birampur, Bangladesh",
    },
    {
      name: "Michael Modhu",
      rating: 5,
      text: "Best online shopping experience I've had. Products exactly as described.",
      location: "Badda, USA",
    },
    {
      name: "Emma Akhter",
      rating: 4,
      text: "Great variety of products and competitive prices. Will definitely shop again!",
      location: "Mirpur, UK",
    },
  ];
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-black text-3xl font-bold text-center mb-10">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md">
              <svg
                width="44"
                height="40"
                viewBox="0 0 44 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.172 5.469q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 26.539 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.923-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203m-20.625 0q2.555 0 4.547 1.547a7.4 7.4 0 0 1 2.695 4.007q.47 1.711.469 3.61 0 2.883-1.125 5.86a22.8 22.8 0 0 1-3.094 5.577 33 33 0 0 1-4.57 4.922A35 35 0 0 1 5.914 35l-3.398-3.398q5.296-4.243 7.218-6.563 1.946-2.32 2.016-4.617-2.86-.329-4.781-2.461-1.922-2.133-1.922-4.992 0-3.117 2.18-5.297 2.202-2.203 5.32-2.203"
                  fill="#9810fa"
                />
              </svg>
              <div className="flex items-center gap-1 mb-4 mt-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">{testimonial.text}</p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center font-bold text-purple-600">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-black font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
