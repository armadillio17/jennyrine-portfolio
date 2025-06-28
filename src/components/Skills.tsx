import React from 'react';
import {
  Monitor,
  Wrench,
  Brush,
  CloudCog,
  MessageSquare,
  Settings
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Monitor,
      title: 'IT Support & Servicing',
      skills: [
        'Hardware Installation',
        'Software Troubleshooting',
        'Network Support',
        'System Maintenance',
        'Diagnostics'
      ],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Wrench,
      title: 'Technical Skills',
      skills: [
        'Windows OS',
        'Microsoft Office Suite',
        'System Configuration',
        'Servicing NC II',
        'Graphic Design NC III'
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Brush,
      title: 'Graphic Design',
      skills: [
        'Adobe Illustrator',
        'Photoshop',
        'Canva',
        'UI Concepts',
        'Animation NC II'
      ],
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: CloudCog,
      title: 'Web & Digital Tools',
      skills: [
        'Basic Web Design',
        'Web Design NC III',
        'Facebook Ads',
        'Google Docs & Sheets',
        'System Development (Intern)'
      ],
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: MessageSquare,
      title: 'Communication & Support',
      skills: [
        'Customer Service',
        'Email/Chat Support',
        'Sales Assistance',
        'Remote Troubleshooting',
        'Ticketing Systems'
      ],
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Settings,
      title: 'Soft Skills & Tools',
      skills: [
        'Problem Solving',
        'Time Management',
        'Adaptability',
        'Google Workspace',
        'Team Collaboration'
      ],
      color: 'from-gray-500 to-slate-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I bring a mix of technical know-how, creative thinking, and real-world service experience.
            These are the tools and skills I use to solve problems and support people effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map(({ icon: Icon, title, skills, color }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>

              <div className="space-y-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 cursor-default"
                  >
                    • {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;