import React, { useState, useEffect } from "react";
import myPhoto from "../assets/myphoto.jpg";
import { motion } from "framer-motion";

export default function Home() {
  const sentences = [
    "Aspiring Data & AI Professional",
    "MLOps Intern @Vosyn | MSc CS @Lakehead",
    "AI/ML • MLOps • SQL • Python",
    "Seeking Full-Time Roles"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // Sentence index
  const [charIndex, setCharIndex] = useState(0); // Character index
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSentence = sentences[index];
    let typingSpeed = isDeleting ? 50 : 100;

    const type = () => {
      if (!isDeleting) {
        if (charIndex < currentSentence.length) {
          setText(currentSentence.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          // Full sentence typed, wait then start deleting
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        if (charIndex > 0) {
          setText(currentSentence.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          // Move to next sentence
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % sentences.length);
        }
      }
    };

    const timeout = setTimeout(type, typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, sentences]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-100 to-white dark:from-gray-900 dark:to-gray-800 text-center px-6 transition-colors duration-500"
    >
      <motion.img
        src={myPhoto}
        alt="Pooja Pathare"
        className="rounded-full w-60 h-60 object-cover shadow-xl mb-6 border-4 border-purple-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.h1
        className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-purple-300"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Pooja Vasant Pathare
      </motion.h1>

      {/* Typewriter Effect */}
      <div className="mt-4 h-12 text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
        <span className="border-r-2 border-purple-500 pr-1 animate-pulse">
          {text}
        </span>
      </div>

      <motion.div
        className="mt-8 flex gap-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a
          href="/pooja_resume.pdf"
          download="Pooja_Pathare_Resume.pdf"
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="border-2 border-purple-600 text-purple-700 dark:text-purple-300 px-6 py-2 rounded-lg hover:bg-purple-100 dark:hover:bg-gray-700 transition duration-300"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
