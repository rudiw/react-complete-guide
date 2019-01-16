import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    people: [
      {name: 'Oey', age: 28},
      {name: 'Rudi', age: 26},
      {name: 'Wijaya', age: 30}
    ],
    tmp: 'tmp value'
  }

  switchName = (newName) => {
    // console.log('Was clicked!');

    /**
    START - DON'T DO THIS
    this.state.people[0].name = 'Oey Lengkap';
    END - DON'T DO THIS
     */

     this.setState({
      people: [
        {name: newName, age: 28},
        {name: 'Rudi', age: 26},
        {name: 'Wijaya', age: 35}
      ],
      visible: false
     });
    
    console.log(this.state.tmp);
    console.log('switchName');
  }

  changeName = (event) => {
     this.setState({
      people: [
        {name: 'Oey', age: 28},
        {name: event.target.value, age: 26},
        {name: 'Wijaya', age: 30}
      ]
     });

     console.log('changeName');
  }

  togglePersonDiv = () => {
    const currentVisible = this.state.visible
    this.setState({
      visible: !currentVisible
    });
  }

  render() {
    const btnStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let people = null;

    if (this.state.visible) {
      people = (
        <div>
          {
            this.state.people.map(person => {
              return <Person
                  name={person.name}
                  age={person.age}
               />
            })
          };
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        
        <p>This is really working!</p>

        {/* <button
          style={btnStyle}
          onClick = { () => this.switchName('Oey Lengkap pake tombol') } >
            Swicth Names
        </button> */}

        <button
          style={btnStyle}
          onClick = { this.togglePersonDiv } >
            Toggle Person Div
        </button>

        {people}
        
      </div>
    );
    // return React.createElement('div', {className: 'App'},
      // React.createElement('h1', null, 'I\'m a React App!!!'));
  }
}

export default App;
