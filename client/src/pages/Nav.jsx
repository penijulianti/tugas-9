// import { useState } from "react";
import { SiBandlab } from "react-icons/si";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Nav(){

    return(
        <>
        <header className={ "fixed bg-pink-500 text-gray-800 flex justify-between items-center w-full h-32 px-4 py-5 "}>
            {/* <div className="ml-2"> */}
            <Link to="/">
              <h1><SiBandlab size={85}/>KPop Area</h1>
            </Link>
            {/* </div> */}
            </header>
            


    </>
    )
}