import React from 'react';

const button = ({ onClick, text, color }) => {
  return (
    <button
      className={`${color} px-16 py-3.5 text-white text-2xl rounded-xl font-roboto `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default button;
