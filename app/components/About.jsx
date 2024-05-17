'use client'
import React from 'react'
import {motion} from 'framer-motion'

export default function About() {
  return (

    <>
    <div id='About' className="About bg-white">

    <div  className="AboutFrame ">

          <div className="aboutittler">ABOUT ME</div>

          <div className="aboutdesc">
          <motion.div   whileInView={{width:0}} transition={{duration:0.7}} className="loader6 bg-lime-500"></motion.div>
            გაიგე ინფორმაცია ჩემს შესახებ და ჩემი გამოცდილების შესახებ Web Development-ში</div>

          <div className="firstline"><img src="/pc2.jpg" width={500} alt="" />  
          
          <div className="descer">
            <div className="slogan">
            <motion.div   whileInView={{width:0}} transition={{duration:0.7}} className="loader4 bg-lime-500"></motion.div>

                Coding: Building Tomorrow's World, Today.</div>

            <div className="desc text-gray-500 ">
            <motion.div   whileInView={{width:0}} transition={{duration:0.7}} className="loader5 bg-lime-500"></motion.div>
                გამარჯობა მე ვარ Fullstack Developer-ი უკვე 1 წელია მაქვს გამოცდილება ამ საქმეში 2022 წლიდან 
            მას შემდეგ აქტიურად ვსწავლობ პროგრამირებას Frontend Framework-ისთვის ვიყენებ React.js, ხოლო Backend Node.js სტეკი კი
            Mern Stack  შეგიძლიათ
            შეამოწმოთ ჩემი პროექტები ან ტექნოლოგიები სადაც გამოცდილება მაქ თუ დაინტერესებული ხართ შეგიძლიათ დამიკავშირდეთ
            </div>
            
            <br />
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  Read More
</button>
          </div>
          </div>
    
      
    </div>
   </div>


    
    </>
   
  )
}
