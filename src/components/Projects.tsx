import React from 'react';
import { Code2, Globe, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Proyecto 1",
      description: "Una breve descripción del proyecto y las tecnologías utilizadas",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://proyecto1.com",
      githubUrl: "https://github.com/usuario/proyecto1"
    },
    {
      id: 2,
      title: "Proyecto 2",
      description: "Descripción del segundo proyecto y sus características principales",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      liveUrl: "https://proyecto2.com",
      githubUrl: "https://github.com/usuario/proyecto2"
    },
    {
      id: 3,
      title: "Proyecto 3",
      description: "Detalles sobre el tercer proyecto y su implementación",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      liveUrl: "https://proyecto3.com",
      githubUrl: "https://github.com/usuario/proyecto3"
    },
    {
      id: 4,
      title: "Proyecto 4",
      description: "Información sobre el cuarto proyecto y sus logros",
      image: "/api/placeholder/400/250",
      technologies: ["Angular", "Firebase", "SASS"],
      liveUrl: "https://proyecto4.com",
      githubUrl: "https://github.com/usuario/proyecto4"
    }
  ];

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
          {projects.map((project) => (
            <section
              key={project.id}
              className="rounded-xl border-solid border border-white hover:border-sky-400 hover:transition-all hover:-translate-y-1 hover:bg-zinc-700 cursor-pointer p-4 flex flex-col gap-4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-sky-400">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-zinc-800 rounded-full text-xs text-sky-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-sky-400"
                  >
                    <Code2 size={16} />
                    Código
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-sky-400"
                  >
                    <Globe size={16} />
                    Demo
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;