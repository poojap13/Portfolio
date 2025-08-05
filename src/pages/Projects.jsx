import { motion } from "framer-motion";
import vsaImg from "../assets/projects/vsa.png";
import phishscopeImg from "../assets/projects/phishscope.png";
import proteinImg from "../assets/projects/protein.png";
import studentImg from "../assets/projects/student-predictor.png";

const projects = [
  {
    title: "Visual Speaker Authentication",
    tech: "Python, Optical Flow, 3D CNN, MAML",
    description:
      "Few-shot speaker authentication using dynamic lip movement analysis. Achieved 99.64% accuracy in speaker-disjoint evaluation.",
    image: vsaImg,
    liveLink: "#", // Add if available
    codeLink: "https://github.com/poojap13/visual-speaker-authentication",
  },
 {
    title: "Student Exam Performance Predictor",
    tech: "Python, Flask, scikit-learn, HTML/CSS",
    description:
      "Machine learning web app predicting student Math scores based on demographic and academic details. Built with Flask, deployed on Render.",
    image: studentImg,
    liveLink: "https://mlproject-exoa.onrender.com",
    codeLink: "https://github.com/poojap13/MLProject",
  },
  {
    title: "PhishScope: AI-Powered Email Phishing Detection",
    tech: "Python, NLP, Power BI, Streamlit, ML",
    description:
      "AI-powered phishing detection system using NLP keyword analysis, risk scoring, and interactive dashboard for security teams.",
    image: phishscopeImg,
    liveLink: "#", // Add if available
    codeLink: "https://github.com/poojap13/PhishScope-Email-Phishing-Detection",
  },
  {
    title: "Protein Classification with PySpark ML",
    tech: "PySpark, Machine Learning, Data Analysis",
    description:
      "Protein sequence classification using PySpark ML pipelines for scalable bioinformatics analysis.",
    image: proteinImg,
    liveLink: "#", // Add if available
    codeLink: "https://github.com/poojap13/ProteinClassification-PySpark-ML",
  },
 
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-20 transition-colors duration-500 ease-in-out"
    >
      <motion.h2
        className="text-4xl font-bold text-purple-700 dark:text-purple-300 mb-12 text-center"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        📂 Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 border border-purple-100 dark:border-purple-500 rounded-2xl shadow-lg p-4 flex flex-col justify-between hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Thumbnail */}
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-xl font-bold text-purple-800 dark:text-purple-300 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {project.tech}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                {project.description}
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-4">
              {project.liveLink && project.liveLink !== "#" && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                >
                  Live Demo
                </a>
              )}
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center border border-purple-600 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-700 transition"
              >
                Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

