import React from "react";

import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <img src="https://www.freepnglogos.com/uploads/star-fox-png-lgo-23.png" />
        <div>
          <span>My Profile</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
