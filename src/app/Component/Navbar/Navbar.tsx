'use client';

import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import { Menu, X } from "lucide-react";
import logo from '../../assets/MedicalServices.png';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="relative mx-auto max-w-7xl px-4 py-4">
        <Navbar aria-label="Navbar" className="flex items-center justify-between">
          <NavbarBrand>
            <div
              className="w-16 h-14 bg-cover bg-center"
              style={{ backgroundImage: `url(${logo.src})` }}
            />
          </NavbarBrand>

          <NavbarContent justify="center" className="hidden sm:flex justify-around font-normal md:gap-5 lg:gap-16 ">
            {["Home", "Services", "About", "Doctors", "Testimonials"].map((text) => (
              <NavbarItem key={text}>
                <Link href={`#${text.toLowerCase()}`} className="hover:text-[#26B995]">
                  {text}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>

          <NavbarContent justify="end" className="flex items-center gap-4">
            <div className="hidden sm:block lg:px-10 md:px-5 px-4 md:py-4 py-2 bg-[#26B995] text-white rounded-lg hover:bg-[#1ea582] transition duration-300 font-medium">
              <p className="text-lg md:text-sm">Register Now</p>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </NavbarContent>
        </Navbar>

        {/* Mobile Menu - positioned absolutely */}
        {isMenuOpen && (
          <div className="sm:hidden absolute top-[100%] left-0 w-full bg-white shadow rounded-lg z-40">
            <ul className="flex flex-col gap-4 p-4">
              {["Home", "Services", "About", "Doctors", "Testimonials"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="block text-base text-gray-800 hover:text-[#26B995] font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#register"
                  className="block text-center bg-[#26B995] text-white rounded-lg hover:bg-[#1ea582] transition duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register Now
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
