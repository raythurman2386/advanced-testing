import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

afterEach(rtl.cleanup);

describe('Controls Suite', () => {
  it('Creates a snapshot', () => {
    // ready to test!
    const wrapper = rtl.render(<Controls />);
    wrapper.debug();
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
  it('Should Render the buttons', () => {
    const wrapper = rtl.render(<Controls />);
    const buttons = wrapper.getAllByRole('button');
    expect(buttons.length).toBe(2);
  });
});
