"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import React from "react";

const SearchBar = () => {
  const searchParam = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const changeHandler = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParam);
    params.set("query", e.target.value);
    params.set("page", "1");

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    

    <div className="flex">
      <button
        data-dropdown-toggle="dropdown"
        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-50 border border-e-0 border-gray-300"
        type="button"
      >
        <svg
          className="h-5 w-5 mr-1 text-black"
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
        All Images{" "}
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      
      <div className="relative w-full">
        <input
          className="block p-2.5  w-full z-20 text-sm text-gray-900 bg-gray-50  border border-gray-300 focus:outline-none"
          placeholder="Search"
          onChange={changeHandler}
          defaultValue={searchParam.get('query')?.toString()}
        />
        <button
          type="submit"
          className="flex absolute top-0 end-0 p-2.5  h-full text-sm font-medium text-balck border border-l border-gray-300"
        >
          <svg
            className="h-5 w-5 text-gary-900"
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
            <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />{" "}
            <circle cx="12" cy="13" r="3" />
          </svg>
          <span className="ml-1 md:inline hidden">Serach by image</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
