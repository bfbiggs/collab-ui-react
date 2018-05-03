import React from 'react';
import { shallow } from 'enzyme';
import EditableTextField from '@collab-ui/react/EditableTextField';

describe('tests for <EditableTextField />', () => {
  it('should render an Editable Textfield', () => {
    const wrapper = shallow(<EditableTextField />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render one Editable Textfield', () => {
    const container = shallow(<EditableTextField />);

    expect(container.find('span').length).toEqual(1);
    expect(container.find('input').length).toEqual(0);
  });

  it('should click on Editable Textfield', () => {
    const container = shallow(<EditableTextField inputText='Hello World' />);
    container.find('span').simulate('click');

    expect(container.find('span').length).toEqual(0);
    expect(container.find('Input').length).toEqual(1);
  });

  it('should click on Editable Textfield, edit and save', () => {
    const container = shallow(<EditableTextField inputText={'Hello World'}/>);
    container.find('span').simulate('click');
    container.find('Input').simulate('keyDown', { keyCode: 27, key: 'Enter' });

    expect(container.find('span').text()).toEqual('Hello World');
    expect(container.find('span').length).toEqual(1);
    expect(container.find('Input').length).toEqual(0);
  });
});
