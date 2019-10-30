import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

afterEach(rtl.cleanup);

describe('Display Suite', () => {
  it('Snapshot Test', () => {
    // ready to test!
    const wrapper = rtl.render(<Display />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
  it('Should be unlocked', () => {
    const wrapper = rtl.render(<Display />);
    const unlocked = wrapper.getByText(/unlocked/i);
    expect(unlocked).toBeVisible();
  });
});
