import React from 'react';
import { Provider } from "react-redux";
import { Route, BrowserRouter } from 'react-router-dom';
import EmailList from './list';
import {configureStore} from '../../store';
import { render, fireEvent, act } from '@testing-library/react';

describe('Compose modal component', () => {
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
        // scrollWidth : jest.fn()
      }))
    });
    
    return render(
    <Provider store={store}>
      <BrowserRouter>
        <EmailList/>
      </BrowserRouter>
    </Provider>);
  };

  let wrapper:any;
  beforeEach(() => {
    wrapper = setUpFn();
  });

  
  test('Checkon elements', () => {    
    const { getByRole, getByText } = (wrapper);

    expect(getByText('date')).toBeInTheDocument();
    expect(getByText('subject')).toBeInTheDocument();
    expect(getByRole('button')).toHaveAttribute('disabled')
  })
  
  test('Check on delete email action', () => {    
    const { container } = (wrapper);
    const deleteButton:any = container.querySelector('.delete-action');
    const handleAction = jest.fn();
    deleteButton.onclick = handleAction;  
    deleteButton.disabled = false;
    fireEvent.click(deleteButton);
    expect(handleAction).toHaveBeenCalledTimes(1);
  })


})