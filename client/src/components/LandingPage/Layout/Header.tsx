import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="relative flex flex-row font-bold text-green-400 bg-gray-900">
      <div>
        <button className="p-4 font-bold hover:bg-gray-500">fig.</button>
      </div>
      <div className="absolute right-0">
        <button className="p-4 font-bold hover:bg-gray-500">artists.</button>
      </div>
    </div>
  );
};

export default Header;
