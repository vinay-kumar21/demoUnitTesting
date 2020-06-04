import React from 'react';
import {shallow} from 'enzyme';
import Input from './Input';

import { findByTestAttr,checkProps } from '../test/testUtils';

const setup = (secretWord='Party')=>{
const wrapper= shallow(<Input secretWord={secretWord}/>)
return wrapper;
}

describe('Input Component',()=>{

    const defaultProps={
        secretWord:'Test'
    }

    it ('Checking Prop types',()=>{
        checkProps(Input,defaultProps);

    })
    it('render without any error',()=>{
        const wrapper = setup();
        const appComponent = findByTestAttr(wrapper,'component-input');
        expect(appComponent.length).toBe(1);
        });
})

