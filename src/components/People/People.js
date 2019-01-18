import React, {Component} from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class People extends Component {

    constructor(props) {
        super(props);
        console.log('[People.js] Inside constructor: ', props);
    }

    componentWillMount() {
        console.log('[People.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[People.js] Inside componentDidMount()');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE People.js] Inside shouldComponentUpdate');
        return nextProps.people !== this.props.people;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE People.js] Inside componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('[UPDATE People.js] Inside componentDidUpdate');
    }

    render () {
        console.log('[People.js] Inside render()');

        return this.props.people.map( (person, index) => {
            return <ErrorBoundary key={person.id}>
                <Person
                    name={person.name}
                    age={person.age}
                    remove={() => this.props.onRemovePerson(index)}
                    changeName={(event) => this.props.onChangeName(event, person.id)}
                />
              </ErrorBoundary>
        })
    }
}

export default People;
