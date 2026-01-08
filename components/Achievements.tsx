"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const achievements = [
  {
    id: 1,
    name: "Hackathon Winner",
    image: "/achievements/winner.png",
  },
  {
    id: 2,
    name: "SRF News Switzerland",
    image: "/achievements/srf-news.png",
  },
  {
    id: 3,
    name: "Demo – Tibetan Chatbot",
    image: "/achievements/demo.jpeg",
  },
  {
    id: 4,
    name: "Tibetan Culture Chatbot",
    image: "/achievements/culturebot.png",
  },
];

const Achievements = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.section
      id="achievements"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="pt-16"
    >
      <h2 className="text-3xl font-bold mb-8">Achievements</h2>

      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto no-scrollbar snap-x pb-4"
      >
        {achievements.map((a, index) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
              duration: 0.4,
              ease: "easeOut",
            }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="
              snap-start
              flex-shrink-0
              w-[220px] sm:w-[240px] md:w-[260px]
              bg-white dark:bg-gray-800
              rounded-xl shadow-md
              p-4
              cursor-pointer
              transition-shadow
              hover:shadow-xl
            "
          >
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-square rounded-lg overflow-hidden"
            >
              <Image
                src={a.image}
                alt={a.name}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Title */}
            <p className="mt-4 font-semibold text-center text-sm md:text-base">
              {a.name}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Achievements;
