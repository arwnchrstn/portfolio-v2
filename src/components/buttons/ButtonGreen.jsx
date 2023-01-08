import React from "react";

const ButtonGreen = ({ children, properties, onClick }) => {
  return (
    <button
      className={`bg-green text-white rounded border-0 px-3 py-1 ${properties}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonGreen;
