// components/SkillsSection.tsx
import React from 'react';
import { FaPython, FaJava, FaJs, FaRust, FaVuejs, FaReact, FaGit } from 'react-icons/fa';
import { SiTypescript, SiRocketdotchat, SiExpress, SiQuasar, SiTailwindcss, SiMaterialdesignicons } from 'react-icons/si';
import { MdOutlineLeaderboard, MdOutlineLightbulb, MdOutlineAccessTime, MdOutlinePsychology } from 'react-icons/md';

interface Skill {
  name: string;
  icon: JSX.Element;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Rust', icon: <FaRust className="text-orange-500" /> },
      { name: 'Java', icon: <FaJava className="text-red-500" /> },
      { name: 'Python', icon: <FaPython className="text-blue-500" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'Vue.js', icon: <FaVuejs className="text-green-500" /> },
      { name: 'React.js', icon: <FaReact className="text-blue-500" /> },
      { name: 'Rocket', icon: <SiRocketdotchat className="text-gray-700" /> },
      { name: 'Express.js', icon: <SiExpress className="text-black" /> },
      { name: 'Quasar', icon: <SiQuasar className="text-blue-400" /> },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: <FaGit className="text-red-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" /> },
      { name: 'Material UI', icon: <SiMaterialdesignicons className="text-blue-500" /> },
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Leadership', icon: <MdOutlineLeaderboard className="text-purple-500" /> },
      { name: 'Problem-Solving', icon: <MdOutlineLightbulb className="text-green-500" /> },
      { name: 'Time Management', icon: <MdOutlineAccessTime className="text-yellow-500" /> },
      { name: 'Critical Thinking', icon: <MdOutlinePsychology className="text-red-500" /> },
    ],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Skills That Set Me Apart</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {skillsData.map((category) => (
          <div key={category.category} className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">{category.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
                >
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <p className="text-center text-lg font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
