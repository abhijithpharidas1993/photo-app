"use client";
import Image from "next/image";
import { Photo } from "../types/photo-api-response";
import PhotoActionButtons from "./PhotoActionButtons";
import { useState } from "react";

const Photos = ({ photo }: { photo: Photo }) => {
  const [inCart, setInCart] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={` relative group ${
        photo.height > photo.width ? "row-span-2" : "row-span-1"
      } border border-solid border-cyan-900`}
      key={photo.id}
      onMouseEnter={()=>{setFocused(true)}}
      onMouseLeave={()=>{setFocused(false)}}

    >
      <Image
        key={photo.id}
        src={photo.src.large}
        alt={photo.alt}
        width={200}
        height={200}
        priority={true}
        style={{
          objectFit: "fill",
          width: "100%",
          height: "100%",
        }}
      ></Image>
      {focused && <PhotoActionButtons inCart={inCart} setInCart={setInCart} />}
      {focused && <div className="absolute left-1 bottom-1 text-white text-xs">Photographer: <span>{photo.photographer}</span></div>}
      {focused && <div className="absolute w-full top-1 left-1 text-white text-xs truncate">{photo.id} : <span>{photo.alt}</span></div>}

    </div>
  );
};

export default Photos;
