import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import Routes from './routes';

import { store } from './store';

import './App.css';

const rootEl = document.getElementById('root');

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Routes />
      </Provider>
    </React.StrictMode>
  );
}
