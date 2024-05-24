import Link from "next/link";
import React from "react";
import NavContent from "./NavContent";

const Header = () => {
  return (
    <nav className="flex fixed top-0 left-0 justify-between items-center p-1 bg-black text-white  h-14 w-full z-50">
      <Link className="uppercase" href={"/"}>
        My Photo APP
      </Link>
      <div>
        <NavContent/>
      </div>
    </nav>
  );
};

export default Header;
