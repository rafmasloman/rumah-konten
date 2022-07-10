import React from 'react';
import Icon from '../icons/icon';

// ? Import Icon
import CartIcon from '../../icons/card-icon/cart.svg';

const card = ({ number, text }) => {
  return (
    <div className="card flex justify-around items-center w-1/4 h-40 bg-card-bg rounded-lg relative">
      <div className="badge">
        <span className="number px-7 rounded-xl py-2 bg-btn-primary font-roboto font-bold text-white">
          {number}
        </span>
        <p className="product-content mt-2 text-card font-bold text-2xl">
          {text}
        </p>
      </div>
      <div className="outer-circle w-64 h-64 rounded-full bg-btn-primary absolute right-0"></div>
      <div className="inner-circle w-56 h-56 rounded-full bg-inner-circle absolute top-0 right-0"></div>
      <div className="icon-field z-30">
        <Icon icon={CartIcon} />
      </div>
    </div>
  );
};

export default card;
