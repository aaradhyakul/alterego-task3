import React from 'react'
import { useState, useEffect } from 'react'
import "./HiddenNav.css"
import { GrClose } from "react-icons/gr";
import { IoCloseOutline } from "react-icons/io5";

const HiddenNav = ({ isShown, closeNav }) => {
  const [Shown, setShown] = useState()

  useEffect(() => { setShown(isShown) }, [isShown])


  function setClassName() {
    if (isShown === true) {
      return "navbar"
    }
    return "close"
  }
  function closeNavbar() {
    setTimeout(closeNav(), 4000)

    setTimeout(setShown(false), 4000)
  }



  if (Shown) {
    return (
      <div id="navbar">

        <div class="section1">
          <button onClick={closeNavbar} id="close" >
            <div id="closebtn"><IoCloseOutline size={70} /></div>
            <div id="closetxt">CLOSE</div>
          </button>
          <div>
            <div className="alter">ALTER</div>
            <div className="ego">EGO</div>
          </div>
          <div className="langs">
            <div className="eng">ENG</div>
            <div className="it">IT</div>
            <div className="fr">FR</div>
            <div className="urdu">کریں</div>
          </div>
        </div>

        <div className="section2">
          <div className="main">
            <div className="heading">MAIN
              <div className="divider2"></div>
            </div>

            <div className='optioncontainer'><button className="options">AWARDS<div className='divider3'></div></button>
              <button className="options">PORTFOLIO<div className='divider3'></div></button>
              <button className="options">WORLDWIDE<div className='divider3'></div></button>
              <button className="metaoptions">METAVERSE<div className='divider3'></div></button>
            </div>


          </div>
          <div className="about">
            <div className="heading">ABOUT
              <div className="divider2"></div>
            </div>

            <div className='optioncontainer'><button className="options">TEAM<div className='divider3'></div></button>
              <button className="options">OFFICES<div className='divider3'></div></button>
              <button className="options">MEDIA<div className='divider3'></div></button>
              <button className="options">EVENTS<div className='divider3'></div></button>
              <button className="options">FRIENDS<div className='divider3'></div></button>
              <button className="options">PARTNERS<div className='divider3'></div></button>
            </div>

          </div>
          <div className="services">
            <div className="heading">SERVICES
              <div className="divider2"></div>
            </div>

            <div className='optioncontainer'><button className="options">TURNKEY PROJECTS<div className='divider3'></div></button>
              <button className="options">ARCHITECTURE<div className='divider3'></div></button>
              <button className="options">INTERIOR DESIGN<div className='divider3'></div></button>
              <button className="options">FINISHING WORK<div className='divider3'></div></button>
              <button className="options">FINSHING & FITTING<div className='divider3'></div></button>
              <button className="options">CONCEPTS<div className='divider3'></div></button>
              <button className="options">CONSULTING<div className='divider3'></div></button>
            </div>
          </div>
          <div className="portfolio">
          <div className="heading">PORTFOLIO
              <div className="divider2"></div>
            </div>

            <div className='optioncontainer'><button className="options">TURNKEY PROJECTS<div className='divider3'></div></button>
              <button className="options">ARCHITECTURE<div className='divider3'></div></button>
              <button className="options">INTERIOR DESIGN<div className='divider3'></div></button>
              <button className="options">FINISHING WORK<div className='divider3'></div></button>
              <button className="options">FINSHING & FITTING<div className='divider3'></div></button>
              <button className="options">CONCEPTS<div className='divider3'></div></button>
              <button className="options">CONSULTING<div className='divider3'></div></button>
            </div>
            
          </div>
          <div className="contacts">
          <div className="heading">CONTACTS
              <div className="divider2"></div>
            </div>

            <div className='optioncontainer'><button className="options">MILAN<div className='divider3'></div></button>
              <button className="options">ABUJA<div className='divider3'></div></button>
              <button className="options">SAINT TROPEZ<div className='divider3'></div></button>
              <button className="options">SARDINA<div className='divider3'></div></button>
              <button className="options">ONLINE<div className='divider3'></div></button>
              <button className="options">MONACO COMING SOON<div className='divider3'></div></button>
              
            </div>
            
          </div>
          <div className="blog">
          <div className="heading">BLOG
              <div className="divider2"></div>
            </div>

            <div className='optioncontainer'><button className="options">AWARDS<div className='divider3'></div></button>
              <button className="options">BLOG<div className='divider3'></div></button>
              <button className="options">ART<div className='divider3'></div></button>
              <button className="options">REVIEWS<div className='divider3'></div></button>
             
            </div>
            
          </div>
        </div>


      </div>
    )
  }



}

export default HiddenNav
