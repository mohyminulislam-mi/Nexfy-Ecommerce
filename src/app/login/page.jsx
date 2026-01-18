"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    const MOCK_EMAIL = "mohyminulislam@gmail.com";
    const MOCK_PASSWORD = "password123";

    if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      // Store auth status in a cookie (expires in 1 day)
      Cookies.set("isLoggedIn", "true", { expires: 1 });
      router.push("/items");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center w-full px-4">
      <form onSubmit={handleLogin} className="flex w-full flex-col max-w-96">
        <h2 className="text-4xl font-medium text-gray-900">Sign in</h2>

        <p className="mt-4 text-base text-gray-500/90">
          Please enter email and password to access.
        </p>

        <div className="mt-10">
          <label className="font-medium">Email</label>
          <input
            className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none px-3 py-3 w-full"
            name="email"
            type="email"
            placeholder="Please enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />
        </div>

        <div className="mt-6">
          <label className="font-medium">Password</label>
          <input
            placeholder="Please enter your password"
            className="mt-2 rounded-md ring ring-gray-200 focus:ring-2 focus:ring-indigo-600 outline-none px-3 py-3 w-full"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-8 py-3 w-full cursor-pointer rounded-md bg-indigo-600 text-white transition hover:bg-indigo-700"
        >
          Login
        </button>
        <p className="text-center py-8">
          Don't have an account?{" "}
          <a href="/signup" className="text-indigo-600 hover:underline">
            Sign up
          </a>
        </p>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
