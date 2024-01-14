"use client"
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        {id: 1, path: "/", name: "Home"},
        {id: 2, path: "/about", name: "About"},
        {id: 3, path: "/skills", name: "Skills"},
        {id: 4, path: "/portfolio", name: "Portfolio"}
    ]
    return (
        <nav className="flex justify-between bg-green-500 p-6">
            <div>
                <Link href="/">Azizul</Link>
            </div>
            
            <div className="">
                <div className="md:hidden text-xl cursor-pointer" onClick={()=> setOpen(!open)}>
                    {
                        open === true ? <i class="fa-solid fa-xmark"></i>
                        : <i class="fa-solid fa-bars"></i>
                    }
                </div>
                <ul className={`md:flex gap-10 ${open ? "" : "hidden"}`}>
                    {
                        routes.map(route => <li className="" key={route.id}><Link href={route.path}>{route.name}</Link></li>)
                    }
                </ul>
                
            </div>
        </nav>
    );
};

export default Navbar;