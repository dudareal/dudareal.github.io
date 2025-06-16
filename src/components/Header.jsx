import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="profile-section">
        <div className="profile-photo">
          <img src="https://avatars.githubusercontent.com/u/160789678?s=400&u=2379b1385d961abad8b45a7d204ca07bb3c64cf8&v=4" alt="Foto de Perfil de Duda Real" class="profile-photo"/>
        </div>
        <h1 className="name">Eduarda Real</h1>
        <div className="age-email">
          <p>17 anos • dudarealferreira07@gmail.com@gmail.com</p>
        </div>
        <p className="title">Desenvolvedora front-end em formação☺️</p>
      </div>
    </header>
  );
};

export default Header;