// src/pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-20 transition-colors duration-500"
    >
      <motion.h2
        className="text-4xl font-bold text-purple-700 dark:text-purple-300 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let’s Connect 🤝
      </motion.h2>

      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
             </motion.p>

     
      {/* Social Icons */}
      <motion.div
        className="flex gap-8 text-3xl text-purple-600 dark:text-purple-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <a
          href="https://www.linkedin.com/in/pooja-pathare-902639209/" // ✅ Replace with your actual link
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/poojap13" // ✅ Replace with your actual GitHub link
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:poojavpathare@gmail.com" // ✅ Replace with your actual email
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaEnvelope />
        </a>
      </motion.div>
    </section>
  );
}
