'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase', 'REST APIs'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Linux'],
    color: 'from-orange-500 to-red-500'
  },
  {
    category: 'Design & UX',
    items: ['Figma', 'UI/UX Design', 'Accessibility', 'Responsive Design', 'Animation', 'Brand Design'],
    color: 'from-green-500 to-emerald-500'
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm Shadrach Malaque
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a passionate Frontend Developer with a deep love for creating beautiful, intuitive user experiences. 
                With over 5 years of experience in web development, I've worked with startups and enterprises to build 
                products that people love.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My journey in tech started with curiosity about how things work. Today, I'm driven by the challenge 
                of solving complex problems with elegant solutions. I believe in writing clean, maintainable code and 
                creating accessible digital experiences for everyone.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, 
                or mentoring junior developers. I'm always excited to learn and grow alongside talented teams.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-gray-200 dark:border-slate-700 text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Projects Completed</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-gray-200 dark:border-slate-700 text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  30+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Happy Clients</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-gray-200 dark:border-slate-700 text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-full h-full rounded-2xl overflow-visible border-4 border-white dark:border-slate-800 shadow-2xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-start justify-center pt-4">
                <img
                  src="/profile.jpg"
                  alt="Shadrach Malaque"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 20%', transform: 'translateY(-8%)' }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className={`bg-gradient-to-br ${skill.color} p-1 rounded-2xl`}
              >
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 h-full">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{skill.category}</h3>
                  <div className="space-y-2">
                    {skill.items.map((item) => (
                      <div
                        key={item}
                        className="text-sm text-gray-700 dark:text-gray-300 flex items-center"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-2" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
