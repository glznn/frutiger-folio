import React from 'react'

import './BottomChannel.css'
import MenuButton from './MenuButton'

function BottomChannel( {buttonText, pathName} ) {
  return (
    <div className="BottomChannel">
        <div className="bottomChannel__bar">
          <div className="bottomChannel__buttons">
            <div className="bottomChannel__menu">
            <MenuButton text="Menu" path={'/'}/>
            </div>
            <div className="bottomChannel__viewMore">
            <MenuButton text={buttonText} path={pathName} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default BottomChannel