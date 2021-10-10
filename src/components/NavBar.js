import React from "react";

export const NavBar = ({ children }) => {
  return (
    <nav>
      <ul className="navbar">{children}</ul>
    </nav>
  );
};
