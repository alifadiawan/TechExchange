import React, { useState } from 'react'
import App from '../App'

import macbookIMG from '../assets/macbook.jpg'
import headphone1 from '../assets/headphone1.jpg'
import stikps4 from '../assets/stikps4.jpg'
import psvita from '../assets/psvita.jpg'
import asustuf from '../assets/asustuf.jpg'
import switcholed from '../assets/switcholed.jpg'
import stikrexus from '../assets/stikrexus.jpg'


const Shop = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    // Sample product data
    const products = [
        {
            id: 1,
            name: "Macbook Air 13 M2 8 256 Second",
            price: 12800000,
            category: "laptop",
            condition: "Bekas - Seperti Baru",
            image: macbookIMG
        },
        {
            id: 2,
            name: "Earfun Wave pro",
            price: 700000,
            category: "aksesori",
            condition: "Bekas - Mulus",
            image: headphone1
        },
        {
            id: 3,
            name: "Stik PS4 Original Sony Second",
            price: 350000,
            category: "konsol",
            condition: "Bekas - Terawat",
            image: stikps4
        },
        {
            id: 4,
            name: "PS Vita slim 2000 CFW 32gb",
            price: 2100000,
            category: "aksesori",
            condition: "Bekas - Bagus",
            image: psvita
        },
        {
            id: 5,
            name: "ASUS TUF GAMING 32GB RAM",
            price: 7000000,
            category: "laptop",
            condition: "Bekas - Mulus",
            image: asustuf
        },
        {
            id: 6,
            name: "Stik rexus asteria AX1 gen 2",
            price: 250000,
            category: "konsol",
            condition: "Bekas - Seperti Baru",
            image: stikrexus
        },
        {
            id: 7,
            name: "Nintendo Switch Oled Original Softwere (OFW) Bisa main Online Fullset semua original Bonus Case",
            price: 3700000,
            category: "konsol",
            condition: "Bekas - Mulus",
            image: switcholed
        },
        {
            id: 8,
            name: "Mouse Logitech G Pro X",
            price: 750000,
            category: "aksesori",
            condition: "Bekas - Terawat",
            image: "accessory-placeholder"
        }
    ];

    // Category icons
    const categoryIcons = {
        laptop: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        smartphone: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
        konsol: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
        ),
        aksesori: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        )
    };

    // Filter products based on active category
    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(product => product.category === activeCategory);

    // Format price to IDR
    const formatPrice = (price) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    };

    return (
        <App>
            <div className="bg-zinc-800 min-h-screen">

                {/* Shop Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <button
                            onClick={() => setActiveCategory('all')}
                            className={`px-4 py-2 rounded-full text-sm font-medium ${activeCategory === 'all'
                                ? 'bg-emerald-500 text-white'
                                : 'bg-zinc-700 text-gray-300 hover:bg-zinc-600'
                                }`}
                        >
                            Semua
                        </button>
                        <button
                            onClick={() => setActiveCategory('laptop')}
                            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 ${activeCategory === 'laptop'
                                ? 'bg-emerald-500 text-white'
                                : 'bg-zinc-700 text-gray-300 hover:bg-zinc-600'
                                }`}
                        >
                            <span>{categoryIcons.laptop}</span>
                            <span>Laptop</span>
                        </button>
                        <button
                            onClick={() => setActiveCategory('smartphone')}
                            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 ${activeCategory === 'smartphone'
                                ? 'bg-emerald-500 text-white'
                                : 'bg-zinc-700 text-gray-300 hover:bg-zinc-600'
                                }`}
                        >
                            <span>{categoryIcons.smartphone}</span>
                            <span>Smartphone</span>
                        </button>
                        <button
                            onClick={() => setActiveCategory('konsol')}
                            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 ${activeCategory === 'konsol'
                                ? 'bg-emerald-500 text-white'
                                : 'bg-zinc-700 text-gray-300 hover:bg-zinc-600'
                                }`}
                        >
                            <span>{categoryIcons.konsol}</span>
                            <span>Konsol</span>
                        </button>
                        <button
                            onClick={() => setActiveCategory('aksesori')}
                            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 ${activeCategory === 'aksesori'
                                ? 'bg-emerald-500 text-white'
                                : 'bg-zinc-700 text-gray-300 hover:bg-zinc-600'
                                }`}
                        >
                            <span>{categoryIcons.aksesori}</span>
                            <span>Aksesori</span>
                        </button>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <a href='/shop/detail/3e132d39-975d-4f74-9060-27e830efe285' key={product.id} className="bg-zinc-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="h-48 bg-zinc-800 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="object-contain h-full w-full"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-white font-medium text-lg mb-1">{product.name}</h3>
                                    <p className="text-emerald-500 font-bold text-xl mb-2">{formatPrice(product.price)}</p>
                                    <p className="text-gray-400 text-sm mb-4">{product.condition}</p>
                                    <div className="flex justify-between items-center">
                                        <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-1 px-4 rounded-md text-sm">
                                            Tambah ke Keranjang
                                        </button>
                                        <button className="text-gray-300 hover:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Pagination */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-center">
                    <nav className="flex items-center space-x-2">
                        <a href="#" className="p-2 rounded-md bg-zinc-700 text-gray-400 hover:bg-zinc-600 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </a>
                        <a href="#" className="py-2 px-4 rounded-md bg-emerald-500 text-white font-medium">1</a>
                        <a href="#" className="py-2 px-4 rounded-md bg-zinc-700 text-gray-300 hover:bg-zinc-600 font-medium">2</a>
                        <a href="#" className="py-2 px-4 rounded-md bg-zinc-700 text-gray-300 hover:bg-zinc-600 font-medium">3</a>
                        <span className="text-gray-500">...</span>
                        <a href="#" className="py-2 px-4 rounded-md bg-zinc-700 text-gray-300 hover:bg-zinc-600 font-medium">10</a>
                        <a href="#" className="p-2 rounded-md bg-zinc-700 text-gray-300 hover:bg-zinc-600 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </nav>
                </div>

                
            </div>
        </App>
    )
}

export default Shop