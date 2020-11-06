import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import EmailView from './view';
import {configureStore} from '../../store';
describe('EmailOps component', () => {
  const setUpFn = () => {
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
    
    return render(<Provider store={store}>
      <BrowserRouter>
        <EmailView/>
      </BrowserRouter>
    </Provider>);
  };

  let wrapper:any;
  beforeAll(() => {
    wrapper = setUpFn();
  });

  test('on render', () => {    
    const { container } = (wrapper);
    
    expect(container.querySelector('.ant-descriptions-title')).toBeInTheDocument();
    expect(container.querySelector('.ant-descriptions-item-label')).toBeInTheDocument();
    expect(container.querySelector('.ant-descriptions-item-content')).toBeInTheDocument();
  })

})