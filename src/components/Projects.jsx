import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Valentines Day!',
      description: 'Várias imagens do casal passa pelo site, enquanto toca uma música de fundo e a letra aparece no decorrer da tela.',
      technologies: ['HTML e CSS'],
      icon: <img src="https://em-content.zobj.net/source/apple/155/smiling-face-with-smiling-eyes-and-three-hearts_1f970.png" alt="" />, 
      liveLink: 'https://hearttoheart-sigma.vercel.app/',
      githubLink: 'https://github.com/dudareal/looovee.git'
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
      title: 'E-commerce',
      description: 'Site simples destinado a uma loja de jóia de luxo.',
      technologies: ['HTML'],
      icon: <img src="https://png.pngtree.com/element_our/png/20181031/shopping-cart-png_224349.jpg" alt="" />,
      liveLink: 'https://blairwaldorf-ashen.vercel.app/',
      githubLink: 'https://github.com/dudareal/blairwaldorfjoia.git'
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