import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="profile-section">
        <div className="profile-photo">
          👨‍💻
        </div>
        <h1 className="name">Seu Nome</h1>
        <div className="age-email">
          <p>25 anos • seuemail@gmail.com</p>
        </div>
        <p className="title">Desenvolvedor Full Stack</p>
      </div>
    </header>
  );
};

export default Header;