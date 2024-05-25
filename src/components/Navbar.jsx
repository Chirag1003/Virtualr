import {Menu, X } from "lucide-react";
import { useState } from "react";
import React from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] =useState(false);
      const toggleNavbar =() =>{
        setMobileDrawerOpen(!mobileDrawerOpen); 
      }
    
  return (
    <nav className=' sticky top-0 z-50 py-3 backdrop-blur-lg border-b'>
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img  className=' h-10 w-10 mr-2' src={logo} alt="logo" />
                    <span className="text-xl tracking-tight">VirtualR</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'> 
                    <li><a href="Features.jsx">Features</a></li>
                    <li><a href="Workflow.jsx">Workflow</a></li>
                    <li><a href="Pricing.jsx">Pricing</a></li>
                    <li><a href="Testimonials.jsx">Testimonials</a></li>
                </ul>
                <div className="hidden sm:flex">
                 <button  className=' py-2 px-3 mr-8  rounded-md'>
                    <a href="">Sign In</a></button>
                    <button  className=' bg-gradient-to-r from-orange-500 to to-orange-800 py-2 px-3  rounded-md '>
                    <a href="">Create an account</a></button>
                 </div>
                 <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X /> : <Menu />
                        }
                    </button>
                 </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-5  flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        <li><a href="">Features</a></li>
                        <li><a href="">Workflow</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Testimonials</a></li>
                        </ul>
                        <div className="flex space-x-6 mt-3">
                            <button className='border rounded-md ml-4 px-3'><a href="">Sign In</a> </button>
                            <button className="bg-gradient-to-r from-orange-500 to to-orange-800 py-2 px-3  rounded-md"><a href="">Create an Account</a> </button>
                            </div> </div>
            )}
        </div>
    </nav>


  )
}

export default Navbar;