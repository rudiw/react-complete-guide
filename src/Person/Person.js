import React from 'react';
import './Person.css';

const person = (upPerson) => {
    return (
        <div className="Person">
            <p onClick={upPerson.switchName}>I'am {upPerson.name} and I am {upPerson.age} years old! {upPerson.children}</p>

            <input type="text" onChange={upPerson.changeName} value={upPerson.name}></input>
        </div>
    )
}

export default person;