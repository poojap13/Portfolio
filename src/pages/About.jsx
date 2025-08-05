// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      className="p-10 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4">About Me 👩‍💻</h2>
      <p className="text-lg max-w-2xl mx-auto">
        I'm a curious learner passionate about data analytics and AI. I enjoy solving
        real-world problems with code and creativity.
      </p>
    </motion.div>
  );
}
