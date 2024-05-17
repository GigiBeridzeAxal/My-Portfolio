'use client'
import React, { useEffect, useState } from 'react'
import {Link, Link as LinkScroll} from 'react-scroll/modules'

export default function Header() {

    const [headerchosed , setheader] = useState('HOME')
    const [heighscro , setscrol] = useState(0)



    const changer = (e) => {
       setTimeout(() => {
        setheader(e.target.innerText)  
       }, 500);


    }
        const handleScroll = () => {
            const scrollheight = window.scrollY
            setscrol(scrollheight)

            console.log(scrollheight)
            if(scrollheight > 0){

                if(scrollheight < 500){
                    setheader("HOME")
                }


            }
            if(scrollheight > 500){

                if(scrollheight < 1200){
                    setheader("PORTFOLIO")
                }


            }
            if(scrollheight > 1200){

                if(scrollheight < 1500){
                    setheader("EXPERIENCE")
                }


            }
            if(scrollheight > 1900){

                if(scrollheight < 2500){
                    setheader("ABOUT")
                }


            }
            if(scrollheight > 2400){

                if(scrollheight < 6500){
                    setheader("CONTACT")
                }


            }
            


           
       
        

        }

    

        React.useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, []);

    if(heighscro > 2350){
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
                    HOME</a> : <Link to='Home' spy={true} offset={50} smooth={true}  duration={500} onClick={(e) => changer(e)} className="home text-black ">
    
                    HOME</Link> }
                    {headerchosed == 'PORTFOLIO' ?  <a onClick={(e) => changer(e)} className="portfolio text-emerald-500">
                 <div className="green bg-emerald-500"></div>
                    PORTFOLIO</a> : <Link to='Portfolio' spy={true} offset={50} smooth={true}  duration={500} onClick={(e) => changer(e)} className="portfolio text-black">
       
                    PORTFOLIO</Link>}

                    {headerchosed == 'EXPERIENCE' ?                 
                 <a onClick={(e) => changer(e)} className="experience text-emerald-500">
                 <div className="green bg-emerald-500"></div>
                    EXPERIENCE</a> :                
                 <Link to='Experience' spy={true} offset={50} smooth={true}  duration={500} onClick={(e) => changer(e)} className="experience text-black">

                    EXPERIENCE</Link>}
                    {headerchosed == 'ABOUT' ?                  
 
  <a onClick={(e) => changer(e)} className="about text-emerald-500">
<div className="green bg-emerald-500"></div>
 ABOUT</a> :                

  <Link to='About' spy={true} offset={50} smooth={true}  duration={500} onClick={(e) => changer(e)} className="about text-black">

 ABOUT</Link>}
 {headerchosed == 'CONTACT' ?                  
 
 
 <a onClick={(e) => changer(e)} className="contact text-emerald-500">
<div className="green bg-emerald-500"></div>    
    CONTACT


</a> :                

 <Link to='Contact' spy={true} offset={50} smooth={true}  duration={500} onClick={(e) => changer(e)} className="about text-black">


CONTACT</Link>}



                    





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
                    HOME</a> : <Link to='Home' spy={true} offset={50} smooth={true}  duration={500}  onClick={(e) => changer(e)} className="home ">
    
                    HOME</Link> }
                    {headerchosed == 'PORTFOLIO' ?  <a onClick={(e) => changer(e)} className="portfolio text-emerald-500">
                 <div className="green bg-emerald-500"></div>
                    PORTFOLIO</a> : <Link to='Portfolio' spy={true} offset={50} smooth={true} onClick={(e) => changer(e)} className="portfolio">
       
                    PORTFOLIO</Link>}

                    {headerchosed == 'EXPERIENCE' ?                 
                 <a onClick={(e) => changer(e)} className="experience text-emerald-500">
                 <div className="green bg-emerald-500"></div>
                    EXPERIENCE</a> :                
                 <Link to='Experience' spy={true} offset={50} smooth={true} onClick={(e) => changer(e)} className="experience">

                    EXPERIENCE</Link>}
                    {headerchosed == 'ABOUT' ?                  
 
  <a onClick={(e) => changer(e)} className="about text-emerald-500">
<div className="green bg-emerald-500"></div>
 ABOUT</a> :                

  <Link to='About' spy={true} offset={50} smooth={true} onClick={(e) => changer(e)} className="about ">

 ABOUT</Link>}
 {headerchosed == 'CONTACT' ?                  
 
 
 <a onClick={(e) => changer(e)} className="contact text-emerald-500">
<div className="green bg-emerald-500"></div>    
    CONTACT


</a> :                

 <Link to='Contact' spy={true} offset={50} smooth={true} onClick={(e) => changer(e)} className="about ">


CONTACT</Link>}



                    





                </div>
            </div>

        </div>
    </div>
  )
}
}


