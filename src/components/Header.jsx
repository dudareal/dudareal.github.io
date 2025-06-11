import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="profile-section">
        <div className="profile-photo">
          <img src="assets/components/dudaprofile.jpg" alt="" />
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