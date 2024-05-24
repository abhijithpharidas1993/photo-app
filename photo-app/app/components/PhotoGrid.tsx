import React from "react";
import Photos from "./Photos";
import { PhotosAPI } from "../types/photo-api-response";
import Paginator from "./Paginator";
import Button from "./Button";

const PhotoGrid = async ({
  query,
  currentPage,
  per_page = 10
}: {
  query: string;
  currentPage: number;
  per_page: number;
}) => {
  let data: PhotosAPI | null = null;
  let error = null

  if(query){
    try{
      const url = `https://simple-pexels-proxy.onrender.com/search?query=${query?query:encodeURI('')}&per_page=${per_page}&page=${currentPage}`
      const response = await fetch(url);
  
      if(response.ok){
        data = await response.json();
        console.log("data:", data?.page)
      }else {
        throw(response.statusText)
      }
    } catch(e) {
      console.log("exception", e)
      error = "Faild"
    }
     if(error){
      return <h1>An error occured. Please try again later</h1>
     }
  
  } else {
    return(<div className=" p-10 h-min-40 flex flex-col justify-center items-center">
        <svg
            className="h-40 w-40 text-gray-300"
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
            <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />{" "}
            <circle cx="12" cy="13" r="3" />
          </svg>
          <span>Please serch for your desired image</span>
    </div>)
  }
  
  return (
    <>
      <div className="flex justify-between pt-4 bg-white">
        <div className="font-bold">
          {query} Stock Photos and Images{" "}
          <span className="font-normal  text-xs">({data?.total_results})</span>
        </div>
        {data?.photos.length ? <div className="flex items-center">
          <Paginator currentPage={data?.page} totalPage={Math.round(data?.total_results/data?.per_page || 0)} />
        </div>:''}
      </div>
      <div className=" bg-white grid grid-cols-1 gap-1 pt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 ">
        {data?.photos?.map((photo) => (
          
            <Photos key={photo.id} photo={photo}></Photos>
          
        ))}
      </div>
      {(Math.round(data? data.total_results: 1)/per_page  ) !== data?.page &&<div className=" bg-white flex justify-center pt-8 pb-8 border border-t-0 border-l-0 border-r-0 border-b-1">
          <Button currentPage={data?.page}/>
      </div>}

      <div className="flex justify-between pt-1 bg-white">
        <div>
          Search results for {query} Stock Photos and Images{" "}
          <span>({data?.total_results})</span>
        </div>
        {data?.photos.length ? <div className="flex items-center">
          <Paginator currentPage={data?.page} totalPage={Math.round(data?.total_results/data?.per_page || 0)} />
        </div>:''}
      </div>
     

    </>
  );
};

export default PhotoGrid;
