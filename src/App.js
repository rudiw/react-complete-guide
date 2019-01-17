import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {

  state = {
    people: [
      {id: 'p1', name: 'Oey', age: 28},
      {id: 'p2', name: 'Rudi', age: 26},
      {id: 'p3', name: 'Wijaya', age: 30}
    ],
    tmp: 'tmp value'
  }

  changeName = (event, personId) => {
    const idxPerson = this.state.people.findIndex(p => {
      return p.id === personId;
    });

    //create new js object
    const personByIdx = {
      ...this.state.people[idxPerson]}
    ;
    personByIdx.name = event.target.value;

    const currentPeople = [...this.state.people];
    currentPeople[idxPerson] = personByIdx;

    this.setState({people: currentPeople});

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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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
                  changeName={(event) => this.changeName(event, person.id)}
                  key={person.id}
               />
            })
          }
        </div>
      );

      btnStyle.backgroundColor = 'red';
      btnStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const classes = [];
    if (this.state.people.length <= 2) {
      classes.push('red');
    }
    if (this.state.people.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I am a React App</h1>
          
          <p className={classes.join(' ')}>This is really working!</p>

          <button
            style={btnStyle}
            onClick = { this.togglePersonDiv } >
              Toggle Person Div
          </button>

          {people}
          
        </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'},
      // React.createElement('h1', null, 'I\'m a React App!!!'));
  }
}

export default Radium(App);
