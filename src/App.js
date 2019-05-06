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
  }
//It is not possible to select both choices: when clicking a button,
//if the other one is selected, it becomes unselected.
  const buttonHandler = (title) => {
    if(selectedWars === 'selected' && title === 'Star Trek'){
      console.log("Star war was already selected now you clicked star trek");
      setSelectedWars('unselected');
      setStarWarsCount(starWarsCount - 1);
      setSelectedTrek('selected');
      setStarTrekCount(starTrekCount + 1);
    }else if(selectedTrek === 'selected' && title === 'Star Wars'){
      console.log("Star Trek was selected and now you clicked Star Wars");
      setSelectedTrek('unselected');
      setStarTrekCount(starTrekCount - 1);
      setSelectedWars('selected');
      setStarWarsCount(starWarsCount + 1);
    }else{
      console.log(title ," is selected");
      trekOrWars(title);
    }
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
