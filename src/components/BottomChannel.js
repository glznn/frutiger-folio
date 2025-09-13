import React from 'react'

import './BottomChannel.css'
import MenuButton from './MenuButton'

function BottomChannel( {buttonText, link} ) {
  return (
    <div className="BottomChannel">
        <div className="bottomChannel__bar">
          <div className="bottomChannel__buttons">
            <div className="bottomChannel__menu">
            <MenuButton text="Menu" link={'/'}/>
            </div>
            <div className="bottomChannel__viewMore">
            <MenuButton text={buttonText} link={link} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default BottomChannel