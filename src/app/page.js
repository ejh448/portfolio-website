"use client";

import { useState, useEffect } from "react";
import HeroSection from "./components/heroSection";
import AboutSection from "./components/about"

export default function Home() {
  const [currentHeader, setCurrentHeader] = useState(null);
  const [isSticky, setIsSticky] = useState(false); 
  const [activeLink, setActiveLink] = useState("");

  const handleScroll = () => {
    const sectionElements = document.querySelectorAll("section");
    sectionElements.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom > 0) {
        setCurrentHeader(section.getAttribute("data-header"));
        setActiveLink(section.getAttribute("data-header").toLowerCase()); // Set active link
      }
    });

    // Make the navbar sticky after the HeroSection
    if (window.scrollY > document.querySelector("section").offsetHeight) {
      setIsSticky(true); // Apply sticky when scrolled past HeroSection
    } else {
      setIsSticky(false); // Remove sticky when above HeroSection
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-y-scroll bg-black text-white">
      <HeroSection />

      {/* Navbar placed below HeroSection, will stick after scrolling */}
      <nav
        className={`w-full text-white shadow-lg p-4 z-10 ${isSticky ? 'fixed top-0' : 'relative'} bg-black`}
      >
        <ul className="flex justify-center space-x-8">
          {/* Links for navigation with active link styling */}
          <li>
            <a href="#about" className={`hover:text-blue-500 font-bold ${activeLink === "about" ? "text-blue-500" : ""}`}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className={`hover:text-green-500 font-bold ${activeLink === "projects" ? "text-green-500" : ""}`}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={`hover:text-red-500 font-bold ${activeLink === "contact" ? "text-red-500" : ""}`}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <main>
        {/* Other sections */}
        <section id="about" data-header="About" className="p-8 pt-24">
        <AboutSection />
        </section>

        <section id="projects" data-header="Projects" className="min-h-screen bg-gray-700 p-8 pt-24">
        <AboutSection />
        </section>

        <section id="contact" data-header="Contact" className="min-h-screen bg-gray-600 p-8 pt-24">
          <h2 className="text-3xl font-bold mb-4">Section 4</h2>
          <p>This is the fourth section.</p>
        </section>

      </main>
    </div>
  );
}