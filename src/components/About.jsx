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

        <div className="about-highlights">
          <div className="highlight-item">
            <div className="highlight-icon">🎯</div>
            <h3>Foco em Resultados</h3>
            <p>Desenvolvimento orientado a objetivos com foco na experiência do usuário e performance.</p>
          </div>
          
          <div className="highlight-item">
            <div className="highlight-icon">🚀</div>
            <h3>Sempre Aprendendo</h3>
            <p>Constantemente me atualizando com as últimas tecnologias e tendências do mercado.</p>
          </div>
          
          <div className="highlight-item">
            <div className="highlight-icon">🤝</div>
            <h3>Trabalho em Equipe</h3>
            <p>Colaboração efetiva e comunicação clara são fundamentais para o sucesso de qualquer projeto.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;