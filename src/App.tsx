import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router } from './Router';
import { AppFrame } from './containers/AppFrame';
import { Login } from './containers/Login';
import './global.css';

const isLoggedIn = true;

interface AppProps {}

function App({}: AppProps) {
  if (!isLoggedIn) {
    return <Login />;
  }
  return (
    <AppFrame>
      <Router />
    </AppFrame>
  );
}

export default hot(App);
