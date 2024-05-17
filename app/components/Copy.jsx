import React from 'react'

export default function Copy() {
  return (
     <div className="copy">
            <div className="logo">
                <img src="/GBLOGO.png" width={50} alt="" />
                <div className="gigiberidze text-emerald-500">GIGI <span className='text-white' >BERIDZE</span></div>
            </div>
            <div className="all flex align-center justify-center text-white gap-5"> <img src="/Copyright.png" width={20} alt="" /> 2024 ALL RIGHTS SERVED</div>
            <div className="socials flex align-center gap-3">
               <a href="https://github.com/GigiBeridzeAxal"><img src="/ghb.png" width={30} alt="" /></a> 
               <a href=""><img src="/LinkedIn.png" width={30} alt="" /></a> 

            </div>
     </div>
  )
}
