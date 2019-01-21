import React, {PureComponent} from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class People extends PureComponent {

    constructor(props) {
        super(props);
        console.log('[People.js] Inside constructor: ', props);

        this.lastPersonRef = React.createRef();
    }

    componentWillMount() {
        console.log('[People.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[People.js] Inside componentDidMount()');

        this.lastPersonRef.current.focus();
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE People.js] Inside shouldComponentUpdate');
    //     return nextProps.people !== this.props.people
    //         || nextProps.onRemovePerson !== this.props.onRemovePerson
    //         || nextProps.onChangeName !== this.props.onChangeName;
    //     // return true;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE People.js] Inside componentWillUpdate');
    }

    componentWillReceiveProps() {
        console.log('[UPDATE People.js] Inside componentWillReceiveProps');
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
                    position={index}
                    ref={this.lastPersonRef}
                    isAuthenticated={this.props.isAuthenticated}
                />
              </ErrorBoundary>
        })
    }
}

export default People;
