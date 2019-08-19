import React from 'react';
import GlobalStyle from './GlobalStyle'
import Lottery from './ex/5loterry/Lottery';
// import SlotMachine from './ex/1slotmachine/index';
// import Pokegame from './ex/2pokedex/Pokegame'
// import ClickNumber from './ex/3clicknumber/ClickNumber'
// import DiceGame from './ex/4dice/DiceGame';

function App() {
  return (
    <div className="App">
      {/* <SlotMachine /> */}
      {/* <Pokegame /> */}
      {/* <ClickNumber /> */}
      {/* <DiceGame /> */}
      <Lottery />
      <Lottery title="Test" maxBalls={3} maxNumbers={60} />


      <GlobalStyle />
    </div>
  );
}

export default App;
