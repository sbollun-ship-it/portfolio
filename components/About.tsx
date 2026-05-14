'use client';

export default function About() {
  const skills = [
    'JavaScript/TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'SQL',
    'Tailwind CSS',
    'Git',
  ];

  return (
    <section id="about" className="py-20 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              I'm a passionate developer with experience in building modern web applications. 
              I love learning new technologies and creating solutions that make a difference.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new frameworks, contributing to open source, 
              or sharing knowledge with the community.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-secondary p-4 rounded-lg border border-accent/20 hover:border-accent/50 transition"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
