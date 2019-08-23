import React from 'react';
import GlobalStyle from './GlobalStyle'

/*
! Lifecycle */
// import ComponentDidMount from './lifecycle/ComponentDidMount'

/*
! Exercices */
// import SlotMachine from './ex/1slotmachine/index';
// import Pokegame from './ex/2pokedex/Pokegame'
// import ClickNumber from './ex/3clicknumber/ClickNumber'
// import DiceGame from './ex/4dice/DiceGame';
// import Lottery from './ex/5loterry/Lottery';
// import CoinFlipper from './ex/6coinflipper/CoinFlipper';
// import ColorBoxes from './ex/7colorboxes/ColorBoxes';
// import BoxMaker from './ex/8boxmaker/BoxMaker'
// import TodoList from './ex/9todo/TodoList'
// import CardDealer from './ex/10carddealer/CardDealer';
import DogRouter from './ex/11dogrouter/DogRouter';


function App() {
  return (
    <div className="App">
      {/* <SlotMachine /> */}
      {/* <Pokegame /> */}
      {/* <ClickNumber /> */}
      {/* <DiceGame /> */}
      {/* <Lottery /> */}
      {/* <Lottery title="Test" maxBalls={3} maxNumbers={60} /> */}
      {/* <CoinFlipper /> */}
      {/* <ColorBoxes /> */}
      {/* <BoxMaker /> */}
      {/* <TodoList /> */}
      {/* <CardDealer /> */}
      <DogRouter />

      {/* <ComponentDidMount /> */}

      <GlobalStyle />
    </div>
  );
}

export default App;
