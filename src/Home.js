import './Home.css';
import { channelData } from './data/channelData.js';
import { GrMail } from "react-icons/gr";
import { RiFileInfoFill } from "react-icons/ri";
import { LuSquareX } from "react-icons/lu";
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Home() {

  const navigate = useNavigate();
  
  const [mailClicked, setMailClicked] = useState(false);
  const [infoClicked, setInfoClicked] = useState(false);

  const handleMailClick = () => {
    setMailClicked(prev => !prev);
  }

  const handleInfoClicked = () => {
    setInfoClicked(prev => !prev);
  }

  return (
    <div className="Home">
      <div className="home__menu">
        <ul className="home__channels">
          {channelData.map ((channel, key) => {
            return (
              <li
                key={key}
                className="home__channel"
                
                onClick={() => {
                  document.startViewTransition(() => {
                    navigate(`${channel.path}`);
                  })
                }}
              >
                <img id={channel.status} src={channel.image}/>
                <h1>{channel.text}</h1>
              </li>
            )
          })}
        </ul>
      </div>
      {/* <div className="home__content">
        <button className="home__button">Don't tap the glass!</button>
        <h1>Glenn Montepiedra </h1>
      </div> */}
      <div className="home__bottom">
        <div className="home__leftBlock">
          <div className="home__leftPocket"/>
          <div className="home__leftIcon"
            onClick={handleInfoClicked}
          >
            <div className="home__info">
              <RiFileInfoFill />
            </div>
          </div>
          {infoClicked && <FolioInfo onClose={handleInfoClicked} />}
        </div>
        
        <div className="home__centerBlock">

        </div>
        <div className="home__rightBlock">
          <div className="home__rightPocket"/>
            <div className="home__rightIcon"
              onClick={handleMailClick}
            >
              <div className="home__mail">
                <GrMail/>
              </div>
            </div>
            {mailClicked && <ContactMe onClose={handleMailClick} />}
        </div>
      </div>
    </div>
  );
}

export function ContactMe({ onClose }) {

  const currentPath = window.location.pathname;

  const onSubmit = async (event) => {
    event.preventDefault();
     Swal.fire({
      title: "Message sent!",
      text: "Thank you for your inquiry.",
      icon: "success",
      confirmButtonText: "Yay!",
      preConfirm: () => {
        onClose();
        }
    }); 
  }

  // const [result, setResult] = React.useState("");
  
  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   setResult("Sending....");
  //   const formData = new FormData(event.target);

  //   formData.append("access_key", "9a58a39a-0062-495d-aa79-23c4d35adf73");

  //   const response = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     body: formData
  //   });

  //   const data = await response.json();
  //   /* change */ 
  //   if (true) {
  //     Swal.fire({
  //       title: "Message sent!",
  //       text: "Thank you for your inquiry.",
  //       icon: "success",
  //       confirmButtonText: "Cool!",
  //       preConfirm: () => {
  //         onClose();
  //       }
  //     });
  //   } else {
  //     console.log("Error", data);
  //     setResult(data.message);
  //   }
  // };


/*
* --------------------------------------------------
* Contact Form
* --------------------------------------------------
*/
  

  return (
    <div className="contact__background" id={currentPath.substring(1, currentPath.length)}>
      <div className="contact__exit" 
      onClick={onClose}>
        <h1 className="contact__exitIcon"> X </h1>
      </div>
      <form className="contact__me" onSubmit={onSubmit}>
        <br/><br/><br/> 
          <div className="contact__form"> 
            <h1> ‎ ‎ Name: </h1> 
            <input className="contact__field" 
            type="text"
            id="name" 
            name="name"
            placeholder="" 
            autoComplete='off' 
            required/> 
          </div>
        <br/><br/><br/>
          <div className="contact__form"> 
            <h1> ‎ ‎ Email Address: </h1>
            <input className="contact__fieldMail" 
            type="email"
            name="email"
            placeholder="" 
            autoComplete='dont-fill-me-pls' 
            required/> 
          </div>
        <br/><br/><br/>
          <div className="contact__message">
              <h1 id="message"> ‎ ‎ ‎Message: </h1>
              <textarea className="contact__messageField" 
              type="text" 
              name="message"
              placeholder="" 
              required/>
          </div>
          <div className="contact__bottom">
            <button className="contact__submit"
            type="submit"
            > 
              Submit 
            </button>
          </div>
      </form>
    </div>
  )
}

function FolioInfo({ onClose }) {
  return (
    <div className="info__background">
      <div className="info__message">
        <h1>
          PORTFOLIO BY GLENN MONTEPIEDRA.
          <br/>
          BROWSE CHANNELS TO EXPLORE
          <br/><br/><br/><br/><br/>
          CLICK TO CONTINUE.
        </h1>
      </div>
      <div className="info__exit" 
      onClick={onClose}>
        <h1 className="info__exitIcon"> <LuSquareX /> </h1>
      </div>
    </div>
  )
}

export default Home;