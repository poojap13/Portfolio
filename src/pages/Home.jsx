import { motion } from "framer-motion";
import myPhoto from "../assets/myphoto.jpg"; // This stays in src/assets

export default function Home() {
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
      <motion.p
        className="text-lg md:text-xl mt-3 text-gray-700 dark:text-gray-300 max-w-xl text-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Aspiring Data & AI Professional | MLOps Intern @Vosyn | MSc CS @Lakehead
        <br />
        <strong>AI/ML • MLOps • SQL • Python</strong> | Seeking Full-Time Roles
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-8 flex gap-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        {/* Download Resume */}
        <a
          href="/pooja_resume.pdf"
          download="Pooja_Pathare_Resume.pdf"
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Download Resume
        </a>

        {/* Contact Me */}
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
