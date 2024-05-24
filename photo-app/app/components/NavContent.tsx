"use client"
import React, { useState } from 'react'

const NavContent = () => {
const [openNav, setopenNav] = useState(false)
  return (
    <div className='relative'>
    
    <button className="mr-1 md:hidden" onClick={()=>{
setopenNav(prev=>!prev)
    }}>
        <svg className="h-6 w-6 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
</svg>

        </button>
        <ul className={`justify-between ${openNav?'absolute  top-10 right-0 flex flex-col w-60 bg-black':'hidden'} md:flex`}>
          <li className="p-2 flex">
            <svg
              className="h-6 w-6 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
            </svg>
            <span>Light boxes</span>
          </li>
          <li className="p-2 flex">
            <svg
              className="h-6 w-6 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <circle cx="9" cy="19" r="2" /> <circle cx="17" cy="19" r="2" />{" "}
              <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
            </svg>
            <span>Cart</span>
          </li>
          <li className="p-2 ">Sign in</li>
        </ul>
    </div>
  )
}

export default NavContent