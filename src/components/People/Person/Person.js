import React, {Component} from 'react';
import cssClasses from './Person.css';
// import WithClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Auxiliary';
import withClassV2 from '../../../hoc/WithClassV2';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside constructor: ', props);
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
    }

    render() {
        console.log('[Person.js] Inside render()');

        // const rnd = Math.random();

    // if (rnd > 0.7) {
    //     throw new Error('Something went wrong');
    // }

        return (
            <Aux>
                <p onClick={this.props.remove}>I'am {this.props.name} and I am {this.props.age} years old! {this.props.children}</p>

                <input type="text" onChange={this.props.changeName} value={this.props.name}></input>
            </Aux>
        )
        // return[
        //         <p key="1" onClick={this.props.remove}>I'am {this.props.name}</p>,
        //         <p key="2">I am {this.props.age} years old! {this.props.children}</p>,
        //         <input  key="3" type="text" onChange={this.props.changeName} value={this.props.name}></input>
        // ]
    }
}

export default withClassV2( Person, cssClasses.Person );
