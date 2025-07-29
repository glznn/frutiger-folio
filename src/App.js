import './App.css';
import {channelData} from './data/channelData.js';
import { GrMail } from "react-icons/gr";


function App() {
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
        </div>
        
        <div className="app__centerBlock">

        </div>
        <div className="app__rightBlock">
          <div className="app__rightPocket"/>
            <div className="app__mailContainer">
              <div className="app__mail">
                <GrMail/>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
