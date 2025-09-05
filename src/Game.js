import React from 'react'
import BottomChannel from './components/BottomChannel'

function Game() {

    document.title = "Game";

  return (
    <div className="Game">

        <BottomChannel buttonText={"Play!"} pathName={'/'}/>
    </div>
  )
}

export default Game