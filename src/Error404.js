import React from 'react'
import './Error404.css'
import './Home.css'
import { Link } from 'react-router-dom'

function Error404() {
    document.title = "Page Not Found"
  return (
    <div className="Error">
        <div className="Info">
        <div className="info__content">
            <div className="info__topBorder"/>
            <div className="info__message">
            <h1>
                404 — Page Not Found
                <br/>
                <div className="info__subMessage">The page you requested does not exist.</div>
                <br/><br/><br/>
                <Link className="info__exit" to="/"
                >
                Click here to continue.
                </Link>
            </h1>
            </div>
            <div className="info__bottomBorder"/>
        </div>
        </div>
    </div>
  )
}

export default Error404