import React from 'react';
import IconSearch from '../../icons/icon-search.svg';
const input = ({ type, value, placeholder, onChange }) => {
  return (
    <div className=" relative">
      <input
        className="border-1 p-2 px-12 rounded-xl"
        type={type}
        value={value}
        placeholder={placeholder}
      />
      <img
        src={IconSearch}
        alt="Search Icon"
        className="absolute left-3.5 bottom-3.5"
      />
    </div>
  );
};

export default input;
