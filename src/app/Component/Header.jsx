"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PiHeart, PiPhone, PiShoppingCart, PiUserCircle } from "react-icons/pi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const header = [
    { title: "Laptop", url: "/laptop" },
    { title: "Desktop", url: "#" },
    { title: "All In One", url: "#" },
    { title: "Monitors", url: "#" },
    { title: "Printer", url: "#" },
    { title: "Pre-Build PC", url: "#" },
    { title: "Accessories & Software", url: "#" },
    { title: "Customize Product", url: "/customize-product" },
    { title: "Support", url: "/support" },
  ];

  return (
    <>
      <div className='bg-[#14519E] hidden py-2.5 text-center text-white sm:text-sm text-[10px] sm:flex items-center justify-center sm:gap-x-2.5'>
        <span>  Welcome Offer</span> <p>Up to ₹ 45,000 Cashback, Bonus on Laptop Exchange.</p>
        <div className="flex items-center justify-end pt-2 sm:hidden gap-2">
          <PiPhone size={15} />
          <span className="text-[10px] pr-3">+91 85954 23549</span>
        </div>
      </div>

      <div className='bg-[#14519E] overflow-hidden sm:hidden block py-2.5 text-center text-white sm:text-sm text-[10px]'>
        <p className="marquee">Welcome Offer Up to ₹ 45,000 Cashback, Bonus on Laptop Exchange.
          Welcome Offer Up to ₹ 45,000 Cashback, Bonus on Laptop Exchange.
        </p>
        <div className="flex items-center justify-end pt-2 sm:hidden gap-2">
          <PiPhone size={15} />
          <span className="text-[10px] pr-3">+91 85954 23549</span>
        </div>
      </div>

      <div className="sm:py-6 py-3  border-b border-gray-300 bg-white sticky top-0 left-0 z-40">
        <div className="w-full max-w-[1200px] mx-auto px-4">
          <div className="flex items-center justify-between">

            <div className="sm:flex items-center hidden gap-2 text-gray-800">
              <PiPhone size={20} />
              <span className="text-sm">+91 85954 23549</span>
            </div>
            <div>
              <Link href="/">
                <Image
                  src="/assets/images/logo.png"
                  alt="logo image"
                  height={70}
                  width={150}
                  className="cursor-pointer sm:h-[50px] h-10 w-auto"
                />
              </Link>
            </div>

            <div className="flex items-center gap-4 text-gray-800">
              <PiHeart size={24} className="cursor-pointer" />
              <PiShoppingCart size={24} className="cursor-pointer" />
              <Link href="/profile">
                <PiUserCircle size={24} className="cursor-pointer" />
              </Link>
              <button
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <AiOutlineMenu size={24} />
              </button>
            </div>
          </div>

          <div className="mt-8 hidden md:flex justify-center gap-6 text-gray-600 text-sm">
            {header.map((item, i) => (
              <Link
                key={i}
                href={item.url}
                className="hover:text-gray-800 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div
          className={`fixed top-0 md:hidden block right-0 h-full w-64 bg-white shadow-lg transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 z-50`}
        >
          <div className="p-4 flex justify-between items-center border-b">
            <span className="text-lg font-bold">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <AiOutlineClose size={24} />
            </button>
          </div>
          <div className="p-4 flex flex-col gap-4 text-gray-800">
            {header.map((item, i) => (
              <Link
                key={i}
                href={item.url}
                className="hover:text-gray-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default Header;
