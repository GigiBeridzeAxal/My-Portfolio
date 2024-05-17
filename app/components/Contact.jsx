'use client'
import React from 'react'
import {motion} from 'framer-motion'

export default function Contact() {
  return (
    <div id='Contact' className="contact">
        <div className="contactframe">


             <div className="lefter">
             <div className="titl">CONTACT</div>
   
              <div className="contactmail relative flex gap-3 text-white">
              <motion.div   whileInView={{width:0}} transition={{duration:0.7}} style={{height:'25px' , width:'400px'}} className="loader4 bg-lime-500"></motion.div>
                საკონტაქტო Mail <a className=' mailto text-blue-300' href="mailto:beridzegigi19@gmail.com">Beridzegigi19@gmail.com</a></div>
           <div className=" relative davaksireb text-white">
            <br />
           <motion.div   whileInView={{width:0}} transition={{duration:0.7}} style={{height:'50px' ,}} className="loader4 bg-lime-500"></motion.div>
            დამიკავშირდით თუ საინტერესო შემოთავაზება გაქვთ განვიხილავ ყველა შესაძლო ვარიანტს</div>
             </div>
             <div className="right">

               <div className="form">

                 <input type="text" placeholder='Enter Your Name' />
                 <input type="text" placeholder='Enter Mail' />
                 <textarea placeholder='Enter Your Message' cols='35'  name="" id=""></textarea>
                 <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  Send Message
</button>


               </div>

             </div>

        </div>
    </div>
  )
}
