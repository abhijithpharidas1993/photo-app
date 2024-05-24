"use client"
import React, { useState } from 'react'

type Prop = {
    inCart: boolean,
    setInCart: Function
}
const PhotoActionButtons = ({inCart, setInCart}:Prop) => {
  return (
    <div
        className="absolute bottom-2 right-0 inline-flex rounded-none shadow-sm"
        role="group"
      >
        <button
          type="button"
          onClick={()=>{setInCart((prev:boolean )=>!prev)}}
          className={`opacity-75 px-2 py-2 mr-1 text-sm font-medium text-white ${inCart?'bg-green-500':'bg-black'}   focus:z-10 `}
        >
          <svg
            className="h-3 w-3 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <circle cx="9" cy="19" r="2" /> <circle cx="17" cy="19" r="2" />{" "}
            <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
          </svg>
        </button>
        <button
          type="button"
          className="opacity-75 px-2 py-2 mr-1 text-sm font-medium text-black bg-black  focus:z-10 "
        >
          <svg
            className="h-3 w-3 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />{" "}
            <polyline points="7 10 12 15 17 10" />{" "}
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </button>
        <button
          type="button"
          className="opacity-75 px-2 py-2 mr-1 text-sm font-medium text-black bg-black  focus:z-10 "
        >
          <svg
            className="h-3 w-3 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <circle cx="12" cy="12" r="9" />{" "}
            <line x1="9" y1="12" x2="15" y2="12" />{" "}
            <line x1="12" y1="9" x2="12" y2="15" />
          </svg>
        </button>
        <button
          type="button"
          className="opacity-75 px-2 py-2 mr-1 text-sm font-medium text-black bg-black   focus:z-10 "
        >
          <svg
            className="h-3 w-3 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />{" "}
            <circle cx="8.5" cy="8.5" r="1.5" />{" "}
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </button>
      </div>
  )
}

export default PhotoActionButtons