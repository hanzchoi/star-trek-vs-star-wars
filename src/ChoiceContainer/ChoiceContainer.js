import React, { useState } from 'react';
import Button from '../Button/Button';
import './ChoiceContainer.css'

const ChoiceContainer = () => {
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

  const buttonHandler = (title) => {
    if(selectedWars === 'selected' && title === 'Star Trek'){
      setSelectedWars('unselected');
      setStarWarsCount(starWarsCount - 1);
      setSelectedTrek('selected');
      setStarTrekCount(starTrekCount + 1);
    }else if(selectedTrek === 'selected' && title === 'Star Wars'){
      setSelectedTrek('unselected');
      setStarTrekCount(starTrekCount - 1);
      setSelectedWars('selected');
      setStarWarsCount(starWarsCount + 1);
    }else{
      trekOrWars(title);
    }
  }

  return(
    <div className="container">
      <Button
        title="Star Wars"
        count={starWarsCount}
        selected={selectedWars}
        buttonHandler={buttonHandler}/>

      <Button
        title="Star Trek"
        count={starTrekCount}
        selected={selectedTrek}
        buttonHandler={buttonHandler}/>

    </div>

  )

}

export default ChoiceContainer
