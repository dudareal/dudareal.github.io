import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Vamos Trabalhar Juntos!</h3>
        <p>
          Estou sempre aberta a novas oportunidades e projetos interessantes. 
          Se você tem uma ideia ou precisa de uma desenvolvedora, vamos conversar!
        </p>
        
        <div className="social-links">
          <a 
            href="https://github.com/dudareal" 
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            📁
          </a>
          <a 
            href="https://www.linkedin.com/in/eduarda-real-6b44b52ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            💼
          </a>
          <a 
            href="mailto:dudarealferreira07@gmail.com" 
            className="social-link"
            title="Email"
          >
            ✉️
          </a>
          <a 
            href="https://www.instagram.com/whoissreal?igsh=MTBtbHg1c3pobGYxMg%3D%3D&utm_source=qr" 
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            📷
          </a>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Eduarda Real. Feito com ❤️ e muito ☕!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;