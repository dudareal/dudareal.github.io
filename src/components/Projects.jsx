import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce com carrinho de compras, sistema de pagamento e painel administrativo. Desenvolvida com React, Node.js e MongoDB.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      icon: '🛒',
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Task Manager App',
      description: 'Aplicação de gerenciamento de tarefas com funcionalidades de drag & drop, categorização e sistema de notificações. Interface intuitiva e responsiva.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      icon: '📋',
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard meteorológico com dados em tempo real, previsões, gráficos interativos e geolocalização. Integração com APIs externas.',
      technologies: ['Vue.js', 'Chart.js', 'Weather API', 'Sass'],
      icon: '🌤️',
      liveLink: '#',
      githubLink: '#'
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