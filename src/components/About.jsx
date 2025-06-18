import React from 'react';

const About = () => {
  const skills = [
    { name: 'JavaScript', icon: '🟨' },
    { name: 'React', icon: '⚛️' },,
    { name: 'Python', icon: '🐍' },
    { name: 'HTML/CSS', icon: '🎨' },
  ];

  return (
    <section className="about">
      <h2 className="section-title">Sobre Mim</h2>
      <div className="about-content">
        <article className="about-text">
          <p> 
            <strong>Objetivos</strong>
          </p>
          <p>
            Busco uma nova oportunidade no mercado de trabalho para 
            aplicar meu conhecimento e contribuir com projetos inovadores. 
          </p>
          <hr />
          <br />

          <p>
            <strong>Informações Adicionais</strong>
          </p>
          <p>Inglês - Intermediário Nível 7</p>
          <p>Espanhol - Básico</p>
          <br />
          <hr />
          <br />
          <p><strong>Experiência Profissional</strong></p>
          <p>Jovem Aprendiz - Marelli (2024-2025)</p>
          <br />
        </article>
        
  
        <div className="skills">
          <h3>🚀 Familiaridade </h3>
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