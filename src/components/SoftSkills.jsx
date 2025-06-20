import React from 'react';

const SoftSkills = () => {
  const softSkills = [
    { 
      name: 'Comunicação', 
      icon: '🗣️', 
      description: 'Facilidade para transmitir ideias de forma clara e objetiva, tanto com equipes técnicas quanto com stakeholders.' 
    },
    { 
      name: 'Trabalho em Equipe', 
      icon: '🤝', 
      description: 'Colaboração efetiva em projetos, promovendo um ambiente produtivo e harmonioso.' 
    },
    { 
      name: 'Adaptabilidade', 
      icon: '🔄', 
      description: 'Flexibilidade para aprender rapidamente novos métodos e se adaptar a mudanças no ambiente de trabalho.' 
    },
    { 
      name: 'Organização', 
      icon: '📊', 
      description: 'Gestão eficiente de tempo, priorização de tarefas e ambiente organizado.' 
    },
    { 
      name: 'Pensamento Crítico', 
      icon: '🎯', 
      description: 'Análise profunda de requisitos e tomada de decisões fundamentadas em dados e experiência.' 
    },
    { 
      name: 'Liderança', 
      icon: '👑', 
      description: 'Capacidade de guiar equipes e tomar iniciativa em projetos.' 
    }
  ];

  return (
    <section className="soft-skills-section">
      <h2 className="soft-skills-title">
        Soft Skills
        <div className="soft-skills-divider"></div>
      </h2>
      
      <p className="soft-skills-description">
        Além das competências técnicas, desenvolvi habilidades interpessoais que me permitem trabalhar de forma eficaz em qualquer ambiente profissional.
      </p>
      
      <div className="soft-skills-grid">
        {softSkills.map((skill, index) => (
          <div key={index} className="soft-skill-card">
            <div className="soft-skill-decoration"></div>
            
            <div className="soft-skill-header">
              <div className="soft-skill-icon-wrapper">
                <span className="soft-skill-icon">
                  {skill.icon}
                </span>
              </div>
              <h3 className="soft-skill-name">
                {skill.name}
              </h3>
            </div>
            
            <p className="soft-skill-description">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftSkills;