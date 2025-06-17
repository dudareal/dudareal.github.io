import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Valentines Day!',
      description: 'Plataforma simples com apenas o front-end e um gif de gato suuper fofo!. Desenvolvida apenas com HTML.',
      technologies: ['HTML'],
      icon: <img src="https://em-content.zobj.net/source/apple/155/smiling-face-with-smiling-eyes-and-three-hearts_1f970.png" alt="" />, 
      liveLink: 'https://github.com/dudareal/dia-dos-namorados.git',
      githubLink: 'https://github.com/dudareal/dia-dos-namorados.git'
    },
    {
      id: 2,
      title: 'TechNoBug',
      description: 'Site destinado a pessoas interessadas em aprender e aprimorar conhecimentos sobre programação. Interface completa e moderna.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Firebase'],
      icon: <img src="https://em-content.zobj.net/source/apple/237/graduation-cap_1f393.png" alt="" />,
      liveLink: 'https://github.com/Samuel029/Projeto_Multidisciplinar.git',
      githubLink: 'https://github.com/Samuel029/Projeto_Multidisciplinar.git'
    },
    {
      id: 3,
      title: 'Coração',
      description: 'Simples código para brincar com as diversas funcionalidades do python que é tanto julgado..',
      technologies: ['Python'],
      icon: <img src="https://em-content.zobj.net/source/apple/279/mending-heart_2764-fe0f-200d-1fa79.png" alt="" />,
      liveLink: 'https://github.com/dudareal/cora-o.git',
      githubLink: 'https://github.com/dudareal/cora-o.git'
    }
  ];

  return (
    <section className="projects">
      <h2 className="section-title">Meus Projetos</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              {project.icon}
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a 
                  href={project.liveLink} 
                  className="project-link primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🌐 Ver Projeto
                </a>
                <a 
                  href={project.githubLink} 
                  className="project-link secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📁 Código
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;