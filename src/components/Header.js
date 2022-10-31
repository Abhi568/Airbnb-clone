import React from 'react'
import AirBnbLogo from "./../images/airbnb_logo.png"
import backToMain from "./../images/backtoMain.jpg"
import "./Header.css"
import tvGlobo from "./../images/globo.png"
export default function Heder() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand margin-left" href="/"><img src={AirBnbLogo} alt="airbnb_logo" className='image' /></a>
        <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent">
          <small className='heading right-side-of-header'>Become a host</small>
          <img src={tvGlobo} alt="" className='right-side-of-header' />
          <div className='login-signup  right-side-of-header dropdown-toggle' data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://www.shareicon.net/data/256x256/2016/04/03/743930_button_512x512.png" alt="" className='menu-image' />
            <img src="https://cdn.icon-icons.com/icons2/510/PNG/512/ios7-contact_icon-icons.com_50286.png" className='person-image' alt="" />
          </div>
          <ul className="dropdown-menu">
            <li className="dropdown-item heading">Sign up</li>
            <li className="dropdown-item"> Log in</li>
            <li><hr className="dropdown-divider" /></li>
            <li className="dropdown-item">Host your name</li>

            <li className="dropdown-item"> Host an experience</li>
            <li className="dropdown-item"> Help</li>
          </ul>
        </div>
      </div>
      <div className='back-to-main'>
        <img src={backToMain} alt="" />
      </div>
    </nav>
  )
}
