import React from 'react';
import GlobalStyle from './GlobalStyle'
// import SlotMachine from './ex/1slotmachine/index';
// import Pokegame from './ex/2pokedex/Pokegame'
// import ClickNumber from './ex/3clicknumber/ClickNumber'
// import DiceGame from './ex/4dice/DiceGame';
// import Lottery from './ex/5loterry/Lottery';
import CoinFlipper from './ex/6coinflipper/CoinFlipper';


function App() {
  return (
    <div className="App">
      {/* <SlotMachine /> */}
      {/* <Pokegame /> */}
      {/* <ClickNumber /> */}
      {/* <DiceGame /> */}
      {/* <Lottery /> */}
      {/* <Lottery title="Test" maxBalls={3} maxNumbers={60} /> */}
      <CoinFlipper />

      <GlobalStyle />
    </div>
  );
}

export default App;
