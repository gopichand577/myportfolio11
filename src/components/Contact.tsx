
import { useState } from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 px-4">Let's create something amazing together</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div className="animate-fade-in-up">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-cyan-400">Let's Connect</h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Whether you're a company looking to hire, or you're a fellow developer wanting to connect, 
              I'd love to hear from you.
            </p>
            
            <div className="space-y-4 mb-6 sm:mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-400 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <span className="text-white font-bold text-sm sm:text-base">@</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-sm sm:text-base">Email</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base break-all">gopichand5773@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-400 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <span className="text-white font-bold text-sm sm:text-base">📍</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-sm sm:text-base">Location</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Facebook className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Instagram className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Twitter className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </a>
            </div>
          </div>

          <div className="glass-effect p-6 sm:p-8 rounded-2xl animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 animate-glow text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
