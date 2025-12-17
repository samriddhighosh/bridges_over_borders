"use client"
import Link from 'next/link'
import React from 'react'

// const Navbar = () => {
//   return (
//     <header className='body w-full px-32 py-2 border-b'>
//         <nav className='flex items-center justify-between'>
//             <Link href="/" className='text-[18px] font-semibold flex gap-2 justify-center items-center'>
//                 <img width={220} src="logo3.png" className='rounded-full'></img>
//                 {/* <p>Bridges and Bonds</p> */}
//             </Link>
//             <div>
//                 <div className='flex items-center gap-8 text-black'>
//                     <Link href="/">
//                         <span className="hover:text-secondary-purple max-sm:hidden">Mission</span>
//                     </Link>
//                     <Link href="/about">
//                         <span className="hover:text-secondary-purple max-sm:hidden">About</span>
//                     </Link>
//                     <Link href="/contact">
//                         <span className="hover:text-secondary-purple max-sm:hidden">Contact</span>
//                     </Link>
//                     <Link href="/programs">
//                         <span className="hover:text-secondary-purple max-sm:hidden">Programs</span>
//                     </Link>
//                     <Link href="/chapter">
//                         <span className="hover:text-secondary-purple max-sm:hidden">Chapter</span>
//                     </Link>
//                 </div>
//             </div>
//         </nav>
//     </header>
//   )
// }
import { useState } from 'react';

// You will likely need a Hamburger Icon (e.g., from lucide-react or just using SVG)
// For simplicity, I'm using a basic text icon here, but you should replace it with an SVG icon.

const MobileNavHeader = () => {
    // 1. Add State for the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 2. Toggle Function
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='body w-full px-4 sm:px-32 py-2 border-b'>
            <nav className='flex items-center justify-between'>
                {/* Logo Link */}
                <Link href="/" className='text-[18px] font-semibold flex gap-2 justify-center items-center'>
                    {/* Using an <img> tag for the logo */}
                    <img width={220} src="logo3.png" className='rounded-full' alt="Bridges and Bonds Logo" />
                </Link>

                {/* --- Mobile Hamburger Button (Visible only on small screens) --- */}
                <button
                    className='sm:hidden p-2 text-black focus:outline-none'
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    {/* Replace this with an actual SVG icon (e.g., a hamburger or close icon) */}
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    )}
                </button>

                {/* --- Desktop Navigation (Hidden on small screens) --- */}
                <div className='hidden sm:flex items-center gap-8 text-black'>
                    <Link href="/"><span className="hover:text-secondary-purple">Mission</span></Link>
                    <Link href="/about"><span className="hover:text-secondary-purple">About</span></Link>
                    <Link href="/contact"><span className="hover:text-secondary-purple">Contact</span></Link>
                    <Link href="/programs"><span className="hover:text-secondary-purple">Programs</span></Link>
                    <Link href="/chapter"><span className="hover:text-secondary-purple">Chapter</span></Link>
                </div>
            </nav>

            {/* --- Mobile Menu Dropdown (Conditionally rendered/styled) --- */}
            {isMenuOpen && (
                <div className='sm:hidden absolute top-16 left-0 w-full bg-white border-b shadow-lg z-50'>
                    <div className='flex flex-col p-4 space-y-2'>
                        {/* Wrap each mobile link in a div and add `onClick={toggleMenu}` to close the menu on click */}
                        <Link href="/" onClick={toggleMenu} className="block py-2 text-black hover:bg-gray-100">Mission</Link>
                        <Link href="/about" onClick={toggleMenu} className="block py-2 text-black hover:bg-gray-100">About</Link>
                        <Link href="/contact" onClick={toggleMenu} className="block py-2 text-black hover:bg-gray-100">Contact</Link>
                        <Link href="/programs" onClick={toggleMenu} className="block py-2 text-black hover:bg-gray-100">Programs</Link>
                        <Link href="/chapter" onClick={toggleMenu} className="block py-2 text-black hover:bg-gray-100">Chapter</Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default MobileNavHeader;

//export default Navbar;