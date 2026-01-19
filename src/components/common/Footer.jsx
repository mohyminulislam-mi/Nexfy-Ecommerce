import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Company Logo"
                width={160} 
                height={40} 
                priority
              />
            </Link>
            <p className="text-gray-400 mb-4">
              Nexfy a modern E-com platform. Save your time , Buy quality
              products. hassle free shopping!
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <FaSquareXTwitter />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+880 1861720000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@nexfy.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Shop Street, Birampur 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; 2024 NexFy. All rights reserved. | Privacy Policy | Terms of
            Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
