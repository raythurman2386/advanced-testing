import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

afterEach(rtl.cleanup);

describe('Dashboard Suite', () => {
  it('Snapshot Test', () => {
    // ready to test!
    const wrapper = rtl.render(<Dashboard />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
  it('Closes the door', async () => {
    const wrapper = rtl.render(<Dashboard />);
    await wrapper.findByText(/open/i);

    const close = wrapper.getByText(/close/i);
    rtl.act(() => {
      rtl.fireEvent.click(close);
    });

    expect(wrapper.queryByText(/close/i)).not.toBe(/open/i);
  });
});
