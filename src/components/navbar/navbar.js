import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../icons/logo.png';
import Input from '../input/input';
const navbar = () => {
  return (
    <div className="flex container mx-auto font-roboto  px-32 py-7 justify-between items-center shadow-md">
      <div className="brand flex  items-center">
        <img src={Logo} alt="Logo" />
        <span className="brand-name text-2xl font-bold font-nunito text-blue-brand ml-3.5">
          Rumahnya{' '}
          <span className="p-1 bg-blue-primary text-white rounded-md">
            Konten.
          </span>
        </span>
      </div>

      <ul className="flex font-semibold">
        <li className="mr-12">
          <Link to="/">Home</Link>
        </li>

        <li className="mr-12">
          <Link to="/paket">Paket</Link>
        </li>

        <li className="mr-12">
          <Link to="/info">Info Bisnis</Link>
        </li>

        <li className="mr-12">
          <Link to="/yes">Yes Sultra</Link>
        </li>
      </ul>

      <Input type="text" placeholder="Search Something" />
    </div>
  );
};

export default navbar;
