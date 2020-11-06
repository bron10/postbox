import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from './index';
import {configureStore} from '../../store';
import { Provider } from "react-redux";

describe('Login component', () => {
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

    return (<Provider store={store}>
        <BrowserRouter>
        <Route exact path="/login">
          <Login />
        </Route>
        </BrowserRouter>
      </Provider>)
    
  };

  let wrapper:any;
  beforeAll(() => {
    wrapper = setUpFn();
  });

  test('should match its own snapshot', () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
