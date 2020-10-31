import React from 'react';
import '../../../__mocks___/matchMedia';
import { Provider } from "react-redux";
import { render, fireEvent } from '@testing-library/react';
import Ops from './ops';
import {configureStore} from '../../store';
describe('EmailOperation component', () => {
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
      <div className="App">
        <Ops/>
      </div>
    </Provider>);;
  };

  let wrapper:any;
  beforeAll(() => {
    wrapper = setUpFn();
  });

  test('on render', () => {    
    const { getByText } = wrapper;
    // const root = getByTestId(`block-${position.row}-${position.column}`);
    expect(getByText('Inbox')).toBeInTheDocument();
    expect(getByText('Send email')).toBeInTheDocument();
  })

})