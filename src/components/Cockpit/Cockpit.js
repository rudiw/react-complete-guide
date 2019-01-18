import React from 'react';
import cssClasses from './Cockpit.css';

const cockpit = (props) => {

    let btnClass = '';

    const classes = [];

    if (props.people.length <= 2) {
      classes.push(cssClasses.red);
    }
    if (props.people.length <= 1) {
      classes.push(cssClasses.bold);
    }

    if (props.visible) {
        btnClass = cssClasses.Red;
    }

    return (
        <div className={cssClasses.Cockpit}>
            <h1>{props.appTitle}</h1>
        
            <p className={classes.join(' ')}>This is really working!</p>

            <button
            className={btnClass}
            onClick = { props.onTogglePersonDiv } >
                Toggle Person Div
            </button>
        </div>
        
    );
};

export default cockpit;
