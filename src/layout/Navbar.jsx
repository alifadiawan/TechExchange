import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-zinc-800 border-b border-zinc-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <a href='/' className="flex-shrink-0 flex items-center">
                            <span className="text-emerald-500 font-bold text-xl">Tech</span>
                            <span className="text-gray-200 font-bold text-xl">Exchange</span>
                        </a>
                        <div className="hidden md:ml-6 md:flex md:space-x-8">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'border-b-2 border-emerald-500 text-white px-1 pt-1 text-sm font-medium'
                                        : 'border-transparent hover:border-gray-300 border-b-2 hover:text-gray-300 px-1 pt-1 text-sm font-medium'
                                }
                            >
                                Beranda
                            </NavLink>

                            <NavLink
                                to="/shop"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'border-b-2 border-emerald-500 text-white px-1 pt-1 text-sm font-medium'
                                        : 'border-transparent hover:border-gray-300 border-b-2 hover:text-gray-300 px-1 pt-1 text-sm font-medium'
                                }
                            >
                                Jelajahi
                            </NavLink>

                            <NavLink
                                to="/listing/new-listing"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'border-b-2 border-emerald-500 text-white px-1 pt-1 text-sm font-medium'
                                        : 'border-transparent hover:border-gray-300 border-b-2 hover:text-gray-300 px-1 pt-1 text-sm font-medium'
                                }
                            >
                                Jual Barang
                            </NavLink>

                            <NavLink
                                to="/about-us"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'border-b-2 border-emerald-500 text-white px-1 pt-1 text-sm font-medium'
                                        : 'border-transparent hover:border-gray-300 border-b-2 hover:text-gray-300 px-1 pt-1 text-sm font-medium'
                                }
                            >
                                Tentang Kita
                            </NavLink>
                        </div>

                    </div>
                    <div className="flex items-center">
                        <div className="hidden md:flex items-center space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </a>
                            <a href="/profile/alif-adiawan" className="text-gray-300 hover:text-white">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </a>
                            <a href="/shop/cart" className="relative text-gray-300 hover:text-white">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                <span className="absolute -top-2 -right-2 bg-emerald-500 text-xs text-white font-bold rounded-full h-5 w-5 flex items-center justify-center">3</span>
                            </a>
                            <a href="/login" className="relative text-black bg-emerald-500 p-2 rounded-md ms-5 px-5 hover:text-white">
                                Login
                            </a>
                        </div>
                        <div className="flex md:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-gray-300 hover:text-white focus:outline-none"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden px-4 pb-3 pt-2 space-y-1 bg-zinc-800 border-t border-zinc-700">
                    <a href="/" className="block text-white px-3 py-2 rounded-md text-base font-medium">Beranda</a>
                    <a href="/shop" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">Jelajahi</a>
                    <a href="#" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">Jual Barang</a>
                    <a href="#" className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">Tentang Kita</a>
                    <div className="flex space-x-4 mt-2">
                        <a href="#" className="text-gray-300 hover:text-white">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </a>
                        <a href="/profile/alif-adiawan" className="text-gray-300 hover:text-white">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </a>
                        <a href="/shop/cart" className="relative text-gray-300 hover:text-white">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span className="absolute -top-2 -right-2 bg-emerald-500 text-xs text-white font-bold rounded-full h-5 w-5 flex items-center justify-center">3</span>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar