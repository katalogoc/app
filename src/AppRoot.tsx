import React, { Suspense } from 'react';
import App from './App';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import environment from './environment';

export function AppRoot() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <App />
    </RelayEnvironmentProvider>
  );
}
