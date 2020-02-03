import React from 'react';
import { Link } from 'react-router-dom';
import * as theme from './AppHeader.css';

export function AppHeader() {
  return (
    <header className={theme.header}>
      <nav className={theme.nav}>
        <ul className={theme.ul}>
          <li className={theme.li}>
            <Link to="/authors">Authors</Link>
          </li>
          <li className={theme.li}>
            <Link to="/texts">Texts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
