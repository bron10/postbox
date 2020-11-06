import React from 'react';
import { Provider } from "react-redux";
import ComposeModal from './compose-modal';
import {configureStore} from '../../store';
import { render, fireEvent} from '@testing-library/react';

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
    
    return render(<Provider store={store}>
      <ComposeModal/>
    </Provider>);
  };

  let wrapper:any;
  beforeEach(() => {
    wrapper = setUpFn();
  });

  
  test('Checkon elements', () => {    
    const { container } = (wrapper);
    const subjectInput = container.querySelector('#compose-modal-form_subject');
    const toInput = container.querySelector('#compose-modal-form_to');
    const ccInput = container.querySelector('#compose-modal-form_cc');
    const bodyInput = container.querySelector('#compose-modal-form_body');
    expect(subjectInput).toBeInTheDocument();
    expect(toInput).toBeInTheDocument();
    expect(ccInput).toBeInTheDocument();
    expect(bodyInput).toBeInTheDocument();
  })
  
  test('Check on submit test without data', () => {    
    const { container } = (wrapper);
    const cmForm:any = container.querySelector('#compose-modal-form');
    const handleSubmit = jest.fn(); 
    cmForm.onsubmit = handleSubmit;
    fireEvent.submit(cmForm);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  })

  test('Check on submit test with data', async() => {   
    const { container } = (wrapper);
    const cmForm:any = container.querySelector('#compose-modal-form');
    const subjectInput = container.querySelector('#compose-modal-form_subject');
    const toInput = container.querySelector('#compose-modal-form_to');
    const ccInput = container.querySelector('#compose-modal-form_cc');
    const bodyInput = container.querySelector('#compose-modal-form_body');
    // const handleSubmit = jest.fn(); 
    // cmForm.onsubmit = handleSubmit;
    
      fireEvent.change(subjectInput, { target: { value: "test email" } });
      fireEvent.change(toInput, { target: { value: ["jerry@gmail.com"] } });
      fireEvent.change(ccInput, { target: { value: ["test@gmail.com"] } });
      fireEvent.change(bodyInput, { target: { value: "This contains body of email" } });
      fireEvent.submit(cmForm);
    
  })

})