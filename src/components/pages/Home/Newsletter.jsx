import React from "react";
import Image from "next/image";

const Newsletter = () => {
  return (
    <section className="bg-purple-50 py-14">
      <div className="bg-white md:grid md:grid-cols-2 max-w-4xl mx-4 md:mx-auto rounded-xl">
        <div className="hidden md:block w-full max-w-lg rounded-xl">
          <Image
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/newsletter/image.png"
            alt="Newsletter Image"
            width={300}
            height={300}
            className="rounded-xl"
          />
        </div>
        <div className="relative flex items-center justify-center">
          <div className="max-md:py-20 px-6 md:px-10 text-center">
            <h1 className="text-black text-3xl font-bold">
              Subscribe to our newsletter
            </h1>
            <p className="mt-4 text-gray-500">
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>
            <form className="mt-8 flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full outline-none rounded-l-md border border-r-0 border-gray-300 px-4 py-3 text-gray-900"
              />
              <button
                type="submit"
                className="rounded-r-md bg-purple-600 px-3 py-2 text-white cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
