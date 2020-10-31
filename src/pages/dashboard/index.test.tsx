import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './index';
import {dashboardProps} from '../../types';
import {configureStore} from '../../store';
import { Provider } from "react-redux";
test('renders dashboard', () => {
  const store = configureStore();
  
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }))
  });

  const { getByText } = render(
    <Provider store={store}>
      <div className="App">
        <Dashboard />
      </div>
    </Provider>
  );
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
