import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/css/App.css';
import ArtistPage from './components/ArtistPage/ArtistPage';
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage/LandingPage';
import { client } from './GraphQL/client';
import ReleasePage from './components/ReleasePage/ReleasePage';
import Blog from './components/Blog/Blog';
import BlogPost from './components/Blog/BlogPost';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/artists/:id" component={ArtistPage} />
          <Route exact path="/releases/:id" component={ReleasePage} />
          <Route
            exact
            path="/blog/:id"
            component={(props: any) =>
              BlogPost(parseInt(props.match.params.id))
            }
          />
          <Route exact path="/blog" component={Blog} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
