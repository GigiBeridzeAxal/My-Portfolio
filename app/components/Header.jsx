'use client'
import React, { useState } from 'react'

export default function Header() {

    const [headerchosed , setheader] = useState('HOME')

    const changer = (e) => {

       setheader(e.target.innerText)

    }

  return (
    <div className="header">
        <div className="headerframe">
            <div className="left">
                <img src="/GBLOGO.png" width={50} alt="" />
                <div className="gigiberidze text-emerald-500">GIGI <span className='text-white' >BERIDZE</span></div>
            </div>
            <div className="right">
                <div className="sections">
                    {headerchosed == 'HOME' ? <a onClick={(e) => changer(e)} className="home text-emerald-500">
                    <div className="green bg-emerald-500"></div>
                    HOME</a> : <a onClick={(e) => changer(e)} className="home ">
    
                    HOME</a> }
                    {headerchosed == 'PORTFOLIO' ?  <a onClick={(e) => changer(e)} className="portfolio text-emerald-500">
                 <div className="green bg-emerald-500"></div>
                    PORTFOLIO</a> : <a onClick={(e) => changer(e)} className="portfolio">
       
                    PORTFOLIO</a>}

                    {headerchosed == 'EXPERIENCE' ?                 
                 <a onClick={(e) => changer(e)} className="experience text-emerald-500">
                 <div className="green bg-emerald-500"></div>
                    EXPERIENCE</a> :                
                 <a onClick={(e) => changer(e)} className="experience">

                    EXPERIENCE</a>}
                    {headerchosed == 'ABOUT' ?                  
 
  <a onClick={(e) => changer(e)} className="about text-emerald-500">
<div className="green bg-emerald-500"></div>
 ABOUT</a> :                

  <a onClick={(e) => changer(e)} className="about">

 ABOUT</a>}
 {headerchosed == 'CONTACT' ?                  
 
 
 <a onClick={(e) => changer(e)} className="contact text-emerald-500">
<div className="green bg-emerald-500"></div>    
    CONTACT


</a> :                

 <a onClick={(e) => changer(e)} className="about">


CONTACT</a>}



                    





                </div>
            </div>

        </div>
    </div>
  )
}


