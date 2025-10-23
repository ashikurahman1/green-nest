import React from 'react';

const Button = ({ btnText, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition font-semibold cursor-pointer"
    >
      {btnText}
    </button>
  );
};

export default Button;
