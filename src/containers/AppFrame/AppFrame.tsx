import React from 'react';
import { AppHeader } from '../AppHeader';
import * as theme from './AppFrame.css';

interface AppFrameProps {
  children: React.ReactNode;
}

export function AppFrame({ children }: AppFrameProps) {
  return (
    <div>
      <AppHeader />
      <main className={theme.main}>{children}</main>
    </div>
  );
}
