
import React from "react"

import video4 from "./video/aerialhouse.mp4"
// import "../index.css"
import "./MainPage.css"

const MainPage = () => {
  
  return (
    <div id="video">
      

      <video loop autoPlay muted >
        <source src={video4} />
        
      </video>
      <div className="bg"></div>

     




    </div>
  )
}

export default MainPage
