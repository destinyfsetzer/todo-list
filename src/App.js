import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ListComponent from './ListComponent';

// Create state for your app.js with isClicked: false in it
// Create a button and add an onClick handler that changes the value of isClicked
// Create an input field and then a function that changes the state of text: '' to the e.target.value onChange of the input field
// Change your onClickHandler function to push the value of text into todos: []
// Now clear text in the same function
// Once you have state being changed properly create an element for each of the items in todos: []
// Now .map() over todos and show each item in the DOM. REMEMBER to give the callback function in .map() an index and provide that to each of the elements as index={index}
// Create a button on each of the elements that uses this and when clicked removes/deletes the item from todos: []


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      todo: [],
      isClicked: false
    };
  }

  updateInput = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  formSubmitTodo = (event) => {
    event.preventDefault()
    this.setState({
      todo: [...this.state.todo, this.state.input],
      input: ''
    })
  }

  //FIRST: create a method that deletes an item from state using the method setState()
  // Pass delete method as props
  deleteTodo = (i) => {
    const arrayOfTodos = this.state.todo
    arrayOfTodos.splice(i, 1)
    this.setState({
      todo: [...arrayOfTodos]
    })
  }


 render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TODO LIST
        </p>
         <form>
          <input id="todoInput" value={this.state.input} onChange={this.updateInput}/>
          <button onClick={this.formSubmitTodo}>add todo</button>
        </form>
        <ListComponent items={this.state.todo} deleteTodo={(i) => this.deleteTodo(i)}/>
      </header>
    </div>
  );
}
}

export default App;
