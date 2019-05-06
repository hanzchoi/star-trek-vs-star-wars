import React, { useState } from 'react';
//import ChoiceContainer from './ChoiceContainer'
import Button from './Button';
import './App.css';

const App = () => {
  const [starWarsCount, setStarWarsCount] = useState(20);
  const [starTrekCount, setStarTrekCount] = useState(40);

  const [selectedWars, setSelectedWars] = useState('unselected');
  const [selectedTrek, setSelectedTrek] = useState('unselected');

  const trekOrWars = (title) => {
    if(title === 'Star Wars'){
      setSelectedWars('selected');
      setStarWarsCount(starWarsCount + 1);
    }else{
      setStarTrekCount(starTrekCount + 1);
    }
  }
//It is not possible to select both choices: when clicking a button,
//if the other one is selected, it becomes unselected.

  const buttonHandler = (title) => {
    if(title === 'Star Wars'){
      if(selectedWars === 'unselected'){
        setStarWarsCount(starWarsCount + 1);
        setSelectedWars('selected');
      }else{
        setStarWarsCount(starWarsCount - 1);
        setSelectedWars('unselected');
      }
    }else{
      if(selectedTrek === 'unselected'){
        setStarTrekCount(starTrekCount + 1);
        setSelectedTrek('selected')
      }else{
        setStarTrekCount(starTrekCount - 1);
        setSelectedTrek('unselected')
      }
    }
    //if(!clicked){
    //   //set the clicked to be true
    //   // increment the curent value by one
    // }else{
    //   //set the clicked to be false
    //   // decrement by one
    // }

    //console.log(title);
  }

  return (
    <div className="App">
      <h1>Star Trek or Star Wars</h1>

      <div>
        <Button
          title="Star Wars"
          count={starWarsCount}
          selected={selectedWars}
          buttonHandler={buttonHandler}/>
      </div>

      <div>
        <Button
          title="Star Trek"
          count={starTrekCount}
          selected={selectedTrek}
          buttonHandler={buttonHandler}/>
      </div>

    </div>
  );
}

export default App;

// Declare a new state variable, which we'll call "count"
//const [count, setCount] = useState(0);
//<button onClick={() => setStarTrekCount(starTrekCount + 1)}>Star Trek | {starTrekCount}</button>
      //<div>
      //  <button onClick={() => this.buttonHandler()}>Star Trek | {this.state.starTrekCount}</button>
      //</div>
