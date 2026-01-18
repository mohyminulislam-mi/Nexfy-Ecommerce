"use client";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function ItemsPage() {
  const router = useRouter();

  const logout = () => {
    Cookies.remove("isLoggedIn");
    router.push("/login");
  };
  // --- forms --- details
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Product Details Form
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Slug */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Slug
            </label>
            <input
              {...register("slug", { required: "Slug is required" })}
              placeholder="premium-wireless-headphones"
              className={`w-full mt-1 p-3 border rounded-lg focus:ring-2 outline-none transition ${errors.slug ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"}`}
            />
            {errors.slug && (
              <p className="text-red-500 text-xs mt-1">{errors.slug.message}</p>
            )}
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Product Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Premium Wireless Headphones"
              className={`w-full mt-1 p-3 border rounded-lg focus:ring-2 outline-none transition ${errors.name ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"}`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700">
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              rows="3"
              placeholder="Enter product description..."
              className={`w-full mt-1 p-3 border rounded-lg focus:ring-2 outline-none transition ${errors.description ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"}`}
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Price ($)
            </label>
            <input
              type="number"
              step="0.01"
              {...register("price", { required: "Price is required" })}
              className={`w-full mt-1 p-3 border rounded-lg focus:ring-2 outline-none transition ${errors.price ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"}`}
            />
            {errors.price && (
              <p className="text-red-500 text-xs mt-1">
                {errors.price.message}
              </p>
            )}
          </div>

          {/* Original Price */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Original Price ($)
            </label>
            <input
              type="number"
              step="0.01"
              {...register("originalPrice", {
                required: "Original Price is required",
              })}
              className={`w-full mt-1 p-3 border rounded-lg focus:ring-2 outline-none transition ${errors.originalPrice ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"}`}
            />
            {errors.originalPrice && (
              <p className="text-red-500 text-xs mt-1">
                {errors.originalPrice.message}
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Category
            </label>
            <select
              {...register("category", { required: "Category is required" })}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 outline-none"
            >
              <option value="Electronics">Electronics</option>
              <option value="Gadgets">Gadgets</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>

          {/* Brand */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Brand
            </label>
            <input
              {...register("brand", { required: "Brand is required" })}
              placeholder="AudioPro"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>

          {/* Stock & Rating Row */}
          <div className="flex gap-4 items-center">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                {...register("inStock")}
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700 font-semibold">In Stock</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Rating (0-5)
            </label>
            <input
              type="number"
              step="0.1"
              {...register("rating", {
                required: "Rating is required",
                min: 0,
                max: 5,
              })}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>

          {/* Colors (Multi-select) */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Available Colors (Select multiple)
            </label>
            <div className="flex gap-4">
              {["black", "silver", "blue"].map((color) => (
                <label key={color} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={color}
                    {...register("colors", {
                      required: "Select at least one color",
                    })}
                  />
                  <span className="capitalize text-gray-600">{color}</span>
                </label>
              ))}
            </div>
            {errors.colors && (
              <p className="text-red-500 text-xs mt-1">
                {errors.colors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition duration-300 transform hover:scale-[1.02]"
            >
              Update Product Info
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
