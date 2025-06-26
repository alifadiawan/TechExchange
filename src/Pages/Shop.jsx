import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence
import App from '../App';

import macbookIMG from '../assets/macbook.jpg';
import headphone1 from '../assets/headphone1.jpg';
import stikps4 from '../assets/stikps4.jpg';
import psvita from '../assets/psvita.jpg';
import asustuf from '../assets/asustuf.jpg';
import switcholed from '../assets/switcholed.jpg';
import stikrexus from '../assets/stikrexus.jpg';

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
            image: "accessory-placeholder" // Make sure you have a placeholder image for this
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

    // Animation variants for the product grid
    const gridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    // Animation variants for each product card
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 }
    };


    return (
        <App>
            <div className="bg-zinc-800 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Filter Buttons */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-3 mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.button
                            onClick={() => setActiveCategory('all')}
                            className={`px-4 py-2 rounded-full text-sm font-medium ${activeCategory === 'all'
                                ? 'bg-emerald-500 text-white'
                                : 'bg-zinc-700 text-gray-300 hover:bg-zinc-600'
                                }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Semua
                        </motion.button>
                        {Object.keys(categoryIcons).map(category => (
                            <motion.button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 ${activeCategory === category
                                    ? 'bg-emerald-500 text-white'
                                    : 'bg-zinc-700 text-gray-300 hover:bg-zinc-600'
                                    }`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <span>{categoryIcons[category]}</span>
                                <span className="capitalize">{category}</span>
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Product Grid */}
                    <motion.div
                        key={activeCategory} // This key is crucial for AnimatePresence to detect changes
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        variants={gridVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <AnimatePresence>
                            {filteredProducts.map((product) => (
                                <motion.a
                                    href='/shop/detail/3e132d39-975d-4f74-9060-27e830efe285'
                                    key={product.id}
                                    className="bg-zinc-700 rounded-lg overflow-hidden shadow-lg flex flex-col"
                                    variants={cardVariants}
                                    exit="exit"
                                    layout // This enables smooth re-ordering animations
                                    whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.25)" }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="h-48 bg-zinc-800 flex items-center justify-center overflow-hidden">
                                        <motion.img
                                            src={product.image}
                                            alt={product.name}
                                            className="object-contain h-full w-full"
                                            initial={{ scale: 1.2 }}
                                            whileHover={{ scale: 1 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col flex-grow">
                                        <h3 className="text-white font-medium text-lg mb-1 flex-grow">{product.name}</h3>
                                        <p className="text-emerald-500 font-bold text-xl mb-2">{formatPrice(product.price)}</p>
                                        <p className="text-gray-400 text-sm mb-4">{product.condition}</p>
                                        <div className="flex justify-between items-center mt-auto">
                                            <motion.button
                                                className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-1 px-4 rounded-md text-sm"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                Tambah ke Keranjang
                                            </motion.button>
                                            <motion.button
                                                className="text-gray-300 hover:text-white"
                                                whileHover={{ scale: 1.2 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Pagination */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-center">
                    <motion.nav
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <motion.a href="#" className="p-2 rounded-md bg-zinc-700 text-gray-400 hover:bg-zinc-600 hover:text-white" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.a>
                        <motion.a href="#" className="py-2 px-4 rounded-md bg-emerald-500 text-white font-medium" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>1</motion.a>
                        <motion.a href="#" className="py-2 px-4 rounded-md bg-zinc-700 text-gray-300 hover:bg-zinc-600 font-medium" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>2</motion.a>
                        <motion.a href="#" className="py-2 px-4 rounded-md bg-zinc-700 text-gray-300 hover:bg-zinc-600 font-medium" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>3</motion.a>
                        <span className="text-gray-500">...</span>
                        <motion.a href="#" className="py-2 px-4 rounded-md bg-zinc-700 text-gray-300 hover:bg-zinc-600 font-medium" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>10</motion.a>
                        <motion.a href="#" className="p-2 rounded-md bg-zinc-700 text-gray-300 hover:bg-zinc-600 hover:text-white" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.a>
                    </motion.nav>
                </div>
            </div>
        </App>
    )
}

export default Shop;