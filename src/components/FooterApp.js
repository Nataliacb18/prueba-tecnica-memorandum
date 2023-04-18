import React from 'react'
import facebook from "../assets/social/facebook-white.svg"
import twitter from "../assets/social/twitter-white.svg"
import ig from "../assets/social/instagram-white.svg"
import store from "../assets/store/app-store.svg"
import play from "../assets/store/play-store.svg"
import microsoft from "../assets/store/windows-store.svg"

import "../styles/footer.css"

export const FooterApp = () => {
  return (
    <div className='footer'>
      <h5>Home | Terms and Conditions | Privacy Policy | Collections Statement | Help | Manage Account</h5>
      <p>Copyright @ 2018 DEMO Streaming. All Rights Reserved</p>
      <div className='footerContent'>
        <div className='footerSocial'>
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={ig} alt="" />
        </div>
        <div className='footerStore'>
        <img src={store} alt="" />
          <img src={play} alt="" />
          <img className='microsoftImg' src={microsoft} alt="" />
        </div>
      </div>
    </div>
  )
}
