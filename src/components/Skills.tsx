import {
  Monitor,
  Brush,
  Target,
  Mail,
  FileSpreadsheet,
  Award,
  MessageCircle,
  Users
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Monitor,
      title: 'System Servicing',
      skills: ['Hardware Installation', 'Software Config', 'Diagnostics', 'Troubleshooting'],
    },
    {
      icon: Brush,
      title: 'Graphic Design',
      skills: ['Adobe Illustrator', 'Photoshop', 'Canva', 'Visual Content'],
    },
    {
      icon: Target,
      title: 'Funnel Building',
      skills: ['Lead Generation', 'Landing Pages', 'Email Sequences', 'Conversion'],
    },
    {
      icon: Mail,
      title: 'Email Automation',
      skills: ['Auto Sequences', 'Task Automation', 'Webinar Mgmt', 'Workflows'],
    },
    {
      icon: FileSpreadsheet,
      title: 'Microsoft Suite',
      skills: ['Excel', 'PowerPoint', 'Google Workspace', 'Documentation'],
    },
    {
      icon: Award,
      title: 'Certifications',
      skills: ['Graphic Design NC III', 'System Servicing NC II', 'Animation NC II', 'Web Design NC III'],
    },
    {
      icon: MessageCircle,
      title: 'Communication & Support',
      skills: ['Customer Service', 'Technical Support', 'Problem Resolution', 'Client Relations'],
    },
    {
      icon: Users,
      title: 'Soft Skills',
      skills: ['Team Collaboration', 'Time Management', 'Adaptability', 'Attention to Detail'],
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-blue-900/95 to-blue-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Technical know-how, creative thinking, and real-world experience.
          </p>
        </div>

        {/* Skills Grid - Clean bento layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skillCategories.map(({ icon: Icon, title, skills }) => (
            <div
              key={title}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-5 h-5 text-cyan-400" />
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-sm mb-3">
                {title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] px-2 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5"
                  >
                    {skill}
                  </span>
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
