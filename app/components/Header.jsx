'use client'
import React, { useEffect, useState } from 'react'

export default function Header() {

    const [headerchosed , setheader] = useState('HOME')
    const [heighscro , setscrol] = useState(0)



    const changer = (e) => {

       setheader(e.target.innerText)

    }

    useEffect(() => {
        window.addEventListener('scroll' , (e) => {
            const scrollheight = window.scrollY
            setscrol(scrollheight)

            console.log(scrollheight)
            if(scrollheight > 0){

                if(scrollheight < 500){
                    setheader("HOME")
                }


            }
            if(scrollheight > 500){

                if(scrollheight < 1000){
                    setheader("PORTFOLIO")
                }


            }
            if(scrollheight > 1000){

                if(scrollheight < 1500){
                    setheader("EXPERIENCE")
                }


            }
            if(scrollheight > 2000){

                if(scrollheight < 2500){
                    setheader("ABOUT")
                }


            }
            if(scrollheight > 2500){

                if(scrollheight < 6500){
                    setheader("CONTACT")
                }


            }
            


           
       
        })

      
    },[])


    if(window.scrollY > 2350){
        return(
        <div className="header fixed">
        <div className="headerframe">
            <div className="left">
                <img src="/GBLOGO.png" width={50} alt="" />
                <div className="gigiberidze text-emerald-500">GIGI <span className='text-black ' >  BERIDZE</span> </div>
            </div>
            <div className="right">
                <div className="sections">
                    {headerchosed == 'HOME' ? <a onClick={(e) => changer(e)} className="home text-emerald-500">
                    <div className="green bg-emerald-500"></div>
                    HOME</a> : <a onClick={(e) => changer(e)} className="home text-black ">
    
                    HOME</a> }
                    {headerchosed == 'PORTFOLIO' ?  <a onClick={(e) => changer(e)} className="portfolio text-emerald-500">
                 <div className="green bg-emerald-500"></div>
                    PORTFOLIO</a> : <a onClick={(e) => changer(e)} className="portfolio text-black">
       
                    PORTFOLIO</a>}

                    {headerchosed == 'EXPERIENCE' ?                 
                 <a onClick={(e) => changer(e)} className="experience text-emerald-500">
                 <div className="green bg-emerald-500"></div>
                    EXPERIENCE</a> :                
                 <a onClick={(e) => changer(e)} className="experience text-black">

                    EXPERIENCE</a>}
                    {headerchosed == 'ABOUT' ?                  
 
  <a onClick={(e) => changer(e)} className="about text-emerald-500">
<div className="green bg-emerald-500"></div>
 ABOUT</a> :                

  <a onClick={(e) => changer(e)} className="about text-black">

 ABOUT</a>}
 {headerchosed == 'CONTACT' ?                  
 
 
 <a onClick={(e) => changer(e)} className="contact text-emerald-500">
<div className="green bg-emerald-500"></div>    
    CONTACT


</a> :                

 <a onClick={(e) => changer(e)} className="about text-black">


CONTACT</a>}



                    





                </div>
            </div>

        </div>
    </div>
        )
    }else{
  return (
  
    <div className="header fixed">
        <div className="headerframe">
            <div className="left">
                <img src="/GBLOGO.png" width={50} alt="" />
                <div className="gigiberidze text-emerald-500">GIGI <span className='text-white ' >  BERIDZE</span> </div>
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

  <a onClick={(e) => changer(e)} className="about ">

 ABOUT</a>}
 {headerchosed == 'CONTACT' ?                  
 
 
 <a onClick={(e) => changer(e)} className="contact text-emerald-500">
<div className="green bg-emerald-500"></div>    
    CONTACT


</a> :                

 <a onClick={(e) => changer(e)} className="about ">


CONTACT</a>}



                    





                </div>
            </div>

        </div>
    </div>
  )
}
}


