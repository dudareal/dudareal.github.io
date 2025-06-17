import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="profile-section">
        <div>
          <img src="https://avatars.githubusercontent.com/u/160789678?s=400&u=2379b1385d961abad8b45a7d204ca07bb3c64cf8&v=4" alt="Foto de Perfil de Duda Real" class="profile-photo"/>
        </div>
        <h1 className="name">Eduarda Real</h1>
        <div className="age-email">
          <p>TI | ADM | MKT Digital </p>
        </div>
        <p><img src="https://emojigraph.org/media/facebook/flag-brazil_1f1e7-1f1f7.png" alt="Bandeira do Brasil" class="bandeira"/></p>
      </div>
    </header>
  );
};

export default Header;