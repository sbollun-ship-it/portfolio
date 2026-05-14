'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          © {currentYear} Your Name. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Built with Next.js, React, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
