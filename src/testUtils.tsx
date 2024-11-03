import React, { ReactElement } from 'react';
import fetchMock from 'jest-fetch-mock';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from './store';
import { BrowserRouter } from 'react-router-dom';

fetchMock.enableMocks();

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
