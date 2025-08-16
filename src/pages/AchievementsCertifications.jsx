import { motion } from "framer-motion";

const publication = {
  title: "Enhancing Visual Speaker Authentication Using Dynamic Lip Movement Analysis and Meta-Learning",
  publisher: "IEEE (PST 2025 Conference)",
  date: "July 2025",
  description:
    "Published in IEEE Xplore as part of the 22nd International Conference on Privacy, Security, and Trust. The paper proposes a few-shot meta-learning approach for spoof-resistant speaker authentication using optical flow of lip movements.",
  link: "https://ieeexplore.ieee.org/document/your-paper-id", // Replace with actual link
};

const certifications = [
  {
    title: "SQL 50 Certification",
    issuer: "LeetCode",
    date: "June 2025",
    skills: ["SQL Queries", "Joins", "Window Functions", "Aggregation"],
    link: "https://leetcode.com/certificates/your-sql50-link", // Replace with actual
  },
  {
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI, Stanford University",
    date: "Nov 2022",
    skills: ["Logistic Regression", "Neural Networks", "Advice for ML"],
    link: "https://www.coursera.org/account/accomplishments/certificate/93DC5TZNZTBP",
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI, Stanford University",
    date: "Nov 2022",
    skills: ["Linear Regression", "Classification", "Regularization"],
    link: "https://www.coursera.org/account/accomplishments/certificate/PENUN4KCRL3E",
  },
];

export default function AchievementsCertifications() {
  return (
    <section
      id="achievements-certifications"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white py-20 px-4 sm:px-10 transition-colors duration-500"
    >
      <motion.h2
        className="text-4xl font-bold text-center text-purple-800 dark:text-purple-300 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🏆 Achievements & Certifications
      </motion.h2>

      {/* Publication Card */}
      <motion.div
        className="bg-white dark:bg-gray-800 border-l-4 border-purple-500 rounded-2xl shadow-lg p-8 mb-20 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-2">
          {publication.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {publication.publisher} &mdash; {publication.date}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {publication.description}
        </p>
        {publication.link && (
          <a
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500 transition"
          >
            View Publication →
          </a>
        )}
      </motion.div>

      {/* Certifications Cards */}
      <div className="flex flex-col items-center space-y-14 max-w-4xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 border-l-4 border-purple-400 p-6 rounded-2xl shadow max-w-full w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-1">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-2">
              {cert.issuer} &mdash; {cert.date}
            </p>
            <ul className="list-disc pl-6 text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {cert.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-purple-600 dark:text-purple-300 hover:underline text-sm"
              >
                View Credential →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
