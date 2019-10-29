import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './dashboard/Dashboard';

afterEach(rtl.cleanup);

describe('Dashboard Suite', () => {
  it('renders without crashing', () => {
    // ready to test!
    const wrapper = rtl.render(<Dashboard />);

    wrapper.debug();
  });
});
