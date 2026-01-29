'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-white/95 to-white/80 dark:from-slate-950/95 dark:to-slate-950/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-slate-800/50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            SM
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-2 items-center">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ y: -2 }}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive(item.href)
                    ? 'bg-blue-600/10 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.label}
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/95 dark:bg-slate-950/95 border-t border-gray-200 dark:border-slate-800"
        >
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <div className={`p-3 rounded-lg font-medium ${isActive(item.href) ? 'bg-blue-600/10 text-blue-600' : 'text-gray-700 dark:text-gray-300'}`}>
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
