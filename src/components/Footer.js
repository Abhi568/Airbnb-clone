import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-icon-continer'>
        <img src="https://clipground.com/images/search-button-png-6.jpg" alt="" />
        <small>Explore</small>
      </div>
      <div className='footer-icon-continer'>
        <img src="https://www.thegembank.com/wp-content/uploads/2016/01/wishlist_icon.png" alt="" />
        <small>Wishlists</small>
      </div>
      <div className='footer-icon-continer'>
        <img src="https://www.aesiph.com/images/person-icon.png" alt="" />
        <small>Log in</small>
      </div>
    </div>
  )
}
