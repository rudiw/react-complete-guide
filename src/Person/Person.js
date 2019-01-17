import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (upPerson) => {

    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return (
        <div className="Person" style={style}>
            <p onClick={upPerson.remove}>I'am {upPerson.name} and I am {upPerson.age} years old! {upPerson.children}</p>

            <input type="text" onChange={upPerson.changeName} value={upPerson.name}></input>
        </div>
    )
}

export default Radium(person);