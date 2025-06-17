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
      <h2 className="section-title">Me conhecendo...</h2>
      <div className="about-content">
        <article className="about-text">
          <p>
            Oie! Sou uma futura desenvolvedora front-end e a melhor aluna do Gabriel hahah! Pretendo seguir nessa carreira
            e desvendar mais do mundo tecnológico.
          </p>
          <p>
            Minha jornada na programação começou em 2024. Iniciei meu curso técnico na instituição Manoel Ignácio, obtive
            muitas notas boas e hoje estou em busca da minha formação como programadora!
          </p>
          <p>
            Estou sempre em busca de novos desafios e oportunidades para 
            aplicar meu conhecimento e contribuir com projetos inovadores. 
            Gosto de trabalhar em equipe e compartilhar conhecimento com 
            outros desenvolvedores.
          </p>
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