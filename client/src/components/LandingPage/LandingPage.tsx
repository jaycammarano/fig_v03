import React from 'react';
import logo from '../../logo.svg';

const LandingPage: React.FC = () => {
  return (
    <header className="text-green-500">
      <img src={logo} className="text-green-500" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="text-green-500"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};

export default LandingPage;
