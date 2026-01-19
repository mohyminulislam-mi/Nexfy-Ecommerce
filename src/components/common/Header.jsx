"use client";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShoppingCart,
  Menu,
  X,
  Heart,
  Phone,
  Mail,
  LogOut,
} from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = Cookies.get("isLoggedIn");
    const userData = Cookies.get("user");

    if (isLoggedIn && userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const logout = () => {
    Cookies.remove("isLoggedIn");
    Cookies.remove("user");
    window.location.href = "/login";
  };

  const menus = (
    <>
      <Link href="/" className="text-gray-700 hover:text-blue-600">
        Home
      </Link>
      <Link href="/products" className="text-gray-700 hover:text-blue-600">
        Items
      </Link>
      <Link href="/add-products" className="text-gray-700 hover:text-blue-600">
        Add Items
      </Link>
    </>
  );

  return (
    <header className="bg-white shadow-md ">
      <div className="bg-blue-500 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <span>🎉 Free shipping on orders over $50!</span>
          <div className="hidden md:flex gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-4" /> +880 1861000000
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-4" /> support@nexfy.com{" "}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex gap-1 items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Company Logo"
                width={160} // Changed from 4 to 160
                height={40} // Changed from 4 to 40
                priority // Good practice for logos
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {menus}
            <button className="relative">
              <Heart className="h-6 w-6 text-gray-700 hover:text-blue-600" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </button>
            <button className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-blue-600" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <div>
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={user.image}
                      alt="user"
                    />

                    <div className="absolute bottom-2 right-0 h-3 w-3 rounded-full bg-green-500"></div>
                  </div>

                  <button onClick={logout}>
                    <LogOut className="text-red-600 cursor-pointer" />
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="bg-blue-500 text-white py-2.5 px-3 rounded"
                >
                  Login
                </Link>
              )}
            </div>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="text-black h-6 w-6" />
            ) : (
              <Menu className="text-black h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col space-y-4 px-4 py-3">{menus}</nav>
        </div>
      )}
    </header>
  );
};

export default Header;
