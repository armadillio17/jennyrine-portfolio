import React, { useState } from 'react';
import { Award, Cpu, Headphones, Code } from 'lucide-react';

const About = () => {
  const [openDetail, setOpenDetail] = useState<string | null>(null);

  const toggleDetail = (key: string) => {
    setOpenDetail(openDetail === key ? null : key);
  };

  const detailData = {
    it: [
      '1+ year of hands-on IT support experience',
      'Computer Servicing NC II certified',
      'Experienced in system maintenance and diagnostics',
      'Internship in system development and admin support'
    ],
    tech: [
      'Hardware setup & repair (PCs, printers, routers)',
      'Software installation, patching, and cleanup',
      'Network setup and basic troubleshooting',
      'Familiar with operating systems (Windows, Mac)'
    ],
    support: [
      '2 years in customer service (email/chat/in-person)',
      'Remote support using screen-sharing tools',
      'Handled inquiries and technical escalations',
      'Worked in support teams for multiple locations'
    ],
    tools: [
      'Adobe Illustrator & Photoshop',
      'Canva & Google Workspace',
      'Windows OS, MS Office Suite',
      'Facebook Ads Manager',
      'Basic HTML/CSS and UI design tools'
    ]
  };

  const stats = [
    {
      key: 'it',
      icon: Award,
      label: 'Years in IT Support',
      value: '1+',
      details: detailData.it
    },
    {
      key: 'tech',
      icon: Cpu,
      label: 'Handled Tech Issues',
      value: 'Hardware, software, and network troubleshooting',
      details: detailData.tech
    },
    {
      key: 'support',
      icon: Headphones,
      label: 'Customer Service',
      value: '2 years',
      details: detailData.support
    },
    {
      key: 'tools',
      icon: Code,
      label: 'Tools & Technologies Used',
      value: '10+',
      details: detailData.tools
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                About Me
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate IT specialist with a well-rounded background in technical support, customer service, and creative digital solutions.
                My journey began with a curiosity for how technology works and has grown into a career focused on solving problems and supporting users.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From providing hands-on hardware and software support to leading support teams and enhancing system performance, I take pride in delivering seamless IT experiences. Along the way, I've developed strong customer service skills and explored my creative side through graphic and web design—making me both tech-savvy and people-oriented.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                I believe in the impact of reliable tech support, intuitive systems, and meaningful user experiences. When I'm not troubleshooting or optimizing IT operations, you'll find me exploring creative design tools, learning new technologies, or helping others navigate technical challenges.
              </p>
            </div>

            <button
              onClick={scrollToContact}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Let's Work Together
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ key, icon: Icon, label, value }) => (
              <div
                key={key}
                onClick={() => toggleDetail(key)}
                className="bg-gray-50 p-6 rounded-xl text-center hover:bg-indigo-50 transition-colors duration-300 group cursor-pointer"
              >
                <Icon className="w-8 h-8 text-indigo-600 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-xs md:text-sm text-gray-600 mb-1">{label}</div>
                <div className="text-sm md:text-base font-medium text-gray-900">{value}</div>
              </div>
            ))}
          </div>

          {/* Toggle Panels */}
          {stats.map(
            ({ key, details }) =>
              openDetail === key && (
                <div
                  key={key}
                  className="col-span-2 mt-6 bg-indigo-50 p-6 rounded-xl shadow-md transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-indigo-700 mb-4">
                    {stats.find((s) => s.key === key)?.label} - Details
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {details.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default About;