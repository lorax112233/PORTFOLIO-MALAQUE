import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Shadrach Malaque | Portfolio',
  description: 'Shadrach Malaque - Frontend Developer passionate about accessible UI and beautiful web experiences',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-50">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}