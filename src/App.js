import React, { Component } from 'react';
import Radium, {StyleRoot} from "radium";
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'sdvfzdx', name: 'Chinedu', age: 27},
      {id: 'dcvfzsd', name: 'Jide', age: 18},
      {id: 'sdcovwp', name: 'Dennis', age: 30}
    ],
    otherState: 'Another State',
    showPersons: false
  }

  switchNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(pers => pers.id === id);
    const person = {...this.state.persons[personIndex]};
    // const person = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState(
      {persons: persons}
    )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  deleteHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      padding: '10px',
      font: 'inherit',
      border: '1px solid blue',
      color: 'white',
      cusor: 'pointer',
      ':hover': {
        backgroundColor: 'lime',
        color: '#000'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = this.state.persons.map((person, index) => {
          return <Person 
          key={person.id} 
          name={person.name} 
          age={person.age} 
          click={() =>  this.deleteHandler(index)} 
          change={(event) => this.switchNameHandler(event, person.id)}/>
        });
        style.backgroundColor = 'red';
        style[':hover'] = {
          backgroundColor: 'salmon',
          color: '#000'
        }
    }
    return (
      <StyleRoot>
        <div className="App">
          <div>
            <h1>Hi, I'm Reactive!</h1>
            <p className={classes.join(' ')}>It's my first time!</p>
            <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {persons}
          </div>
      </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a reactive component!'));

  }
}

export default Radium(App);
