import React from "react";

import "./Button.css";

const Button = ({ handleClick }) => {
  return (
    <button className="phrase__btn" onClick={handleClick}>
      <span>See Another ↩↪</span>
    </button>
  );
};

export default Button;
