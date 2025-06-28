import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Facebook,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [showEmailOptions, setShowEmailOptions] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowEmailOptions(true);
  };

  const openGmail = () => {
    const { name, email, subject, message } = formData;
    const body = `Hi, my name is ${name}.\n\n${message}\n\nYou can reply to me at: ${email}`;
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=jaypalis1999@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
    setShowEmailOptions(false);
  };

  const openOutlook = () => {
    const { name, email, subject, message } = formData;
    const body = `Hi, my name is ${name}.\n\n${message}\n\nYou can reply to me at: ${email}`;
    
    const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=jaypalis1999@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(outlookUrl, '_blank');
    setShowEmailOptions(false);
  };

  const openDefaultEmail = () => {
    const { name, email, subject, message } = formData;
    const body = `Hi, my name is ${name}.\n\n${message}\n\nYou can reply to me at: ${email}`;
    
    const mailtoLink = `mailto:jaypalis1999@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setShowEmailOptions(false);
  };

  const copyToClipboard = () => {
    const { name, email, subject, message } = formData;
    const emailContent = `To: jaypalis1999@gmail.com
Subject: ${subject}

Hi, my name is ${name}.

${message}

You can reply to me at: ${email}`;
    
    navigator.clipboard.writeText(emailContent);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setShowEmailOptions(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jaypalis1999@gmail.com',
      href: 'mailto:jaypalis1999@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '09702972536',
      href: 'tel:09702972536',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Davao City, Philippines',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jennyrine-palis-jr-43b4552b2/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/jaypalis29', label: 'Facebook' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just 
                want to say hello, I'd love to hear from you. Feel free to reach 
                out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center space-x-4 text-gray-600 hover:text-indigo-600 transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center group-hover:bg-indigo-100 transition-colors duration-200">
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{label}</div>
                    <div className="font-medium">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-200 hover:bg-indigo-600 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell me more about your project..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Email Options Modal */}
      {showEmailOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Choose your email client
            </h3>
            <div className="space-y-3">
              <button
                onClick={openGmail}
                className="w-full flex items-center space-x-3 p-3 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg transition-colors duration-200"
              >
                <Mail size={20} />
                <span>Open in Gmail</span>
                <ExternalLink size={16} className="ml-auto" />
              </button>
              
              <button
                onClick={openOutlook}
                className="w-full flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors duration-200"
              >
                <Mail size={20} />
                <span>Open in Outlook</span>
                <ExternalLink size={16} className="ml-auto" />
              </button>
              
              <button
                onClick={openDefaultEmail}
                className="w-full flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-colors duration-200"
              >
                <Mail size={20} />
                <span>Use default email app</span>
                <ExternalLink size={16} className="ml-auto" />
              </button>
              
              <button
                onClick={copyToClipboard}
                className="w-full flex items-center space-x-3 p-3 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg transition-colors duration-200"
              >
                {copied ? <Check size={20} /> : <Copy size={20} />}
                <span>{copied ? 'Copied!' : 'Copy email content'}</span>
              </button>
            </div>
            
            <button
              onClick={() => setShowEmailOptions(false)}
              className="w-full mt-4 p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
