
import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you as soon as possible.",
    });
    // In a real implementation, would send form data to a backend
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Contact Me</h2>
      
      <div className="grid md:grid-cols-2 gap-10">
        <div className="animate-fade-in">
          <h3 className="text-2xl font-display font-semibold text-portfolio-700 mb-6">
            Get In Touch
          </h3>
          <p className="text-gray-700 mb-6">
            Feel free to contact me for any work or suggestions below.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-portfolio-100 rounded-full flex items-center justify-center mr-4">
                <Mail className="text-portfolio-800" size={20} />
              </div>
              <div>
                <h4 className="text-sm text-gray-500">Email</h4>
                <a href="mailto:tonnyjarvis4@gmail.com" className="text-portfolio-800 hover:text-portfolio-accent transition-colors">
                  tonnyjarvis4@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-portfolio-100 rounded-full flex items-center justify-center mr-4">
                <Phone className="text-portfolio-800" size={20} />
              </div>
              <div>
                <h4 className="text-sm text-gray-500">Phone</h4>
                <a href="tel:+254799374150" className="text-portfolio-800 hover:text-portfolio-accent transition-colors">
                  +254 799 374 150
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '150ms' }}>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-500 focus:border-transparent"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-500 focus:border-transparent"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-500 focus:border-transparent"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-500 focus:border-transparent"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-4 py-2 bg-portfolio-800 hover:bg-portfolio-700 text-white rounded-md transition-colors flex items-center justify-center"
            >
              Send Message
              <Send size={16} className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
