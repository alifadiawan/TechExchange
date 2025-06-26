import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const linkClass = ({ isActive }) =>
        isActive
            ? 'border-b-2 border-emerald-500 text-white px-1 pt-1 text-sm font-medium'
            : 'border-b-2 border-transparent text-gray-300 hover:border-gray-300 hover:text-white px-1 pt-1 text-sm font-medium';

    const mobileLinkClass = ({ isActive }) =>
        isActive
            ? 'bg-zinc-900 text-white block px-3 py-2 rounded-md text-base font-medium'
            : 'text-gray-300 hover:bg-zinc-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium';

    return (
        <nav className="bg-zinc-800 border-b border-zinc-700 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and Desktop Nav Links */}
                    <div className="flex items-center">
                        <NavLink to='/' className="flex-shrink-0 flex items-center">
                            <span className="text-emerald-500 font-bold text-xl">Tech</span>
                            <span className="text-gray-200 font-bold text-xl">Exchange</span>
                        </NavLink>
                        {/* Desktop Navigation - CHANGED md: to lg: */}
                        <div className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-8">
                            <NavLink to="/" className={linkClass}>Beranda</NavLink>
                            <NavLink to="/shop" className={linkClass}>Jelajahi</NavLink>
                            <NavLink to="/listing/new-listing" className={linkClass}>Jual Barang</NavLink>
                            <NavLink to="/artikel" className={linkClass}>Artikel</NavLink>
                            <NavLink to="/about-us" className={linkClass}>Tentang Kita</NavLink>
                        </div>
                    </div>

                    {/* Right-side Icons & Login - Desktop - CHANGED md: to lg: */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <a href="#" className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-zinc-700">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </a>
                        <a href="/profile/alif-adiawan" className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-zinc-700">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </a>
                        <a href="/shop/cart" className="relative text-gray-300 hover:text-white p-2 rounded-full hover:bg-zinc-700">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span className="absolute -top-1 -right-1 bg-emerald-500 text-xs text-white font-bold rounded-full h-5 w-5 flex items-center justify-center">3</span>
                        </a>
                        <NavLink to="/login" className="text-white bg-emerald-600 hover:bg-emerald-700 font-medium rounded-md text-sm px-5 py-2 transition-colors duration-300">
                            Login
                        </NavLink>
                    </div>

                    {/* Mobile Menu Button - CHANGED md: to lg: */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - CHANGED md: to lg: */}
            {mobileMenuOpen && (
                <div className="lg:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink to="/" className={mobileLinkClass}>Beranda</NavLink>
                        <NavLink to="/shop" className={mobileLinkClass}>Jelajahi</NavLink>
                        <NavLink to="/listing/new-listing" className={mobileLinkClass}>Jual Barang</NavLink>
                        <NavLink to="/artikel" className={mobileLinkClass}>Artikel</NavLink>
                        <NavLink to="/about-us" className={mobileLinkClass}>Tentang Kita</NavLink>
                    </div>
                    <div className="pt-4 pb-3 border-t border-zinc-700">
                        <div className="flex items-center px-5">
                            <a href="/profile/alif-adiawan" className="text-gray-300 hover:text-white p-2 rounded-full hover:bg-zinc-700">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </a>
                            <a href="/shop/cart" className="relative ml-4 text-gray-300 hover:text-white p-2 rounded-full hover:bg-zinc-700">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                <span className="absolute -top-1 -right-1 bg-emerald-500 text-xs text-white font-bold rounded-full h-5 w-5 flex items-center justify-center">3</span>
                            </a>
                        </div>
                        <div className="mt-3 px-2 space-y-1">
                            <NavLink to="/login" className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-zinc-700">
                                Login
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;