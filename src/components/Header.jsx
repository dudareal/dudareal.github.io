import React from 'react';

const Header = () => {
  const profilePhotoUrl = 'https://www.instagram.com/p/DKx48nZyH4J_zRaeVPASRDmkwmXiVM3HZSecfU0/?igsh=MTRzczQ0NjJhbTcxdw==';
  return (
    <header className="header">
      <div className="profile-section">
        <div className="profile-photo">
          <img src={profilePhotoUrl} alt="" />
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