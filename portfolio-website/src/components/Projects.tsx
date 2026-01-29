'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A modern e-commerce platform with real-time inventory, payment processing, and admin dashboard built with React and Node.js.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    icon: '🛍️',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates, team collaboration features, and beautiful UI using Next.js.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase'],
    icon: '✓',
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'An AI-powered content generation tool with smart suggestions, multiple templates, and export capabilities.',
    tags: ['React', 'GPT-4', 'Python', 'FastAPI'],
    icon: '✨',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Here are some of my recent projects and side hustles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
