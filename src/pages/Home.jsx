import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaArrowDown } from 'react-icons/fa';
import myPhoto from '../assets/myphoto.jpg';
import resumePDF from '../assets/pooja_resume.pdf';

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-20 transition-all duration-500"
    >
      {/* Blob Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute w-96 h-96 bg-purple-100 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse left-[-80px] top-[-100px]" />
        <div className="absolute w-96 h-96 bg-pink-100 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse right-[-80px] bottom-[-100px]" />
      </div>

      {/* Photo */}
      <motion.img
        src={myPhoto}
        alt="Pooja Pathare"
        className="rounded-full w-48 h-48 object-cover border-4 border-purple-400 shadow-xl mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7 }}
      />

      {/* Name */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-purple-600 text-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Pooja Vasant Pathare
      </motion.h1>

      {/* Typewriter Tagline */}
      <motion.p
        className="text-lg md:text-xl mt-3 text-gray-700 dark:text-gray-300 text-center max-w-2xl font-medium"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Typewriter
          words={[
            'Data & AI Enthusiast',
            'MLOps Intern @ Vosyn',
            'Python • SQL • ML • MLOps',
            'Fluent in SQL, Fluent in Sarcasm 😎',
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-6 flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <a
          href={resumePDF}
          download="Pooja_Pathare_Resume.pdf"
          className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="border border-purple-600 text-purple-600 dark:text-purple-300 px-6 py-2 rounded-md hover:bg-purple-100 dark:hover:bg-purple-800 transition"
        >
          Let’s Connect
        </a>
      </motion.div>

      {/* Tech Tags */}
      <motion.div
        className="mt-8 flex flex-wrap justify-center gap-3 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {[
          'Python',
          'SQL',
          'Power BI',
          'Scikit-learn',
          'MLOps',
          'IEEE Author',
        ].map((tech, i) => (
          <span
            key={i}
            className="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-100 text-sm px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      {/* Scroll Down Icon */}
      <motion.div
        className="mt-12 animate-bounce text-purple-600 dark:text-purple-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <a href="#about" aria-label="Scroll down">
          <FaArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}
