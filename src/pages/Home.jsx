import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import myPhoto from "../assets/myphoto.jpg";

export default function Home() {
  const taglines = [
    "Aspiring Data & AI Professional | MLOps Intern @Vosyn | MSc CS @Lakehead",
    "AI/ML • MLOps • SQL • Python | Seeking Full-Time Roles",
  ];

  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  // Switch sentences every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setShow(false); // Fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % taglines.length);
        setShow(true); // Fade in new
      }, 600);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const words = taglines[index].split(" ");

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-100 to-white dark:from-gray-900 dark:to-gray-800 text-center px-6 transition-colors duration-500"
    >
      {/* Profile Photo */}
      <motion.img
        src={myPhoto}
        alt="Pooja Pathare"
        className="rounded-full w-60 h-60 object-cover shadow-xl mb-6 border-4 border-purple-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Name */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-purple-700 dark:text-purple-300"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Pooja Vasant Pathare
      </motion.h1>

      {/* Tagline */}
      <motion.div
        className="text-lg md:text-xl mt-4 text-gray-700 dark:text-gray-300 max-w-2xl text-center min-h-[70px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-wrap justify-center">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="mx-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.15,
                duration: 0.3,
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="mt-8 flex gap-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
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
