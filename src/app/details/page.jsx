"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { toast } from "react-toastify";
import { useForm, Controller } from "react-hook-form";
import { format } from "date-fns";
import { Star } from "lucide-react";
import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";
import Rating from "react-rating";

// Mock auth hook - replace with your actual auth implementation
const useAuth = () => {
  return {
    user: {
      photoURL: "https://i.ibb.co/vxmbWxr3/Mohyminul-Islam-small.png",
      displayName: "John Doe",
      email: "john.doe@example.com",
    },
  };
};

const ProductDetails = () => {
  const params = useParams();
  const id = params?.id;
  const { user } = useAuth();

  const product = {
    name: "Nike Pegasus 41 shoes",
    category: "Sports",
    price: 189,
    offerPrice: 159,
    rating: 4,
    images: [
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png",
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png",
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage4.png",
    ],
    description: [
      "High-quality material",
      "Comfortable for everyday use",
      "Available in different sizes",
    ],
    descriptions:
      "This is a high-performance running shoe designed for comfort and durability. Perfect for both casual runners and serious athletes.",
  };

  const reviewsData = [
    {
      id: "693afc36e0aff7645668c9cc",
      userName: "Md. Mohyminul Islam",
      userEmail: "mohyminulislam2001@gmail.com",
      UserPhoto: "https://i.ibb.co/vxmbWxr3/Mohyminul-Islam-small.png",
      text: "Great product! Highly recommended.",
      rating: 5,
      createdAt: new Date("2025-01-11T17:15:34.360Z"),
    },
  ];

  const [thumbnail, setThumbnail] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // react-hook-form setup
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      text: "",
      rating: 0,
    },
  });

  const handleCustomerReviews = (data) => {
    console.log("Review submitted:", data);
    toast.success("Review submitted successfully!");
    reset();
  };

  const handleQuantityChange = (action) => {
    if (action === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    toast.success("Added to cart!");
  };

  const handleBuyNow = () => {
    toast.info("Redirecting to checkout...");
  };

  return (
    <section className="bg-white">
      <div className=" max-w-6xl w-full px-6 mx-auto py-8">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-600">
          <Link href="/" className="hover:text-indigo-500">
            Home
          </Link>
          {" / "}
          <Link href="/products" className="hover:text-indigo-500">
            Products
          </Link>
          {" / "}
          <span>{product.category}</span>
          {" / "}
          <span className="text-indigo-500">{product.name}</span>
        </p>

        {/* Product Section */}
        <div className="flex flex-col md:flex-row gap-16 mt-4">
          {/* Image Gallery */}
          <div className="flex gap-3">
            <div className="flex flex-col gap-3">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setThumbnail(image)}
                  className={`border max-w-24 rounded overflow-hidden cursor-pointer transition ${
                    thumbnail === image
                      ? "border-indigo-500 border-2"
                      : "border-gray-500/30"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="border border-gray-500/30 max-w-md rounded overflow-hidden">
              <img
                src={thumbnail}
                alt="Selected product"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="text-sm w-full md:w-1/2">
            <h1 className="text-3xl font-medium">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-0.5 mt-1">
              {Array(5)
                .fill("")
                .map((_, i) =>
                  product.rating > i ? (
                    <svg
                      key={i}
                      width="14"
                      height="13"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L9.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L4.78 10.99a1 1 0 0 0-.363-1.118L1.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z"
                        fill="#615fff"
                      />
                    </svg>
                  ) : (
                    <svg
                      key={i}
                      width="14"
                      height="13"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.04894 0.927049C8.3483 0.00573802 9.6517 0.00574017 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z"
                        fill="#615fff"
                        fillOpacity="0.35"
                      />
                    </svg>
                  )
                )}
              <p className="text-base ml-2">({product.rating})</p>
            </div>

            {/* Price */}
            <div className="mt-6">
              <p className="text-gray-500/70 line-through">
                MRP: ${product.price}
              </p>
              <p className="text-2xl font-medium">MRP: ${product.offerPrice}</p>
              <span className="text-gray-500/70">(inclusive of all taxes)</span>
            </div>

            {/* Description */}
            <p className="text-base font-medium mt-6">About Product</p>
            <ul className="list-disc ml-4 text-gray-500/70">
              {product.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>

            {/* Quantity Selector */}
            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={() => handleQuantityChange("decrement")}
                className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-100 transition"
              >
                -
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increment")}
                className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-100 transition"
              >
                +
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center mt-10 gap-4 text-base">
              <button
                onClick={handleAddToCart}
                className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition rounded"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="w-full py-3.5 cursor-pointer font-medium bg-indigo-500 text-white hover:bg-indigo-600 transition rounded"
              >
                Buy now
              </button>
            </div>
          </div>
        </div>

        {/* Review Section */}
        <div className="py-10 lg:p-6">
          <h3 className="text-xl font-semibold mb-2">Reviews</h3>
          <div className="space-y-2">
            <Tabs>
              {/* Tab Menu */}
              <TabList className="flex gap-3 border-b-0">
                <Tab
                  selectedClassName="bg-orange-600 text-white"
                  className="bg-orange-200 mt-3 text-orange-600 py-2.5 px-3.5 rounded hover:bg-orange-600 hover:text-white transition-colors cursor-pointer"
                >
                  Descriptions
                </Tab>
                <Tab
                  selectedClassName="bg-orange-600 text-white"
                  className="bg-orange-200 mt-3 text-orange-600 py-2.5 px-3.5 rounded hover:bg-orange-600 hover:text-white transition-colors cursor-pointer"
                >
                  Customer Reviews
                </Tab>
                <Tab
                  selectedClassName="bg-orange-600 text-white"
                  className="bg-orange-200 mt-3 text-orange-600 py-2.5 px-3.5 rounded hover:bg-orange-600 hover:text-white transition-colors cursor-pointer"
                >
                  Give Review
                </Tab>
              </TabList>

              {/* Descriptions */}
              <TabPanel>
                <div className="mt-5 p-4 bg-gray-50 rounded">
                  <p>{product.descriptions}</p>
                </div>
              </TabPanel>

              {/* Customer Reviews */}
              <TabPanel>
                <div className="mt-5 space-y-3">
                  {reviewsData.length !== 0 ? (
                    reviewsData.map((review, idx) => (
                      <div key={idx} className="p-3 rounded bg-orange-50">
                        <p className="flex items-center gap-2">
                          <FaQuoteLeft className="text-orange-600 text-xl" />
                          {review.text}
                        </p>

                        <div className="flex gap-1 my-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={
                                i < review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>

                        <div className="flex items-center gap-2 mt-5">
                          <div>
                            <img
                              src={review.UserPhoto}
                              alt="User"
                              className="h-12 w-12 rounded-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold">{review.userName}</h4>
                            <span className="text-sm text-gray-600">
                              {format(
                                new Date(review.createdAt),
                                "dd MMM yyyy, hh:mm a"
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No reviews for this product</p>
                  )}
                </div>
              </TabPanel>

              {/* Give Review Form */}
              <TabPanel>
                <form
                  onSubmit={handleSubmit(handleCustomerReviews)}
                  className="mt-5 space-y-4"
                >
                  {/* User Info */}
                  <div className="flex items-center gap-2">
                    <div>
                      <img
                        src={user?.photoURL}
                        alt="User"
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{user?.displayName}</h4>
                      <span className="text-sm text-gray-600">
                        {user?.email}
                      </span>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div>
                    <div className="flex items-center gap-3 mt-5">
                      <span className="font-semibold">Your Rating:</span>
                      <Controller
                        name="rating"
                        control={control}
                        rules={{ required: "Rating is required" }}
                        render={({ field }) => (
                          <Rating
                            initialRating={field.value}
                            onChange={field.onChange}
                            emptySymbol={
                              <MdOutlineStarOutline className="text-orange-600 text-2xl" />
                            }
                            fullSymbol={
                              <MdOutlineStarPurple500 className="text-orange-600 text-2xl" />
                            }
                          />
                        )}
                      />
                    </div>
                    {errors.rating && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.rating.message}
                      </p>
                    )}
                  </div>

                  {/* Review Text */}
                  <div>
                    <textarea
                      className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                      rows={4}
                      placeholder="Write your review..."
                      {...register("text", {
                        required: "Review text is required",
                      })}
                    />
                    {errors.text && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.text.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="bg-orange-600 text-white py-3 px-6 rounded hover:bg-orange-700 transition font-medium"
                  >
                    Give Review
                  </button>
                </form>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
