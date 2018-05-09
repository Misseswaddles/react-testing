import React from 'react';
import { shallow, mount } from 'enzyme';
import Counter from './Counter';

describe('Counter', () => {
    it('Should increment when clicking on the increment button', () => {
        const wrapper = mount(<Counter />);

        // console.log(wrapper.find('button'));

        expect(wrapper.find('button')).toHaveLength(2);
        wrapper.find('.Counter__button--increment').simulate('click').simulate('click');
        expect(wrapper).toMatchSnapshot();
    });

    it('Should decrement when clicking on the decrement button', () => {
        const wrapper = mount(<Counter />);

        // console.log(wrapper.find('button'));

        expect(wrapper.find('button')).toHaveLength(2);
        wrapper.find('.Counter__button--decrement').simulate('click').simulate('click');
        expect(wrapper).toMatchSnapshot();
    });
});