import React, { Component } from 'react';
import cssClasses from './App.css';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';


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

    let people = null;

    if (this.state.visible) {
      people = (
        <People 
          people={this.state.people}
          onRemovePerson={this.removePerson}
          onChangeName={this.changeName}
        />
      );
    }

    return (
      <div className={cssClasses.App}>
        <Cockpit
          visible={this.state.visible}
          people={this.state.people}
          onTogglePersonDiv={this.togglePersonDiv}
        />
        {people}
      </div>
    );
    // return React.createElement('div', {className: 'App'},
      // React.createElement('h1', null, 'I\'m a React App!!!'));
  }
}

export default App;
