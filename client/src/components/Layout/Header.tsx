import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <div className="relative flex flex-row font-bold text-green-400 bg-gray-800">
        <div>
          <Link to="/">
            <button className="p-4 font-bold hover:bg-gray-500">fig.</button>
          </Link>
        </div>
        <div className="absolute right-0">
          <Link to="/home">
            <button className="p-4 font-bold hover:bg-gray-500">browse.</button>
          </Link>
          <Link to="/blog">
            <button className="p-4 font-bold hover:bg-gray-500">blog.</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
