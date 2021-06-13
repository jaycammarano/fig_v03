import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <div className="relative flex flex-row font-bold text-green-400 bg-gray-800">
        <div>
          <button className="p-4 font-bold hover:bg-gray-500">fig.</button>
        </div>
        <div className="absolute right-0">
          <button className="p-4 font-bold hover:bg-gray-500">artists.</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
