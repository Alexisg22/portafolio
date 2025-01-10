import React from 'react';
import { Code2, Briefcase, Brain, Database } from 'lucide-react';

interface Skill {
  id: number;
  name: string;
  level: number;
  icon?: string;
}

interface SkillCategory {
  id: number;
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    id: 1,
    title: "Frontend ",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { id: 1, name: "HTML5", level: 90 },
      { id: 2, name: "CSS3", level: 85 },
      { id: 3, name: "JavaScript", level: 88 },
      { id: 4, name: "React", level: 85 },
      { id: 5, name: "TypeScript", level: 80 },
      { id: 6, name: "Tailwind CSS", level: 88 },
    ]
  },
  {
    id: 2,
    title: "Backend ",
    icon: <Database className="w-6 h-6" />,
    skills: [
       { id: 1, name: "Django", level: 85 },
       { id: 2, name: "PostgreSQL", level: 80},
       { id: 3, name: "Node.js", level: 70 },
       { id: 4, name: "FireBase", level: 60 },
    ]
  },
  {
    id: 3,
    title: "Herramientas de desarrollo",
    icon: <Briefcase className="w-6 h-6" />,
    skills: [
      { id: 1, name: "Git", level: 85 },
      { id: 2, name: "Docker", level: 70 },
      { id: 3, name: "VS Code", level: 90 },
      { id: 4, name: "Postman", level: 85 },
    ]
  },
  {
    id: 4,
    title: "Habilidades blandas",
    icon: <Brain className="w-6 h-6" />,
    skills: [
      { id: 1, name: "Solución de problemas", level: 90 },
      { id: 2, name: "Trabajo en equipo", level: 95 },
      { id: 3, name: "Comunicación", level: 88 },
      { id: 4, name: "Adaptabilidad", level: 92 },
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <div className="w-full max-h-full flex flex-col justify-start items-center border-solid border-l-4 border-sky-400">
      <div className="w-full h-full overflow-y-auto 
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-zinc-800
        [&::-webkit-scrollbar-thumb]:bg-sky-400
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:border-2
        [&::-webkit-scrollbar-thumb]:border-sky-400
        hover:[&::-webkit-scrollbar-thumb]:bg-sky-500
        scrollbar-thin
        scrollbar-track-zinc-800
        scrollbar-thumb-sky-400">
        <div className="min-h-min w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8">
          {skillsData.map((category) => (
            <div 
              key={category.id} 
              className="bg-zinc-800/50 rounded-xl p-6 hover:bg-zinc-700/50 transition-colors"
            >
              {/* Título de la categoría */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-sky-400/20 rounded-lg text-sky-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-sky-400">
                  {category.title}
                </h3>
              </div>

              {/* Lista de habilidades */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-zinc-700 rounded-full h-2">
                      <div
                        className="bg-sky-400 h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;