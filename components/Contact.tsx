'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-primary">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Get In Touch</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-secondary text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-accent focus:outline-none transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-secondary text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-accent focus:outline-none transition"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-secondary text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-accent focus:outline-none transition resize-none"
              placeholder="Your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent text-primary py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 flex justify-center gap-8">
          <a href="#" className="text-gray-400 hover:text-accent transition">
            GitHub
          </a>
          <a href="#" className="text-gray-400 hover:text-accent transition">
            LinkedIn
          </a>
          <a href="#" className="text-gray-400 hover:text-accent transition">
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
}
