import React, { PureComponent } from 'react';
import cssClasses from './App.css';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';


class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside constructor: ', props);
    this.state = {
      people: [
        {id: 'p1', name: 'Oey', age: 28},
        {id: 'p2', name: 'Rudi', age: 26},
        {id: 'p3', name: 'Wijaya', age: 30}
      ],
      tmp: 'tmp value',
      visible: false
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  // for using PureComponent
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate');
  //   return nextState.people !== this.state.people
  //     || nextState.visible !== this.state.visible;
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState) {
      console.log('[UPDATE App.js] Inside componentWillUpdate');
  }

  componentDidUpdate() {
      console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  componentWillReceiveProps() {
    console.log('[UPDATE App.js] Inside componentWillReceiveProps');
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
    console.log('[App.js] Inside render()');

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
      <WithClass classes={cssClasses.App}>
        <button onClick={
            () => {
              this.setState({
                visible: true
              })
            }
          }>
          Show People
        </button>

        <Cockpit
          appTitle={this.props.title}
          visible={this.state.visible}
          people={this.state.people}
          onTogglePersonDiv={this.togglePersonDiv}
        />
        {people}
      </WithClass>
    );
    // return React.createElement('div', {className: 'App'},
      // React.createElement('h1', null, 'I\'m a React App!!!'));
  }
}

export default App;
