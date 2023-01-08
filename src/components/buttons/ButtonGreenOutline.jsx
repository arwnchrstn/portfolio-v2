import React from "react";

const ButtonGreenOutline = ({ children, properties, onClick }) => {
  return (
    <button
      className={`bg-transparent text-green rounded border-green px-3 py-1 ${properties}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonGreenOutline;
