import React from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const people = (props) => (
    props.people.map( (person, index) => {
        return <ErrorBoundary key={person.id}>
            <Person
                name={person.name}
                age={person.age}
                remove={() => props.onRemovePerson(index)}
                changeName={(event) => props.onChangeName(event, person.id)}
            />
          </ErrorBoundary>
      })
);

export default people;
