import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const sansFont = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const monoFont = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hidayatullah (Dayat) | Senior Full-Stack & Cloud Engineer Portfolio',
  description: 'Portofolio modern Hidayatullah (Dayat) - Senior Full-Stack Developer spesialis Next.js, TypeScript, Tailwind CSS, dan Cloud Infrastructure.',
  keywords: ['Next.js Portfolio', 'Tailwind CSS', 'Full Stack Developer', 'React Developer Indonesia', 'Web Developer Jakarta'],
  authors: [{ name: 'Hidayatullah' }],
  openGraph: {
    title: 'Hidayatullah (Dayat) | Full-Stack & Cloud Engineer',
    description: 'Portofolio web modern dengan Next.js App Router dan Tailwind CSS.',
    type: 'website',
    locale: 'id_ID',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${sansFont.variable} ${monoFont.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#07090e] text-slate-100 antialiased selection:bg-cyan-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
