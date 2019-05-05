import React, { useState } from 'react';
//import ChoiceContainer from './ChoiceContainer'
import './App.css';

// function App() {
class App extends React.Component{

  // Declare a new state variable, which we'll call "count"
  //const [count, setCount] = useState(0);
  //The Star Wars button is initialized at 20, the Star Trek button is initialized at 40
  state = {clicked: false, starWarsCount: 20, starTrekCount: 40}

  buttonHandler = () => {
    console.log("Button was clicked");
  }
  render(){
    return (
      <div className="App">
        <h1>Star Trek or Star Wars</h1>
        <div>
          <button onClick={() => this.buttonHandler()}>Star Wars | {this.state.starWarsCount}</button>
        </div>
        <div>
          <button onClick={() => this.buttonHandler()}>Star Trek | {this.state.starTrekCount}</button>
        </div>
      </div>
    );
  }
}

export default App;

      //
      // <button>button one </button>
      // <button>button two</button>
      // <p>You clicked {count} times</p>
      // <button onClick={() => setCount(count + 1)}>
      //   Click me
      // </button>
