import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Vamos Trabalhar Juntos!</h3>
        <p>
          Estou sempre aberto a novas oportunidades e projetos interessantes. 
          Se você tem uma ideia ou precisa de um desenvolvedor, vamos conversar!
        </p>
        
        <div className="social-links">
          <a 
            href="https://github.com/seuusuario" 
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            📁
          </a>
          <a 
            href="https://linkedin.com/in/seuusuario" 
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            💼
          </a>
          <a 
            href="mailto:seuemail@gmail.com" 
            className="social-link"
            title="Email"
          >
            ✉️
          </a>
          <a 
            href="https://twitter.com/seuusuario" 
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          >
            🐦
          </a>
          <a 
            href="https://instagram.com/seuusuario" 
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            📷
          </a>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Seu Nome. Feito com ❤️ e muito ☕</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;