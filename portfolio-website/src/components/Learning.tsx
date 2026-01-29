'use client';

import { motion } from 'framer-motion';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'], icon: '🎨' },
  { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'], icon: '⚙️' },
  { category: 'Currently Learning', items: ['GraphQL', 'WebSockets', 'Docker', 'AWS'], icon: '🚀' },
  { category: 'Design', items: ['Figma', 'UX/UI Design', 'Accessibility', 'Motion Design'], icon: '✨' },
];

export default function Learning() {
  return (
    <section id="learning" className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Currently Learning</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Always growing. Here's what I'm working with and exploring.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 rounded-lg p-6 border border-gray-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h3 className="text-lg font-bold mb-4">{skill.category}</h3>
              <div className="space-y-2">
                {skill.items.map((item) => (
                  <div
                    key={item}
                    className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
