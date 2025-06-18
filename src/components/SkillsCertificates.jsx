import React, { useState } from 'react';

const SkillsCertificates = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skillsData = {
    frontend: [
      { name: 'React', level: 30, icon: '⚛️' },
      { name: 'JavaScript', level: 15, icon: '🟨' },
      { name: 'HTML/CSS', level: 80, icon: '🎨' },
      { name: 'Vue.js', level: 25, icon: '💚' },
    ],
    backend: [
      { name: 'Node.js', level: 20, icon: '🟢' },
      { name: 'Python', level: 82, icon: '🐍' },
    ],
    tools: [
      { name: 'Git', level: 92, icon: '📋' },
      { name: 'VS Code', level: 95, icon: '💻' },
    ]
  };

  const certificates = [
    {
      id: 1,
      title: 'Aluna Destaque',
      issuer: 'E.E Manoel Ignacio',
      date: '2025',
      description: 'Certificação por obter melhor comportamento e melhores notas durante o 1º bimestre.',
      icon: '🏫',
      verified: true,
      link: 'src/assets/alunadestaque.jpeg'
    },
    {
      id: 2,
      title: 'Medalha de Bronze',
      issuer: 'OBGEO',
      date: '2024',
      description: 'Com uma carga de 128h, meu grupo teve como conquista a medalha de bronze das Olímpiadas Brasileiras da Geografia.',
      icon: '🥉',
      verified: true,
      link: 'src/assets/OBGEO.jpeg'
    },
    {
      id: 3,
      title: 'Certificado de Reconhecimento',
      issuer: 'E.E Manoel Ignacio',
      date: '2023',
      description: 'Reconhecimento por obter a maior nota da sala na matéria de exatas.',
      icon: '🎖️',
      verified: true,
      link: 'src/assets/MATEMATICA.jpeg'
    },
    {
      id: 4,
      title: 'ONHB',
      issuer: 'Olímpiada Nacional em História do Brasil',
      date: '2025',
      description: 'Carga de 24h na ONHB.',
      icon: '🗺️',
      verified: true,
      link: 'src/assets/ONHB.jpeg'
    },
    {
      id: 5,
      title: 'Área de Perigo',
      issuer: 'Marelli',
      date: '2025',
      description: 'Treinamento de Phishing.',
      icon: '🔒',
      verified: true,
      link: 'src/assets/MARELLI.jpeg'
    },
    {
      id: 6,
      title: 'Auxiliar Técnico em Desenvolvimento de Sistemas',
      issuer: 'E.E Manoel Ignacio',
      date: '2024',
      description: 'Formada em auxiliar técnica no 1º período do curso de DS, com uma carga de 570h.',
      icon: '💻',
      verified: true,
      link: 'src/assets/TECNICO.jpeg'
    }
  ];

  const SkillBar = ({ skill }) => (
    <div className="skill-bar-container">
      <div className="skill-bar-header">
        <span className="skill-icon">{skill.icon}</span>
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar-track">
        <div 
          className="skill-bar-fill"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  const CertificateCard = ({ certificate }) => (
    <div className="certificate-card">
      <div className="certificate-header">
        <div className="certificate-icon">{certificate.icon}</div>
        <div className="certificate-verified">
          {certificate.verified && <span className="verified-badge">✅ Verificado</span>}
        </div>
      </div>
      
      <h3 className="certificate-title">{certificate.title}</h3>
      <p className="certificate-issuer">{certificate.issuer}</p>
      <p className="certificate-date">{certificate.date}</p>
      
      <p className="certificate-description">{certificate.description}</p>
      
      <div className="certificate-footer">
        <span className="credential-id">ID: {certificate.credentialId}</span>
        <a 
          href={certificate.link} 
          className="certificate-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Certificado 🔗
        </a>
      </div>
    </div>
  );

  return (
    <section className="skills-certificates">
      <h2 className="section-title">Habilidades & Certificações</h2>
      
      <div className="tabs-container">
        <button 
          className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          💪 Habilidades
        </button>
        <button 
          className={`tab-button ${activeTab === 'certificates' ? 'active' : ''}`}
          onClick={() => setActiveTab('certificates')}
        >
          🏆 Certificados
        </button>
      </div>

      {activeTab === 'skills' && (
        <div className="skills-content">
          <div className="skills-categories">
            <div className="skill-category">
              <h3 className="category-title">🎨 Frontend</h3>
              <div className="skills-list">
                {skillsData.frontend.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">⚙️ Backend</h3>
              <div className="skills-list">
                {skillsData.backend.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">🛠️ Ferramentas</h3>
              <div className="skills-list">
                {skillsData.tools.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'certificates' && (
        <div className="certificates-content">
          <div className="certificates-stats">
            <div className="stat-item">
              <span className="stat-number">{certificates.length}</span>
              <span className="stat-label">Certificados</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{certificates.filter(c => c.verified).length}</span>
              <span className="stat-label">Verificados</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2025</span>
              <span className="stat-label">Último</span>
            </div>
          </div>

          <div className="certificates-grid">
            {certificates.map(certificate => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SkillsCertificates;