import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Sidebar from './index';
import {menuList} from './config';
describe('EmailOperation component', () => {
  test('on render', () => {
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
    
    const { getByText } = render(<Sidebar/>);

    menuList.forEach(({title, subMenu})=>{
      expect(getByText(title)).toBeInTheDocument();
    })
  })
})