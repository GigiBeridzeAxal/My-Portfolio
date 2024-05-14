'use client'
import React from 'react'
import {motion} from 'framer-motion'

export default function Welcome() {
  return (
   <div className="homer">
    <div className="homeframe">

      <div className="homeleft">
      <motion.div   whileInView={{width:0}} transition={{duration:0.3}} className="loader3 bg-lime-500"></motion.div>
         <motion.div initial={{opacity:0 , y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.3}} className="hometittle flex align-center justify-center gap-3 text-white">Hello , I'Am <span className='text-emerald-500' >GIGI</span> BERIDZE</motion.div>
         <motion.div initial={{opacity:0 , y:40}} whileInView={{opacity:1, y:0}} transition={{duration:1}} className="fullstack text-white">
          

          Full-Stack Developer (Mern Stack)</motion.div>
         <div className="homedesc text-gray-500">
                   
         <motion.div whileInView={{width:0}} transition={{duration:0.3}} className="loader bg-lime-500"></motion.div>
          <motion.p initial={{opacity:0 , y:40}} whileInView={{opacity:1, y:0}}  transition={{duration:0.5}} >გადაწყვიტე შენი ბერნდისთვის ან ბიზნესისთვის ვებ გვერდის შექმნა ? შემიძლია დაგეხმარო 
         გამართული Front-End და დაცული Back-End ით, ასევე მე ვიყენებ დღეისთვის ყველაზე მოთხოვნად/მძლავრ ტექნოლოგიებს
         თუ დაინტერესდით შეამოწმეთ ჩემი ნამუშევრები და დამიკავშირდით</motion.p>

         
         </div>

          <div className="homebtns">
            <motion.button initial={{opacity:0 , y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.5}} className=' portbtn bg-sky-500 text-white flex align-center gap-3 justify-center' > <img src="/Portfolio.png" width={25} alt="" /> Portfolio</motion.button>
            <motion.button initial={{opacity:0 , y:40}} whileInView={{opacity:1, y:0}} transition={{duration:0.5}} className=' cntbtn text-white flex align-center gap-2 justify-center' > <img src="/Phone.png" width={25} alt="" /> Contact</motion.button>
          </div>

      </div>

      <div className="homeright">
        <img src="/Desk.png" width={400} alt="" />
      </div>
         
    </div>
   </div>
  )
}
