"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const ProductUploadForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      inStock: true,
      tags: [],
      colors: [],
      sizes: [],
    },
  });

  const productName = watch("name");

  // Slug Generation Logic
  useEffect(() => {
    if (productName) {
      const slug = productName
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
      setValue("slug", slug);
    }
  }, [productName, setValue]);

  const onSubmit = (data) => {
    console.log("Final Data for Backend:", data);
    alert("Form Submitted! Check console for JSON.");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-indigo-50 flex items-center justify-center p-4 py-12">
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 w-full max-w-3xl border border-white">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-indigo-900 tracking-tight">
            Product Details
          </h2>
          <p className="text-slate-500 mt-2 font-medium">
            Add premium items to your inventory
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Hidden Slug Field */}
          <input type="hidden" {...register("slug")} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name */}
            <div className="md:col-span-2">
              <label className="text-sm font-bold text-slate-700 ml-1">
                Product Name*
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="e.g. Smart Fitness Watch"
                className={`w-full mt-1 px-4 py-3 rounded-xl border-2 transition-all outline-none ${errors.name ? "border-red-400 bg-red-50" : "border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"}`}
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="text-sm font-bold text-slate-700 ml-1">
                Description*
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                rows="3"
                placeholder="Advanced fitness tracker features..."
                className="w-full mt-1 px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-indigo-500 outline-none"
              ></textarea>
            </div>

            {/* Price & Brand */}
            <div>
              <label className="text-sm font-bold text-slate-700 ml-1">
                Price ($)*
              </label>
              <input
                type="number"
                step="0.01"
                {...register("price", { required: "Price is required" })}
                className="w-full mt-1 px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 ml-1">
                Brand*
              </label>
              <input
                {...register("brand", { required: "Brand is required" })}
                placeholder="FitTech"
                className="w-full mt-1 px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-indigo-500 outline-none"
              />
            </div>

            {/* Image URL Link */}
            <div className="md:col-span-2">
              <label className="text-sm font-bold text-slate-700 ml-1">
                Image URL*
              </label>
              <input
                type="url"
                {...register("image", { required: "Image link is required" })}
                placeholder="https://images.unsplash.com/..."
                className="w-full mt-1 px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-indigo-500 outline-none"
              />
            </div>

            {/* Category & Stock */}
            <div>
              <label className="text-sm font-bold text-slate-700 ml-1">
                Category*
              </label>
              <select
                {...register("category", { required: true })}
                className="w-full mt-1 px-4 py-3 rounded-xl border-2 border-slate-200 outline-none"
              >
                <option value="Electronics">Electronics</option>
                <option value="Fitness">Fitness</option>
                <option value="Health">Health</option>
              </select>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 bg-slate-50 rounded-xl border-2 border-slate-100 self-end">
              <input
                type="checkbox"
                id="stock"
                {...register("inStock")}
                className="w-5 h-5 accent-indigo-600"
              />
              <label
                htmlFor="stock"
                className="text-sm font-bold text-slate-700"
              >
                In Stock
              </label>
            </div>

            {/* Colors & Sizes (Dynamic Selection) */}
            <div>
              <label className="text-sm font-bold text-slate-700 ml-1">
                Available Colors*
              </label>
              <div className="flex gap-4 mt-2">
                {["black", "white", "red"].map((c) => (
                  <label
                    key={c}
                    className="flex items-center text-sm font-medium text-slate-600"
                  >
                    <input
                      type="checkbox"
                      value={c}
                      {...register("colors", { required: true })}
                      className="mr-1 accent-indigo-600"
                    />{" "}
                    {c}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700 ml-1">
                Sizes*
              </label>
              <div className="flex gap-4 mt-2">
                {["S", "M", "L"].map((s) => (
                  <label
                    key={s}
                    className="flex items-center text-sm font-medium text-slate-600"
                  >
                    <input
                      type="checkbox"
                      value={s}
                      {...register("sizes", { required: true })}
                      className="mr-1 accent-indigo-600"
                    />{" "}
                    {s}
                  </label>
                ))}
              </div>
            </div>

            {/* Tags & Rating */}
            <div>
              <label className="text-sm font-bold text-slate-700 ml-1">
                Tags (Comma separated)*
              </label>
              <input
                placeholder="fitness, health"
                {...register("tags", { required: true })}
                className="w-full mt-1 px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-slate-700 ml-1">
                Rating (1-5)*
              </label>
              <input
                type="number"
                step="0.1"
                max="5"
                min="1"
                {...register("rating", { required: true })}
                className="w-full mt-1 px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-indigo-500 outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl shadow-xl shadow-indigo-200 transition-all active:scale-[0.98] transform mt-4"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductUploadForm;
