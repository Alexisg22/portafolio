import React from 'react';
import Image from 'next/image'; 
import { Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AndesCobra",
      description: "Un CRM de gestión de cobranza realizado para la empresa Andes BPO S.A.S, un CRM completo para relizar gestiones de cobro, métricas de productividad, marcaciones telefónicas con Wolkvox, generar reportes, administrar usuarios, etc...",
      image: "/images/projects/andescobra.jpeg",
      technologies: ["NextJs", "TailwindCSS", "PostgreSQL", "Django", "TypeScript"],
      liveUrl: "https://proyecto3.com",
      githubUrl: "https://github.com/Alexsanta045/AndesCobra-Front"
    },
    {
      id: 2,
      title: "Sistema de gestión de usuarios",
      description: "Es un proyecto realizado para la empresa Andes BPO S.A.S, que se basa en un sistema informático que procesa multiples archivos .csv y organiza la información para su uso, ayudando a reducir tiempos de análisis y cruces de BD manuales.",
      image: "/images/projects/cesde.jpeg",
      technologies: ["React", "Django", "Pandas", "PostgreSQL"],
      liveUrl: "https://proyecto1.com",
      githubUrl: "https://github.com/Alexisg22/proyecto-cesde"
    },
    {
      id: 3,
      title: "KANAMY",
      description: "KANAMY es un proyecto de grado, se basa en un sistema de agendamiento de citas para una barbería, resolviendo así la problemática de las barberias convencionales que es la pérdida de tiempo efectivo al realizar asignaciones manales, KANAMY lo hace mucho más sencillo y organizado",
      image: "/images/projects/kanamy.jpeg",
      technologies: ["JavaScript", "SpringBoot", "CSS", "FireBase", "Flutter"],
      liveUrl: "https://proyecto2.com",
      githubUrl: "https://github.com/Alexisg22/proyecto_kanamy"
    },
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
              className="rounded-lg border-solid border border-white hover:border-sky-400 hover:transition-all hover:-translate-y-1 hover:bg-zinc-700 cursor-pointer p-4 flex flex-col gap-4"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={200}
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
                  {/* <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-sky-400"
                  >
                    <Globe size={16} />
                    Demo
                    <ArrowUpRight size={14} />
                  </a> */}
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
