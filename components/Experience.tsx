"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Data Scientist",
    company: "Innosens Cognition et Calcul de Précision SA",
    desc: "Worked on investment strategy data using ML, NLP, and Large Language Models."
  },
  {
    title: "Data Engineering",
    company: "SLM Impact Finance",
    desc: "Built Azure data pipelines and collaborated with data scientists on integration."
  },
  {
    title: "Full Stack Developer",
    company: "Backend & Web Systems",
    desc: "Built Django backend services integrated with PostgreSQL."
  },
  {
    title: "Web Development Intern",
    company: "Liip SA",
    desc: "Contributed to modern web applications following accessibility best practices."
  }
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold mb-10">Experience</h2>

      <div className="flex flex-col gap-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.1,
              duration: 0.45,
              ease: "easeOut",
            }}
            whileHover={{ y: -4 }}
            className="
              bg-white dark:bg-gray-800
              rounded-xl
              shadow-md
              hover:shadow-xl
              p-6
              transition-shadow
            "
          >
            <h3 className="text-lg md:text-xl font-semibold">
              {exp.title}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {exp.company}
            </p>

            <p className="mt-3 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              {exp.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
