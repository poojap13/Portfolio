import { motion } from 'framer-motion';

const skills = [
  {
    title: 'Programming',
    items: ['Python', 'SQL', 'HTML', 'CSS', 'JavaScript (basic)'],
  },
  {
    title: 'Data Analysis & Viz',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI', 'Tableau', 'Excel'],
  },
  {
    title: 'Machine Learning',
    items: ['Scikit-learn', 'LSTM', 'Optical Flow', 'Meta-Learning'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'Firebase (basic)'],
  },
  {
    title: 'Tools',
    items: ['GitHub', 'Jupyter Notebook', 'VS Code'],
  },
  {
    title: 'Currently Learning',
    items: ['PySpark', 'AWS/GCP', 'MLOps'],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-20 transition-colors duration-500 ease-in-out"
    >
      <motion.h2
        className="text-4xl font-bold text-purple-700 dark:text-purple-300 mb-4 text-center"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        🧠 My Technical Toolbox
      </motion.h2>

      <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-center">
        A snapshot of the tech, tools, and techniques I love to build with.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((category, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 border border-purple-100 dark:border-purple-500 shadow-md rounded-2xl p-6 text-left hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300 mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item, i) => (
                <span
                  key={i}
                  className="bg-purple-100 dark:bg-purple-700/30 text-purple-700 dark:text-purple-200 text-sm font-medium px-3 py-1 rounded-full border border-purple-200 dark:border-purple-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
