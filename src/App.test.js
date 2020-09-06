import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

//ENZYME
import Enzyme, { configure, shallow } from 'enzyme'; //shallow just look to the component
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("Couter Testing", () => {

  let wrapper;  

  beforeEach(() =>{
    wrapper = shallow(<App />);
  });

  test('render title of counter', () => {
    expect(wrapper.find("h1").text()).toContain('This is counter app');
    // const { getByText } = render(<App />);
    // const linkElement = getByText('This is counter app');
    // expect(linkElement).toBeInTheDocument();
  });

  test("resnder a button with text of `increment`", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment")
  });

  test("render the initial value of state in a div", () => {
    expect(wrapper.find('#counter-value').text()).toBe("0");
  });

});

