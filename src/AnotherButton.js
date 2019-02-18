import React from 'react';
import withCounter from './CounterHOC';

const AnotherButton = (props) => {
    return (
        <button onClick={props.onClick}>Another button with {props.counter} clicks</button>
    );
};

export default withCounter(AnotherButton);