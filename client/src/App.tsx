import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/css/App.css';
import ArtistPage from './components/ArtistPage';
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/artists/" component={ArtistPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
