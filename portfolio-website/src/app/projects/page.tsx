'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and analytics dashboard.',
    image: '🛒',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    link: '#',
    year: '2024',
    impact: '500+ daily users'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborate in real-time with team members. Built with Next.js, featuring Kanban boards, task assignments, and notifications.',
    image: '✓',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase'],
    link: '#',
    year: '2024',
    impact: '20+ teams'
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'Generate high-quality content using AI. Features content templates, batch processing, and SEO optimization.',
    image: '🤖',
    tags: ['React', 'GPT-4', 'Python', 'FastAPI', 'Redis'],
    link: '#',
    year: '2023',
    impact: '10K+ generations'
  },
  {
    id: 4,
    title: 'Social Analytics Platform',
    description: 'Track and analyze social media performance across multiple platforms with beautiful visualizations and insights.',
    image: '📊',
    tags: ['Next.js', 'D3.js', 'PostgreSQL', 'Prisma', 'AWS'],
    link: '#',
    year: '2023',
    impact: '150+ businesses'
  },
  {
    id: 5,
    title: 'Design System Component Library',
    description: 'Reusable component library with 50+ components, built with React and Storybook. Fully documented and tested.',
    image: '🎨',
    tags: ['React', 'Storybook', 'TypeScript', 'CSS-in-JS'],
    link: '#',
    year: '2023',
    impact: '5+ projects using'
  },
  {
    id: 6,
    title: 'Weather App with ML Predictions',
    description: 'Real-time weather data with machine learning predictions. Interactive maps and detailed weather insights.',
    image: '⛅',
    tags: ['React', 'TensorFlow', 'OpenWeather API', 'Mapbox'],
    link: '#',
    year: '2023',
    impact: '1K+ daily active users'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            Here's a collection of my best work. Each project represents thoughtful design and clean code.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 p-6 hover:border-blue-500/50 transition-all"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all" />

              {/* Icon */}
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{project.image}</div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Impact */}
                <div className="mb-4 text-sm text-green-600 dark:text-green-400 font-medium">
                  📈 {project.impact}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <motion.a
                  href={project.link}
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:gap-2 transition-all gap-1"
                >
                  View Project →
                </motion.a>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity transform -skew-x-12 translate-x-full group-hover:translate-x-0 duration-700" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interested in collaborating on something amazing?
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Let's Work Together
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
