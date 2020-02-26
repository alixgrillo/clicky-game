import React from "react";

import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-light bg-light sticky-nav">
      <a className="navbar-brand" href="/">
        Puppy Click Game
      </a>
      <h4 className="mx-auto">
        {props.win === null
          ? "Pick a dog to start the game"
          : props.win === true
          ? "You Guessed Correctly"
          : "Sorry, guess again... try again"}
      </h4>
      <h4 className="mx-auto">
        Current Score: {props.currentScore} | Top Score: {props.topScore}
      </h4>
    </nav>
  );
}

export default Navbar;
