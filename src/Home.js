import './Home.css';
import { channelData } from './data/channelData.js';
import { GrMail } from "react-icons/gr";
import { RiFileInfoFill } from "react-icons/ri";
import { MdHome } from "react-icons/md";
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Home() {

  document.title = "Home";

  const navigate = useNavigate();
  
  const [mailClicked, setMailClicked] = useState(false);
  const [infoClicked, setInfoClicked] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const alreadyVisited = sessionStorage.getItem("hasVisitedHome");

    if (alreadyVisited !== "true") {
      setShowInfo(true);
      setInfoClicked(true);

      /* Local / Session storage only stores strings!!!!!!!!*/
      sessionStorage.setItem("hasVisitedHome", "true");
    }
  }, [])

  const handleMailClick = () => {
    setMailClicked(prev => !prev);
  }

  const handleInfoClicked = () => {
    setTimeout(() => setShowInfo(prev => !prev), 500);
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
                  if (typeof document !== 'undefined' && 'startViewTransition' in document) {
                  document.startViewTransition(() => {
                    navigate(channel.path);
                  })}
                  else {
                    navigate(channel.path);
                  }
                }}
              >
                <img id={channel.status} src={channel.image} alt={channel.name} loading="lazy"/>
                <h1 className="home__channelName">{channel.text}</h1>
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
          <div className="home__leftPocket">
            <div className="home__leftIcon"
              onClick={handleInfoClicked}
            >
              <div className="home__info">
                <RiFileInfoFill />
              </div>
            </div>
            {showInfo && <FolioInfo onClose={handleInfoClicked} visible={infoClicked} />}
          </div>
        </div>
        
        <div className="home__centerBlock"/>

        <div className="home__rightBlock">
          <div className="home__rightPocket">
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
    <div className="contact__background" id={`${currentPath.substring(1, currentPath.length)}__background`}>
      <div className="contact__exit" 
      onClick={onClose}>
        <h1 className="contact__exitIcon"
          style={{ display: currentPath === "/" ? "": "none" }}
        > X </h1>
        <h1 className="contact__homeIcon"
          style={{ display: currentPath === "/contact" ? "": "none" }}
        > <MdHome/> </h1>
      </div>
      <form className="contact__me" onSubmit={onSubmit}>
        <br/><br/><br/> 
          <div className="contact__form"> 
            <h1> ‎ ‎ Name: </h1> 
            <input className="contact__fieldName" 
            type="text"
            id="name" 
            name="name"
            placeholder="" 
            autoComplete='dont-fill-me-pls' 
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

function FolioInfo({ onClose, visible }) {
  return (
    <div className="Info">
      <div className="info__content" 
        style={{ 
          opacity: visible ? 1 : 0,
          top: visible ? '0px': '100vh',
          borderTopLeftRadius: visible ? '0px' : '10000px',
          borderTopRightRadius: visible ? '0px' : '10000px',
        }}
      >
        <div className="info__topBorder"/>
        <div className="info__message">
          <h1>
            Glenn Montepiedra's Portfolio
            <br/>
            Browse channels to explore.
            <br/><br/><br/>
            <text onClick={onClose}>
              Click here to continue.
            </text>
          </h1>
        </div>
        <div className="info__bottomBorder"/>
      </div>
    </div>
  )
}

export default Home;