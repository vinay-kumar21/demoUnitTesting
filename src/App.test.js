import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

import { findByTestAttr } from '../test/testUtils';

const setup = ()=>{
const wrapper= shallow(<App />)
return wrapper;
}


it('App render without any error',()=>{
const wrapper = setup();
const appComponent = findByTestAttr(wrapper,'component-app');
expect(appComponent.length).toBe(1);
});


