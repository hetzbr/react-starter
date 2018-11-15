import React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from './hello-world';

describe('HelloWorld', () => {
  const wrapper = shallow(<HelloWorld />);

  it('should render hello world icon', () => {
    expect(wrapper.find('.hello-world-icon')).toHaveLength(1);
  });

  it('should render hello world text', () => {
    expect(wrapper.find('.hello-world-text')).toHaveLength(1);
  });
});
