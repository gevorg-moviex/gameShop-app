import Navbar from "../Navbar/navbar";
import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

export default function Header( {background} ) {
    return (
        <header className={`flex justify-around items-center py-4 ${background == "dark" ? "bg-black" : "bg-[#24183C]"} text-white`}>
            <div className="flex items-center justify-center gap-3">
                <Link to="/"><img src={logo} alt="" width="90" height="90" className="rounded-full cursor-pointer"/></Link>
                <Link to="/"><span className="font-bold tracking-widest text-xl">ARCADE</span></Link>
            </div>
            <Navbar />
        </header>
    )
};
