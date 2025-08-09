import './App.css';
import {channelData} from './data/channelData.js';
import { GrMail } from "react-icons/gr";
import { RiFileInfoFill } from "react-icons/ri";
import { useEffect, useState } from 'react'



function App() {

  const [mailClicked, setMailClicked] = useState(false);

  const handleMailClick = () => {
    setMailClicked(prev => !prev)
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
          <div className="app__leftIcon">
            <div className="app__info">
              <RiFileInfoFill />
            </div>
          </div>
        </div>
        
        <div className="app__centerBlock">

        </div>
        <div className="app__rightBlock">
          <div className="app__rightPocket"/>
            <div className="app__rightIcon"
              onClick={handleMailClick}
            >
              <div className="app__mail">
                {mailClicked && <ContactMe />}
                <GrMail/>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

function ContactMe() {
  return (
    <div className="contact__me">
      <h1>TESTING</h1>
      <h1>TESTING</h1>
      <h1>TESTING</h1>
      <h1>TESTING</h1>
      <h1>TESTING</h1>
      <h1>TESTING</h1>
      <h1>TESTING</h1>
      <h1>TESTING</h1>
      <h1>TESTING</h1>
      <h1>TESTING</h1>
      <h1>TESTING</h1>
      <h1>TESTING</h1>
      <h1>TESTING</h1>
      <h1>TESTING</h1>
      <h1>TESTING</h1>
      <h1>TESTING</h1>
      <h1>TESTING</h1>
      <h1>TESTING</h1>
      <h1>TESTING</h1>
      <h1>TESTING</h1>
    </div>
  )
}

export default App;
