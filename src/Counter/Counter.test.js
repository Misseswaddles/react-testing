import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';

import Counter from './Counter';

describe('Counter', () => {
    it('Smoke test (make sure the component renders', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Counter />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Should render with a counter value and buttons', () => {
        // Create a snapshot
        const component = TestRenderer.create(<Counter />);
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('Should increment the counter by one when calling increment()', () => {
        const component = TestRenderer.create(<Counter />);
        component.getInstance().increment();
        expect(component.toJSON()).toMatchSnapshot();
    });
});