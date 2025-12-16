import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='body w-full px-32 py-5 border-b'>
        <nav className='flex items-center justify-between'>
            <Link href="/">
                Bridges and Bonds
            </Link>
            <div>
                <div className='flex items-center gap-8 text-black'>
                    <Link href="/">
                        <span className="hover:text-secondary-purple max-sm:hidden">Mission</span>
                    </Link>
                    <Link href="/about">
                        <span className="hover:text-secondary-purple max-sm:hidden">About</span>
                    </Link>
                    <Link href="/contact">
                        <span className="hover:text-secondary-purple max-sm:hidden">Contact</span>
                    </Link>
                    <Link href="/programs">
                        <span className="hover:text-secondary-purple max-sm:hidden">Programs</span>
                    </Link>
                    <Link href="/chapter">
                        <span className="hover:text-secondary-purple max-sm:hidden">Chapter</span>
                    </Link>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar