import React from 'react';
import cssClasses from './Person.css';

const person = (upPerson) => {

    const rnd = Math.random();

    if (rnd > 0.7) {
        throw new Error('Something went wrong');
    }

    return (
        <div className={cssClasses.Person}>
            <p onClick={upPerson.remove}>I'am {upPerson.name} and I am {upPerson.age} years old! {upPerson.children}</p>

            <input type="text" onChange={upPerson.changeName} value={upPerson.name}></input>
        </div>
    )
}

export default person;