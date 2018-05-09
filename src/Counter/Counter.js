import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Counter.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.initialValue
        };
    }

    increment = () => {
        this.setState((prevState) => {
            const newValue = prevState.value + 1;
            return { value: newValue };
        });
    }

    decrement = () => {
        this.setState((prevState) => {
            const newValue = prevState.value - 1;
            return { value: newValue };
        });
    }

    render() {
        return (
            <div className="Counter">
                <h2>{this.state.value}</h2>
                <button className="Counter__button Counter__button--decrement" onClick={this.decrement}>-</button>
                <button className="Counter__button Counter__button--increment" onClick={this.increment}>+</button>
            </div>
        );
    }
}

Counter.propTypes = {
    initialValue: PropTypes.number
};

Counter.defaultProps = {
    initialValue: 0
};

export default Counter;