import React from 'react'

import SwapArrow from './components/SwapArrow'
import BottomChannel from './components/BottomChannel'

function Promo() {
  return (
    <div className="Promo">

        <SwapArrow />
        <BottomChannel buttonText={"Contact"} pathName={'/contact'}/>
    </div>
  )
}

export default Promo