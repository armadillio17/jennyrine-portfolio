import { useState } from 'react';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
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
      value: 'DDF Village Mandug, Davao City',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jennyrine-palis-jr-43b4552b2/', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/jaypalis29', label: 'Facebook' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-900/95 to-blue-950 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">
              Let's Connect
            </h3>
            <p className="text-gray-300 mb-6">
              Whether you have a project in mind, want to collaborate, or just
              want to say hello, feel free to reach out.
            </p>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center space-x-4 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{label}</div>
                    <div className="font-medium">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 focus:outline-none transition-all duration-300 text-white placeholder-gray-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 focus:outline-none transition-all duration-300 text-white placeholder-gray-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 focus:outline-none transition-all duration-300 text-white placeholder-gray-500"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 focus:outline-none transition-all duration-300 text-white placeholder-gray-500 resize-none"
                  placeholder="Tell me more about your project..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-3 px-6 rounded-full font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Email Options Modal */}
      {showEmailOptions && (
        <div className="fixed inset-0 bg-blue-950/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 w-full max-w-md border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">
              Choose your email client
            </h3>
            <div className="space-y-3">
              <button
                onClick={openGmail}
                className="w-full flex items-center space-x-3 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 hover:bg-red-500/20 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>Open in Gmail</span>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </button>

              <button
                onClick={openOutlook}
                className="w-full flex items-center space-x-3 p-3 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 hover:bg-blue-500/20 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>Open in Outlook</span>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </button>

              <button
                onClick={openDefaultEmail}
                className="w-full flex items-center space-x-3 p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>Use default email app</span>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </button>

              <button
                onClick={copyToClipboard}
                className="w-full flex items-center space-x-3 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-300 hover:bg-green-500/20 transition-all duration-300"
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                <span>{copied ? 'Copied!' : 'Copy email content'}</span>
              </button>
            </div>

            <button
              onClick={() => setShowEmailOptions(false)}
              className="w-full mt-4 p-2 text-gray-400 hover:text-white transition-colors duration-200"
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
