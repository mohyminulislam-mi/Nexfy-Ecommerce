"use client";
import React from "react";
import { Clock } from "lucide-react";
import Product from "@/app/products/_components/Cards/Product";

async function getPosts() {
  const res = await fetch("https://nex-server-one.vercel.app/discounted", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const products = await getPosts();

export default function EcommerceHomepage() {
  return (
    <div className="bg-gray-50">
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Clock className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold">Flash Deals - Limited Time!</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
