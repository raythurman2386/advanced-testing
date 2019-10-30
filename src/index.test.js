import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './dashboard/Dashboard';

afterEach(rtl.cleanup);

describe('Dashboard Suite', () => {
  it('Snapshot Test', () => {
    // ready to test!
    const wrapper = rtl.render(<Dashboard />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
  it('tests the button', () => {
    const wrapper = rtl.render(<Dashboard />);
    wrapper.debug();
  });
});
