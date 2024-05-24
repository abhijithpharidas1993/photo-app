"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  currentPage: number;
  totalPage: number;
};

const Paginator = ({ currentPage, totalPage }: Props) => {
  const pageParam = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [page, setPage] = useState('')
  const handleClick = (direction?: string) => {
    const params = new URLSearchParams(pageParam);
    const page = direction === "BACK" ? currentPage - 1 : currentPage + 1;
    params.set("page", page.toString());

    console.log(`${pathname}?${params.toString()}`);
    replace(`${pathname}?${params.toString()}`);
  };
  const handleGo = () => {
    console.log(page)
    if(page){
        const params = new URLSearchParams(pageParam);
        const pageNumber = page
        params.set("page", pageNumber.toString());
    
        console.log(`${pathname}?${params.toString()}`);
        replace(`${pathname}?${params.toString()}`);
    }
    
  };
  return (
    <>
      <span className="mr-1">
        Page {currentPage} of {totalPage}
      </span>

      <button
        onClick={() => {
          handleClick("BACK");
        }}
        disabled={currentPage == 1}
        className="mr-1 p-2 pt-1 pb-1 border rounded-sm bg-transparent text-black border-gray-900 hover:bg-gray-900 hover:text-white disabled:hover:bg-gray-300"
      >
        <FontAwesomeIcon icon={faLessThan} className="fas text-xs" />
      </button>

      <button
        onClick={() => {
          handleClick("FRONT");
        }}
        className="p-2 pt-1 pb-1 border rounded-sm bg-transparent text-black mr-2 border-gray-900 hover:bg-gray-900 hover:text-white"
      >
        <FontAwesomeIcon icon={faGreaterThan} className="fas text-xs" />
      </button>

      <div>
        <span>Go to page: </span>{" "}
        <input
          className="w-14 p-2 pt-1 pb-1 border border-gray-300 focus:outline-none"
          type="text"
          value={page}
          onChange={(e)=>{
            setPage(e.target.value)
          }}
        />
        <button 
        onClick={()=>handleGo()}
        className="mr-1 p-2 pt-1 pb-1 border rounded-sm bg-transparent text-black border-gray-900 hover:bg-gray-900 hover:text-white disabled:hover:bg-gray-300">
          Go
        </button>
      </div>
    </>
  );
};

Paginator.propTypes = {
  currentPage: PropTypes.string,
  totalPage: PropTypes.number,
};

export default Paginator;
