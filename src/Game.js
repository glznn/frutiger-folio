import React from 'react'
import BottomChannel from './components/BottomChannel'
import SwapArrow from './components/SwapArrow'

function Game() {

    document.title = "Game";

  return (
    <div className="Game">

        <SwapArrow/>
        <BottomChannel buttonText={"Play!"} pathName={'/'}/>
    </div>
  )
}

export default Game