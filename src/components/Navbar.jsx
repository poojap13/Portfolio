import React, { useState, useEffect, useRef } from "react";
import { FaMoon, FaSun, FaBars, FaTimes, FaHome, FaUser, FaCode, FaProjectDiagram, FaBriefcase, FaCertificate, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const menuRef = useRef();

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }

    // Close menu on outside click
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    // Scroll progress bar
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollPercent((scrollTop / height) * 100);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  const menuItems = [
    { id: "home", label: "Home", icon: FaHome },
    { id: "about", label: "About", icon: FaUser },
    { id: "skills", label: "Skills", icon: FaCode },
    { id: "projects", label: "Projects", icon: FaProjectDiagram },
    { id: "experience", label: "Experience", icon: FaBriefcase },
    { id: "achievements-certifications", label: "Achievements & Certifications", icon: FaCertificate },
    { id: "contact", label: "Contact", icon: FaEnvelope },
  ];

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-purple-500 z-50"
        style={{ width: `${scrollPercent}%` }}
      ></div>

      <nav className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white fixed top-0 w-full z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl font-bold text-purple-700 dark:text-purple-300">
            Pooja's Portfolio
          </h1>

          {/* Right Side */}
          <div className="flex items-center space-x-4 relative" ref={menuRef}>
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-lg hover:text-purple-500 dark:hover:text-purple-300"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-xl hover:text-purple-500 dark:hover:text-purple-300"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Glassy Dropdown */}
            {menuOpen && (
              <ul className="absolute right-0 top-12 backdrop-blur-lg bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg py-2 w-60 transform transition-all duration-300 ease-out animate-slideDown">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setMenuOpen(false)}
                      className="menu-link block px-4 py-2 rounded-md flex items-center hover:bg-purple-100/40 dark:hover:bg-gray-700/40 
                                 hover:shadow-[0_0_10px_rgba(168,85,247,0.6)] 
                                 dark:hover:shadow-[0_0_12px_rgba(192,132,252,0.8)] 
                                 transition-all duration-300"
                    >
                      <item.icon className="mr-3 text-purple-500" /> {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
