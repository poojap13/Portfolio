import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="achievements-certifications"
      ref={ref}
      className="min-h-screen bg-gray-900 text-white py-20 px-6 relative transition-colors duration-500"
    >
      <motion.h2
        className="text-4xl font-bold text-center text-purple-300 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🏆 Achievements & Certifications
      </motion.h2>

      {/* Publication Card */}
      <motion.div
        className="bg-gradient-to-r from-purple-800 to-purple-600 shadow-lg rounded-xl p-8 mb-16 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-purple-100 mb-3">
          {publication.title}
        </h3>
        <p className="text-sm text-gray-300 mb-2">
          {publication.publisher} &mdash; {publication.date}
        </p>
        <p className="text-gray-200 mb-4">{publication.description}</p>
        {publication.link && (
          <a
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white bg-purple-500 hover:bg-purple-400 px-4 py-2 rounded-lg transition"
          >
            View Publication →
          </a>
        )}
      </motion.div>

      {/* Vertical scroll-growing line */}
      <motion.div
        style={{ scaleY }}
        className="origin-top absolute left-8 top-[420px] w-1 h-full bg-purple-400 rounded-full"
      />

      {/* Certifications Timeline */}
      <div className="relative ml-10 pl-8 space-y-20">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
          >
            {/* Dot Marker */}
            <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-purple-500 shadow-md border-4 border-gray-900 z-10" />

            <div
              className={`bg-gray-800 border-l-4 border-purple-400 p-6 rounded-xl shadow max-w-xl transition-colors duration-500 ${
                index % 2 === 0 ? "ml-4 sm:mr-auto" : "ml-4 sm:ml-auto"
              }`}
            >
              <h3 className="text-xl font-bold text-purple-300">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-400 font-medium mb-2">
                {cert.issuer} &mdash; {cert.date}
              </p>
              <ul className="text-sm text-gray-300 list-disc pl-5 space-y-1">
                {cert.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-purple-300 hover:text-purple-100 underline text-sm"
                >
                  View Credential →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
