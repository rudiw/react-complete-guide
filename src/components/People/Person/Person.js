import React, {Component} from 'react';
import cssClasses from './Person.css';

class Person extends Component {
    render() {
        // const rnd = Math.random();

    // if (rnd > 0.7) {
    //     throw new Error('Something went wrong');
    // }

        return (
            <div className={cssClasses.Person}>
                <p onClick={this.props.remove}>I'am {this.props.name} and I am {this.props.age} years old! {this.props.children}</p>

                <input type="text" onChange={this.props.changeName} value={this.props.name}></input>
            </div>
        )
    }
}

export default Person;
