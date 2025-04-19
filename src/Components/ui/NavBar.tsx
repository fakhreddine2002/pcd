"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full h-[65px] fixed top-5 z-50 px-10">
      <div className="w-full h-full flex items-center justify-start m-auto px-[10px]">
        <div className="flex items-center sm:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-white hover:bg-[#0300145e] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={handleToggle}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6 z-50" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="flex-1 flex items-center justify-between sm:justify-center">
          <div className="flex items-start justify-between sm:w-[40%] h-full">
            <div className="hidden sm:flex items-center justify-center gap-40 space-x-1 w-full h-auto border border-[#7042f861] px-[40px] py-[30px] rounded-lg text-gray-200 mt-10 hover:border-[#53c0ff98] transition-colors duration-300 shadow-full shadow-[#090979]/50 bg-[#03001417] backdrop-blur-md">
              
                <Link href="#urlinput" className="cursor-pointer hover:text-blue-600 transition-colors duration-300">
                  Check News
                </Link>
                <Link href="#about-us-section" className="cursor-pointer hover:text-blue-600 transition-colors duration-300">
                  About Us
                </Link>
            </div>  
          </div>
        </div>
      </div>
      <Transition
  show={mobileMenuOpen}
  enter="transition ease-out duration-100"
  enterFrom="transform opacity-0 scale-95"
  enterTo="transform opacity-100 scale-100"
  leave="transition ease-in duration-75"
  leaveFrom="transform opacity-100 scale-100"
  leaveTo="transform opacity-0 scale-95"
>
  <div className="sm:hidden fixed inset-0 bg-[#03001417] backdrop-blur-lg space-y-4 w-full h-full bg-cover px-8 py-32">
    <Link href="/" className="text-gray-300 hover:bg-[#0300145e] hover:text-white block px-3 py-2 rounded-md text-lg font-medium">
    Check News
    </Link>
    <Link href="about-us" className="text-gray-300 hover:bg-[#0300145e] hover:text-white block px-3 py-2 rounded-md text-lg font-medium">
      About Us
    </Link>
  </div>
</Transition>
    </nav>
  );
};

export default Navbar;
