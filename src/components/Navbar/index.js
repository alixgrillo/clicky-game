import React from "react";

import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
          Puppy Click Game
        </a>
        <h4 className="mx-auto">You Guessed Correctly!
        </h4>
        <h4 className="mx-auto">Current Score: 0 | Top Score: 0
        </h4>
      
    </nav>
  );
}

export default Navbar;
