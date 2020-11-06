import React from 'react';
import { Provider } from "react-redux";
import { render, fireEvent } from '@testing-library/react';
import ComponentRegistry from './component-registry';
import {configureStore} from '../../store';
describe('Component-registry', () => {
  test('on render', () => {
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
    
    const { container } = render(
      <Provider store={store}>
        <ComponentRegistry data={{
          type : "COMPOSE_EMAIL"
        }} />
      </Provider>
    );
    const cmForm:any = container.querySelector('#compose-modal-form');
    expect(cmForm).toBeInTheDocument();
  })
})