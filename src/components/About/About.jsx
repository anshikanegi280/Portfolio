import React, { useState } from 'react';
import profileImage from "../../assets/profile.png";

const About = () => {
  const [activeSection, setActiveSection] = useState(0);

  const SkillsInfo = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
        { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
        { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express JS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      ],
    },
    {
      title: 'Languages',
      skills: [
        { name: 'C', logo: '9' },
        { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Postman', logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
        { name: 'Compass', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      ],
    },
  ];

  const gradients = [
    'from-blue-500 to-purple-600',
    'from-green-500 to-teal-600',
    'from-yellow-500 to-orange-600',
    'from-pink-500 to-red-600',
  ];

  return (
    <div className="min-h-screen bg-portfolio">
      <section id="about" className="py-16 md:py-24 px-4 sm:px-8 lg:px-16 xl:px-20 font-sans">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">About Me</h2>
          <div className="w-24 h-1 mx-auto bg-[rgb(var(--accent))]"></div>
        </div>

        <div className="max-w-5xl mx-auto mb-20">
          <div className="rounded-2xl p-8 shadow-2xl border border-[rgba(var(--accent-2),0.16)] glass">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="relative mb-6">
                  <div className="w-48 h-48 rounded-full p-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                      <img src={profileImage} alt="Anshika Negi" className="w-full h-full object-cover object-center" />
                    </div>
                  </div>

                  <div className="absolute -top-2 -right-2 w-6 h-6 glow-accent rounded-full animate-pulse shadow-lg"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 glow-accent-2 rounded-full animate-pulse delay-1000 shadow-lg"></div>
                  <div className="absolute top-1/2 -right-4 w-3 h-3 glow-accent rounded-full animate-bounce delay-500"></div>
                </div>

                <div className="flex gap-4">
                  <button className="btn-accent text-white font-medium py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2" onClick={() => window.open('mailto:your-email@gmail.com', '_blank')}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    Gmail
                  </button>

                  <button className="btn-accent text-white font-medium py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2" onClick={() => window.open('https://linkedin.com/in/your-profile', '_blank')}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path></svg>
                    LinkedIn
                  </button>
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-2">Anshika Negi</h1>
                <h2 className="text-xl lg:text-2xl font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">MERN Stack Developer</h2>

                <div className="space-y-4 text-[var(--text-muted)] leading-relaxed text-sm lg:text-base">
                  <p>
                    Hello! I'm Anshika Negi — a driven and detail-oriented Full Stack Developer with 2+ years of hands-on experience building dynamic, scalable, and secure web applications using the MERN stack. I specialize in crafting seamless user experiences and robust backend systems.
                  </p>

                  <p>
                    Beyond development, I'm equally passionate about software testing — ensuring high-quality applications through unit, integration, and end-to-end testing with tools like Jest, Mocha, and Cypress.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6 justify-center lg:justify-start">
                    {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'AWS'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-[rgba(var(--accent-2),0.12)] border border-[rgba(var(--accent-2),0.16)] rounded-full text-xs text-[var(--text-primary)]">{skill}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-center lg:justify-start mt-8">
                    <span className="text-yellow-400 text-xl mr-2">⚡</span>
                    <span className="text-[var(--text-primary)] font-medium">Excited to build transformative digital solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">Skills</h2>
          <div className="w-20 h-1 mx-auto bg-[rgb(var(--accent))] mb-8"></div>
          <p className="text-xl text-[var(--text-muted)] mb-8">A collection of my technical skills and expertise honed through various projects and experiences</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-4xl mx-auto">
          {SkillsInfo.map((section, index) => (
            <button key={section.title} onClick={() => setActiveSection(index)} className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${activeSection === index ? `bg-gradient-to-r ${gradients[index]} text-white shadow-lg scale-105` : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>
              {section.title}
            </button>
          ))}
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
            {SkillsInfo.map((section, sectionIndex) => (
              <div key={section.title} className={`transform transition-all duration-500 ${activeSection === sectionIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-60'}`}>
                <div className="bg-gray-800/40 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 min-h-[400px]">
                  <h3 className={`text-2xl font-bold mb-6 text-center bg-gradient-to-r ${gradients[sectionIndex]} bg-clip-text text-transparent`}>{section.title}</h3>

                  <div className="grid grid-cols-3 gap-4 h-80">
                    {section.skills.map((skill, skillIndex) => (
                      <div key={`${section.title}-${skill.name}-${skillIndex}`} className="group relative" style={{ animationDelay: `${skillIndex * 0.1}s` }}>
                        <div className="w-full h-full rounded-xl flex flex-col items-center justify-center p-3 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:-rotate-3 bg-gray-700/30 border border-gray-600/40 hover:border-gray-500/60">
                          <div className="w-10 h-10 mb-3 flex items-center justify-center text-gray-300">
                            <img
                              src={skill.logo}
                              alt={skill.name}
                              className="w-8 h-8 object-contain"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                const fallback = e.target.nextElementSibling; if (fallback) fallback.style.display = 'flex';
                              }}
                            />
                            <div style={{ display: 'none' }} className="w-8 h-8 flex items-center justify-center text-gray-300">🔧</div>
                          </div>
                          <span className="text-xs font-semibold text-center leading-tight text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;