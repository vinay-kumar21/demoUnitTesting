import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = (props={},state=null)=>{
const wrapper= shallow(<App {...props}/>)
if(state) wrapper.setState(state)
return wrapper;
}

const findByTestAttr = (wrapper,val)=>{
return wrapper.find(`[data-test="${val}"]`)
}

test('render without any error',()=>{
const wrapper = setup();
const appComponent = findByTestAttr(wrapper,'component-app');
expect(appComponent.length).toBe(1);
});
test('render increment button',()=>{
  const wrapper = setup();
  const button = findByTestAttr(wrapper,'increment-button');
  expect(button.length).toBe(1);
});
test('render counter display',()=>{
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper,'counter-display');
  expect(counterDisplay.length).toBe(1);
});
test('counter starts at 0',()=>{
  const wrapper = setup();
 const initialStateCounter =wrapper.state('count');
  expect(initialStateCounter).toBe(0);

});
test('Clicking button increments counter display',()=>{
  const count =2;
  const wrapper=setup(null,{count});
  const button = findByTestAttr(wrapper,'increment-button');
  button.simulate('click');
  const counterDisplay = findByTestAttr(wrapper,'counter-display');
  expect(counterDisplay.text()).toContain(count+1)

});

test('Clicking button decrements counter display',()=>{
  const count =1;
  const wrapper=setup(null,{count});
  const button = findByTestAttr(wrapper,'decrement-button');
  button.simulate('click');
  const counterDisplay = findByTestAttr(wrapper,'counter-display');
  expect(counterDisplay.text()).toContain(count-1)

});