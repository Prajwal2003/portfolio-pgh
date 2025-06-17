
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30"></div>
            <span className="text-gray-400 font-light text-sm tracking-widest mx-8 uppercase">Contact</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/30"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-extralight text-white mb-8 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            <span className="text-white font-normal"> Let's create something amazing together</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-light text-white mb-8 tracking-wide">
              Let's Talk
            </h3>
            <p className="text-gray-300 mb-12 leading-relaxed text-lg font-light">
              I'm always open to discussing new opportunities, creative projects, or just having 
              a friendly chat about <span className="text-white">technology and design</span>.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-12 h-12 border border-white/20 rounded-2xl flex items-center justify-center group-hover:border-white/30 transition-all duration-300">
                  <Mail size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="font-light text-white text-lg tracking-wide">Email</p>
                  <p className="text-gray-400 font-light">hello@lorenclin.co</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-12 h-12 border border-white/20 rounded-2xl flex items-center justify-center group-hover:border-white/30 transition-all duration-300">
                  <Phone size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="font-light text-white text-lg tracking-wide">Phone</p>
                  <p className="text-gray-400 font-light">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-12 h-12 border border-white/20 rounded-2xl flex items-center justify-center group-hover:border-white/30 transition-all duration-300">
                  <MapPin size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="font-light text-white text-lg tracking-wide">Location</p>
                  <p className="text-gray-400 font-light">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 hover:bg-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-gray-300 mb-3 tracking-wide uppercase">
                  Your Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-white/20 text-white placeholder-gray-500 focus:border-white/40 focus:ring-0 font-light"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-light text-gray-300 mb-3 tracking-wide uppercase">
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-white/20 text-white placeholder-gray-500 focus:border-white/40 focus:ring-0 font-light"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-light text-gray-300 mb-3 tracking-wide uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg focus:outline-none focus:border-white/40 text-white placeholder-gray-500 resize-none font-light"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 text-white py-4 rounded-xl transition-all duration-300 hover:scale-105 font-light text-sm tracking-wide uppercase group"
              >
                <Send size={16} className="mr-3 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
