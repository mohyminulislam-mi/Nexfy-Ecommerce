import { Heart, Star } from "lucide-react";
import React from "react";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 129.99,
      rating: 4.5,
      image: "🎧",
      reviews: 234,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 299.99,
      rating: 4.8,
      image: "⌚",
      reviews: 567,
    },
    {
      id: 3,
      name: "Designer Bag",
      price: 89.99,
      rating: 4.6,
      image: "👜",
      reviews: 189,
    },
    {
      id: 4,
      name: "Running Shoes",
      price: 159.99,
      rating: 4.7,
      image: "👟",
      reviews: 421,
    },
    {
      id: 5,
      name: "Shoes",
      price: 159.99,
      rating: 4.7,
      image: "👟",
      reviews: 421,
    },
  ];
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <a href="#" className="text-purple-600 hover:underline">
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition group"
            >
              <div className="bg-linear-to-br from-purple-100 to-pink-100 h-48 flex items-center justify-center text-6xl relative">
                {product.image}
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-sm text-gray-600">
                    {product.rating}
                  </span>
                  <span className="ml-1 text-sm text-gray-400">
                    ({product.reviews})
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-purple-600">
                    ${product.price}
                  </span>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
