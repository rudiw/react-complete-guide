import React, {Component} from 'react';
import PropTypes from 'prop-types';

import cssClasses from './Person.css';
// import WithClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Auxiliary';
import withClassV2 from '../../../hoc/WithClassV2';
import {AuthContext} from '../../../containers/App';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside constructor: ', props);

        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');

        if (this.props.position === 0) {
            this.inputElement.current.focus();
        }
    }

    focus() {
        this.inputElement.current.focus();
    }

    render() {
        console.log('[Person.js] Inside render()');

        // const rnd = Math.random();

    // if (rnd > 0.7) {
    //     throw new Error('Something went wrong');
    // }

        return (
            <Aux>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm authenticated</p> : null}
                </AuthContext.Consumer>

                <p onClick={this.props.remove}>I'am {this.props.name} and I am {this.props.age} years old! {this.props.children}</p>

                <input
                    type="text"
                    onChange={this.props.changeName}
                    value={this.props.name}
                    ref={this.inputElement}
                >
                </input>
            </Aux>
        )
        // return[
        //         <p key="1" onClick={this.props.remove}>I'am {this.props.name}</p>,
        //         <p key="2">I am {this.props.age} years old! {this.props.children}</p>,
        //         <input  key="3" type="text" onChange={this.props.changeName} value={this.props.name}></input>
        // ]
    }
}

Person.propTypes = {
    remove: PropTypes.func,
    changeName: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
}

export default withClassV2( Person, cssClasses.Person );
// export default Person;
