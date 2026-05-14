'use client';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A modern web application built with Next.js and Tailwind CSS',
      tech: ['Next.js', 'React', 'Tailwind CSS'],
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Full-stack application with Node.js backend and React frontend',
      tech: ['Node.js', 'React', 'MongoDB'],
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Real-time collaborative application with WebSocket integration',
      tech: ['TypeScript', 'Socket.io', 'Express'],
      link: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-primary rounded-lg overflow-hidden border border-secondary hover:border-accent/50 transition transform hover:scale-105"
            >
              <div className="bg-gradient-to-r from-accent to-blue-600 h-40" />
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-accent text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.link} className="text-accent hover:underline">
                    Live Demo
                  </a>
                  <a href={project.github} className="text-accent hover:underline">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
