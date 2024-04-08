// HeaderComponent.js

import './index.css'
import React from 'react';

const HeaderComponent = () => {
  return (
    <header>
      {/* Logo */}
      <div className="logo-container">
      <a href="https://imgbb.com/"><img src="https://i.ibb.co/LC3MvC8/Logo.png" alt="Logo" border="0"className="logo-image"/></a>
        <h1 className="logo-heading">LOGO</h1>
        <div className="icons">
        <a href="/search"><img src="https://i.ibb.co/k6RNf5S/search-normal.png" alt="search-normal" border="0" className="logo-image"/></a>
        <a href="/heart"><img src="https://i.ibb.co/72fdzwf/heart.png" alt="heart" border="0"className="logo-image"/></a>
        <a href="/productbag"><img src="https://i.ibb.co/XbhbbZm/shopping-bag.png" alt="shopping-bag" border="0" className="logo-image"/></a>
        <a href="/profile"><img src="https://i.ibb.co/MG1vW76/profile.png" alt="profile" border="0" className="logo-image"/></a>
        <a href="/language"><img src="https://i.ibb.co/r5ngwd0/Language.png" alt="Language" border="0" className="logo-image"/></a>
        </div>
      </div>
      <div className="tabs-container">
        <p className="tabs-heading">SHOP</p>
        <p className="tabs-heading">SKILLS</p>
        <p className="tabs-heading">STORIES</p>
        <p className="tabs-heading">ABOUT</p>
        <p className="tabs-heading">CONTACT US</p>
      </div>
      <hr />
      <div className="discover-container">
        <h1 className="discover-heading">Discover your Products</h1>
        <p className="discover-para">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br />scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </div>
     
     
    </header>
  );
};

export default HeaderComponent;
