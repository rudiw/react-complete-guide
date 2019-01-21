import React from 'react';
import cssClasses from './Cockpit.css';
import Aux from '../../hoc/Auxiliary';


const cockpit = (props) => {

    let btnClass = cssClasses.Button;

    const classes = [];

    if (props.people.length <= 2) {
      classes.push(cssClasses.red);
    }
    if (props.people.length <= 1) {
      classes.push(cssClasses.bold);
    }

    if (props.visible) {
        btnClass = [cssClasses.Button, cssClasses.Red].join(' ');
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
        
            <p className={classes.join(' ')}>This is really working!</p>

            <button
                className={btnClass}
                onClick = { props.onTogglePersonDiv } >
                    Toggle Person Div
            </button>

            <button onClick={props.login}>
                Log In
            </button>
        </Aux>
    );
};

export default cockpit;
