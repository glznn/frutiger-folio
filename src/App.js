import './App.css';
import {channelData} from './data/channelData.js';
import { GrMail } from "react-icons/gr";
import { RiFileInfoFill } from "react-icons/ri";
import { LuSquareX } from "react-icons/lu";
import { useEffect, useState } from 'react'



function App() {

  const [mailClicked, setMailClicked] = useState(false);
  const [infoClicked, setInfoClicked] = useState(false);

  const handleMailClick = () => {
    setMailClicked(prev => !prev);
  }

  const handleInfoClicked = () => {
    setInfoClicked(prev => !prev);
  }

  return (
    <div className="App">
      <div className="app__menu">
        <ul className="app__channels">
          {channelData.map ((channel, key) => {
            return (
              <li
                key={key}
                className="app__channel"
              >
                <img src={channel.image}/>
                <h1>{channel.name}</h1>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="app__content">
        <button className="app__button">Don't tap the glass!</button>
        <h1>Glenn Montepiedra </h1>
      </div>
      <div className="app__bottom">
        <div className="app__leftBlock">
          <div className="app__leftPocket"/>
          <div className="app__leftIcon"
            onClick={handleInfoClicked}
          >
            <div className="app__info">
              <RiFileInfoFill />
            </div>
          </div>
          {infoClicked && <FolioInfo onClose={handleInfoClicked} />}
        </div>
        
        <div className="app__centerBlock">

        </div>
        <div className="app__rightBlock">
          <div className="app__rightPocket"/>
            <div className="app__rightIcon"
              onClick={handleMailClick}
            >
              <div className="app__mail">
                <GrMail/>
              </div>
            </div>
            {mailClicked && <ContactMe onClose={handleMailClick} />}
        </div>
      </div>
    </div>
  );
}

function ContactMe({ onClose }) {
  return (
    <div className="contact__background">
      <div className="contact__exit" 
      onClick={onClose}>
        <h1 className="contact__exitIcon"> <LuSquareX /> </h1>
      </div>
      <div className="contact__me">
        <br/><br/><br/>
          <div className="contact__form"> 
            <h1> ‎ ‎ Name: </h1> 
            <input type="text" className="contact__field" id="name" placeholder="" required/> 
          </div>
        <br/><br/><br/>
          <div className="contact__form"> 
            <h1> ‎ ‎ Email Address: </h1> 
            <input type="text" className="contact__field" id="email" placeholder="" required/> 
          </div>
        <br/><br/><br/>
          <div className="contact__message">
              <h1 id="message"> ‎ ‎ ‎Message: </h1>
              <textarea type="text" className="contact__messageField" placeholder="" required/>     
          </div>
      </div>
    </div>
  )
}

function FolioInfo({ onClose }) {
  return (
    <div className="contact__background">
      <div className="info__exit" 
      onClick={onClose}>
        <h1 className="contact__exitIcon"> <LuSquareX /> </h1>
      </div>
    </div>
  )
}

export default App;