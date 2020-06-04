import React from 'react';
import {shallow} from 'enzyme';
import Input from './Input';

import { findByTestAttr } from '../test/testUtils';

const setup = ()=>{
const wrapper= shallow(<Input />)
return wrapper;
}

describe('Input Component',()=>{
    it('render without any error',()=>{
        const wrapper = setup();
        const appComponent = findByTestAttr(wrapper,'input-component');
        expect(appComponent.length).toBe(1);
        });
})

