"use client"; // Required for useState in Next.js App Router

import { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/logo.svg';
import download from '../../public/download.svg';

type Props = {}

function Header({ }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='w-full bg-white'>
            <div className='max-w-7xl mx-auto flex justify-between items-center py-6 px-4 md:px-10'>

                {/* Logo Section */}
                <div className='flex items-center'>
                    <Image src={logo} alt="Logo" className="h-8 md:h-10 w-auto" />
                    <div className='text-black text-xl md:text-3xl font-bold ml-2 whitespace-nowrap'>
                        PORTFOLIO
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className='hidden lg:flex gap-8 xl:gap-12'>
                    {['About Me', 'Skills', 'Project', 'Contact Me'].map((item) => (
                        <button key={item} className='text-black text-lg xl:text-2xl font-bold cursor-pointer hover:opacity-70 transition-opacity'>
                            {item}
                        </button>
                    ))}
                </nav>

                {/* Resume Button & Mobile Toggle */}
                <div className='flex items-center gap-4'>
                    <div className='hidden lg:flex items-center p-2 md:p-3 bg-black rounded-sm cursor-pointer hover:bg-gray-800 transition-colors'>
                        <span className='text-white text-sm md:text-xl font-bold px-2'>Resume</span>
                        <Image src={download} alt="download" className="h-5 w-5 md:h-6 md:w-6" />
                    </div>

                    {/* Hamburger Icon */}
                    <button
                        className='lg:hidden flex flex-col gap-1.5'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className={`h-1 w-8 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                        <span className={`h-1 w-8 bg-black ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`h-1 w-8 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className='lg:hidden bg-white border-t border-gray-100 flex flex-col p-6 gap-6 shadow-lg'>
                    {['About Me', 'Skills', 'Project', 'Contact Me'].map((item) => (
                        <button key={item} className='text-black text-xl font-bold text-left'>
                            {item}
                        </button>
                    ))}
                    <div className='flex items-center p-2 px-4 md:p-3 bg-black rounded-sm cursor-pointer hover:bg-gray-800 transition-colors w-fit'>
                        <span className='text-white text-sm md:text-xl font-bold px-2'>Resume</span>
                        <Image src={download} alt="download" className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;