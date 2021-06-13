import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/css/App.css';
import ArtistPage from './components/ArtistPage';
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage/LandingPage';
import { client } from './GraphQL/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/artists/:id" component={ArtistPage} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
