'use client';

import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    icon: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
      className="group bg-gray-50 dark:bg-slate-900 rounded-lg p-6 border border-gray-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 cursor-pointer"
    >
      <div className="text-5xl mb-4">{project.icon}</div>
      
      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <motion.button
        whileHover={{ x: 4 }}
        className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
      >
        Learn More →
      </motion.button>
    </motion.div>
  );
}
