import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    company: 'Vosyn (AI Startup, Canada)',
    title: 'MLOps Intern',
    date: 'June 2025 – Present',
    description: [
      'Developed an AI-powered incident triage and resolution system using Python and MongoDB.',
      'Automated the ML pipeline using DVC and Docker for reproducible workflows.',
      'Deployed interactive dashboards with Streamlit to visualize incident metadata and classification outcomes.',
      'Collaborated with cross-functional pods to translate business problems into ML-driven solutions.',
    ],
  },
  {
    company: 'KPMG (Virtual Experience)',
    title: 'Data Analytics Consultant Intern',
    date: 'Jan 2024 – Feb 2024',
    description: [
      'Completed a real-world client case study using KPMG-provided business datasets.',
      'Performed data quality assessment, data modeling, and presented actionable insights to stakeholders.',
      'Applied Excel and Power BI to create executive dashboards for customer retention strategies.',
      'Interpreted business problems into data solutions using SQL and storytelling techniques.',
    ],
  },
  {
    company: 'The Sparks Foundation',
    title: 'Data Science & ML Intern',
    date: 'Nov 2023 – Dec 2023',
    description: [
      'Built an end-to-end machine learning pipeline for supervised regression problem using Python.',
      'Performed EDA, feature engineering, and trained multiple models with Scikit-learn.',
      'Presented performance metrics with visualizations using Seaborn and Matplotlib.',
      'Documented project using Jupyter Notebook and hosted source code on GitHub.',
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white py-20 px-6 relative transition-colors duration-500 ease-in-out"
    >
      <motion.h2
        className="text-4xl font-bold text-center text-purple-800 dark:text-purple-300 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📌 Experience Timeline
      </motion.h2>

      {/* Timeline scroll indicator */}
      <motion.div
        style={{ scaleY }}
        className="origin-top absolute left-8 top-32 w-1 h-full bg-purple-400 rounded-full"
      />

      <div className="relative ml-10 pl-8 space-y-20">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
          >
            {/* Marker Dot */}
            <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-purple-600 shadow-md z-10 border-4 border-white dark:border-gray-900"></div>

            <div
              className={`bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 border-l-4 border-purple-200 dark:border-purple-500 ${
                index % 2 === 0
                  ? 'ml-4 sm:ml-0 sm:mr-auto'
                  : 'ml-4 sm:ml-auto sm:mr-0'
              }`}
              style={{
                maxWidth: '600px',
              }}
            >
              <h3 className="text-xl font-bold text-purple-700 dark:text-purple-300">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">
                {exp.company} &mdash; <span>{exp.date}</span>
              </p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 text-sm space-y-1">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
