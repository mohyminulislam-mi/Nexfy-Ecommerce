import Product from "@/app/products/_components/Cards/Product";
import { Heart, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

async function getPosts() {
  const res = await fetch("https://nex-server-one.vercel.app/featured", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const featuredProducts = await getPosts();

const FeaturedProducts = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-black text-3xl font-bold">Featured Products</h2>
          <Link href="/products" className="text-blue-600 hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
