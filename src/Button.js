import React from 'react';
import withCounter from './CounterHOC';

const Button = (props) => {
    return (
        <button onClick={props.onClick}>A button with {props.counter} clicks</button>
    );
};

export default withCounter(Button);