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

  removePerson = (rowIndex) => {
    //1. not copy
    // const currentPeople = this.state.people;
    //2. copy first
    // const currentPeople = this.state.people.slice();
    //3. put to new variable (spreads out)
    const currentPeople = [...this.state.people];

    currentPeople.splice(rowIndex, 1);

    this.setState({
      people: currentPeople
    });
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
            this.state.people.map( (person, index) => {
              return <Person
                  name={person.name}
                  age={person.age}
                  remove={() => this.removePerson(index)}
                  // changeName={this.changeName}
               />
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        
        <p>This is really working!</p>

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
