"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

const Button = ({currentPage}) => {
    const pageParam = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleClick = () => {
    const params = new URLSearchParams(pageParam);
    const page = currentPage + 1;
    params.set("page", page.toString());

    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <button onClick={handleClick} className='p-10 pt-1 pb-1 border border-black text-black'>
        Next Page
    </button>
  )
}

export default Button