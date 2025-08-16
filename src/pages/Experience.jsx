import { motion } from "framer-motion";

const experiences = [
  {
    company: "Vosyn (AI Startup, Canada)",
    title: "MLOps Intern",
    date: "June 2025 – Present",
    description: [
      "Developed an AI-powered incident triage and resolution system using Python and MongoDB.",
      "Automated the ML pipeline using DVC and Docker for reproducible workflows.",
      "Deployed interactive dashboards with Streamlit to visualize incident metadata and classification outcomes.",
      "Collaborated with cross-functional pods to translate business problems into ML-driven solutions.",
    ],
  },
  {
    company: "KPMG (Virtual Experience)",
    title: "Data Analytics Consultant Intern",
    date: "Jan 2024 – Feb 2024",
    description: [
      "Completed a real-world client case study using KPMG-provided business datasets.",
      "Performed data quality assessment, data modeling, and presented actionable insights to stakeholders.",
      "Applied Excel and Power BI to create executive dashboards for customer retention strategies.",
      "Interpreted business problems into data solutions using SQL and storytelling techniques.",
    ],
  },
  {
    company: "The Sparks Foundation",
    title: "Data Science & ML Intern",
    date: "Nov 2023 – Dec 2023",
    description: [
      "Built an end-to-end machine learning pipeline for supervised regression problem using Python.",
      "Performed EDA, feature engineering, and trained multiple models with Scikit-learn.",
      "Presented performance metrics with visualizations using Seaborn and Matplotlib.",
      "Documented project using Jupyter Notebook and hosted source code on GitHub.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white py-20 px-4 sm:px-10 transition-colors duration-500"
    >
      <motion.h2
        className="text-4xl font-bold text-center text-purple-800 dark:text-purple-300 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📌 Experience
      </motion.h2>

      <div className="flex flex-col items-center space-y-14 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 w-full shadow-lg rounded-2xl p-8 border-l-4 border-purple-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-purple-700 dark:text-purple-300 mb-2">
              {exp.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-3">
              {exp.company} &mdash; <span>{exp.date}</span>
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 text-[15px] space-y-2">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
