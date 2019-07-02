import React from 'react';
import {create} from 'react-test-renderer';
import ScrollProgress from '../index';

describe('test scroll progress component', () => {
  it('snapshot scroll progress', () => {
    const container = create(<ScrollProgress />);
    expect(container.toJSON()).toMatchSnapshot();
  });
});
