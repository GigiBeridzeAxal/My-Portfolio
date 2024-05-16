'use client'
import React, { useState } from 'react'
import {motion} from 'framer-motion'

export default function Portfolio() {

   const [x , setx] = useState()
   const [y , sety] = useState()
   const [itjobs , setitjobs] = useState(false)
   const [emailserver , setemailserver] = useState(false)


   const move =(e) => {


      setx(e.pageX)
      sety(e.pageY)
      console.log(e.pageX)
   }
  return (
   <div className="portfolioo">

    <div className="portfolioframe bg-gray-900">
        <div className="porttittle">Portfolio</div>
        <div className="howsee text-white">მიიტანეთ მაუსი წარწერებთან რათა ნახოთ დიზაინი</div>
       
     
     
     <a href='https://my-it-jobs-five.vercel.app/' onMouseLeave={(e) => setitjobs(false)}  onMouseEnter={(e) => setitjobs(true)}  onMouseMove={(e) => move(e)} className="job cursor-pointer">

        <div className="jobtittle">MYITJOBS</div>
        {itjobs == true ? <div className="photo" style={{position:'absolute' , left:x + 25 , top:y}}><img src="/myt.png" width={500} height={500}/></div> : <div></div>}

        <div className="usedtech">Full-Stack Development (Mern Stack)</div>


     </a>
     <a href='https://emailserverfrontend-ud91.vercel.app/' onMouseLeave={(e) => setemailserver(false)}  onMouseEnter={(e) => setemailserver(true)}  onMouseMove={(e) => move(e)} className="job cursor-pointer">

<div className="jobtittle">EmailServer</div>
{emailserver == true ? <div className="photo" style={{position:'absolute' , left:x + 25 , top:y}}><img src="/esr.png" width={500} height={500} /></div> : <div></div>}

<div className="usedtech">Full-Stack Development (Mern Stack)</div>


</a>


    </div>
   </div>
  )
}
