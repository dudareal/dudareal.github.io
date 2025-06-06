import React from 'react';

const About = () => {
  const skills = [
    { name: 'JavaScript', icon: '🟨' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'HTML/CSS', icon: '🎨' },
    { name: 'Git', icon: '📋' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'Docker', icon: '🐳' }
  ];

  return (
    <section className="about">
      <h2 className="section-title">Sobre Mim</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Olá! Sou um desenvolvedor apaixonado por tecnologia e inovação. 
            Com experiência em desenvolvimento web full-stack, tenho trabalhado 
            em projetos diversos que me permitiram crescer profissionalmente 
            e desenvolver soluções criativas para problemas complexos.
          </p>
          <p>
            Minha jornada na programação começou há alguns anos, e desde então 
            tenho me dedicado a aprender constantemente novas tecnologias e 
            melhores práticas de desenvolvimento. Acredito que a programação 
            é uma forma de arte que combina lógica, criatividade e resolução 
            de problemas.
          </p>
          <p>
            Estou sempre em busca de novos desafios e oportunidades para 
            aplicar meu conhecimento e contribuir com projetos inovadores. 
            Gosto de trabalhar em equipe e compartilhar conhecimento com 
            outros desenvolvedores.
          </p>
        </div>
        
        <div className="skills">
          <h3>🚀 Tecnologias & Ferramentas</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;