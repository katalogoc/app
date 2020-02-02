import React from 'react';
import { hot } from 'react-hot-loader/root';
import Pages from './pages';
import Login from './pages/Login';
import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const customHistory = createBrowserHistory();

const isLoggedIn = true;

interface AppProps {}

function App({}: AppProps) {
  if (!isLoggedIn) {
    return <Login />;
  }
  return (
    <Router history={customHistory}>
      <div>
        <aside>
          <ul>
            <li>
              <Link to="/authors">Authors</Link>
            </li>
            <li>
              <Link to="/texts">Texts</Link>
            </li>
          </ul>
        </aside>
        <Pages />
      </div>
    </Router>
  );
}

export default hot(App);
