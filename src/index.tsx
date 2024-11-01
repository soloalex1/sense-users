import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import Routes from './routes';
import GlobalStyle from './globalStyles';

import { store } from './store';

const rootEl = document.getElementById('root');

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <GlobalStyle />
        <Routes />
      </Provider>
    </React.StrictMode>
  );
}
