import React from 'react'
import { motion } from 'framer-motion' // Import motion from framer-motion
import App from '../App'

import steelseries from '../assets/steelseries_nimbus.jpg'
import switcholed from '../assets/switcholed.jpg'
import dbegm190 from '../assets/dbegm190.jpg'
import macbookIMG from '../assets/macbook.jpg'

// Animation Variants for container elements to stagger children
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Stagger effect for children
        },
    },
};

// Animation Variants for child elements
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};

const LandingPage = () => {
    return (
        <App>
            {/* hero */}
            <div className="relative bg-zinc-800">
                <motion.div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <div className="md:flex md:items-center md:justify-between">
                        <motion.div className="md:w-1/2 md:pr-8" variants={itemVariants}>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Barang Bekas <br /> Rasa Sultan!</h1>
                            <p className="text-lg text-gray-300 mb-6">Beli dan jual perlengkapan gaming, laptop, dan aksesori
                                teknologi bekas berkualitas tinggi dengan harga yang terjangkau.</p>
                            <div className="flex space-x-4">
                                <motion.a
                                    href="/shop"
                                    className="bg-emerald-500 text-white font-medium py-2 px-6 rounded-md"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Belanja Sekarang
                                </motion.a>
                                <motion.a
                                    href="/listing/new-listing"
                                    className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-medium py-2 px-6 rounded-md"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Jual Barang
                                </motion.a>
                            </div>
                        </motion.div>
                        <div className="hidden md:block md:w-1/2">
                            <motion.div
                                className="grid grid-cols-2 gap-4 mt-8 md:mt-0"
                                variants={containerVariants}
                            >
                                {/* Hero Categories */}
                                <motion.div className="bg-zinc-700 rounded-lg p-4" variants={itemVariants} whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
                                    <div className="h-40 bg-zinc-800 rounded flex items-center justify-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-center text-sm font-medium">Laptop Gaming</p>
                                </motion.div>
                                <motion.div className="bg-zinc-700 rounded-lg p-4" variants={itemVariants} whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
                                    <div className="h-40 bg-zinc-800 rounded flex items-center justify-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-center text-sm font-medium">Smartphone</p>
                                </motion.div>
                                <motion.div className="bg-zinc-700 rounded-lg p-4" variants={itemVariants} whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
                                    <div className="h-40 bg-zinc-800 rounded flex items-center justify-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                                        </svg>
                                    </div>
                                    <p className="text-center text-sm font-medium">Konsol Gaming</p>
                                </motion.div>
                                <motion.div className="bg-zinc-700 rounded-lg p-4" variants={itemVariants} whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
                                    <div className="h-40 bg-zinc-800 rounded flex items-center justify-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <p className="text-center text-sm font-medium">Aksesori</p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* product */}
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
                initial="hidden"
                whileInView="visible" // Animate when the section scrolls into view
                viewport={{ once: true, amount: 0.2 }} // Animation triggers once
                variants={containerVariants}
            >
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-white">Featured Products</h2>
                    <a href="#" className="text-emerald-500 hover:text-emerald-400">View all</a>
                </div>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                >
                    {/* Product 1 */}
                    <motion.a href='/shop/detail/3e132d39-975d-4f74-9060-27e830efe285' className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg" variants={itemVariants} whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}>
                        <div className="relative">
                            <img src={steelseries} alt="Steelseries Nimbus+" className="h-48 w-full object-cover" />
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">joystick steelseries nimbus+ with apple arcade</h3>
                                <div className="text-emerald-500 font-bold">Rp275.000</div>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <motion.button className="bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full" whileTap={{ scale: 0.9 }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>
                    </motion.a>

                    {/* Repeat for other products */}
                    <motion.a href='/shop/detail/...' className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg" variants={itemVariants} whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}>
                        <div className="relative">
                            <img src={switcholed} alt="Nintendo Switch OLED" className="h-48 w-full object-cover" />
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">Nintendo Switch V1 OFW Joycon Original + Memori 128GB...</h3>
                                <div className="text-emerald-500 font-bold">Rp 2.200.000</div>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <motion.button className="bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full" whileTap={{ scale: 0.9 }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>
                    </motion.a>

                    <motion.a href='/shop/detail/...' className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg" variants={itemVariants} whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}>
                        <div className="relative">
                            <img src={dbegm190} alt="Hansed DBE GM190" className="h-48 w-full object-cover" />
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">Hansed DBE GM190</h3>
                                <div className="text-emerald-500 font-bold">Rp70.000</div>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <motion.button className="bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full" whileTap={{ scale: 0.9 }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>
                    </motion.a>

                    <motion.a href='/shop/detail/...' className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg" variants={itemVariants} whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}>
                        <div className="relative">
                            <img src={macbookIMG} alt="Macbook Air M1" className="h-48 w-full object-cover" />
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">Macbook Air M1</h3>
                                <div className="text-emerald-500 font-bold">Rp8.000.000</div>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <motion.button className="bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full" whileTap={{ scale: 0.9 }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>
                    </motion.a>
                </motion.div>
            </motion.div>

            <div className="bg-zinc-800 py-12">
                <motion.div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <h2 className="text-2xl font-bold text-white mb-8">Browse Categories</h2>
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                        variants={containerVariants}
                    >
                        {/* Animated Categories */}
                        <motion.a href="#" className="bg-zinc-700 rounded-lg p-6 text-center" variants={itemVariants} whileHover={{ scale: 1.05, backgroundColor: "#3f3f46" }}>
                            <div className="text-emerald-500 mb-3 flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="font-medium">Laptops</div>
                            <div className="text-xs text-gray-400 mt-1">212 items</div>
                        </motion.a>

                        {/* Repeat for other categories */}
                        <motion.a href="#" className="bg-zinc-700 rounded-lg p-6 text-center" variants={itemVariants} whileHover={{ scale: 1.05, backgroundColor: "#3f3f46" }}>
                            <div className="text-emerald-500 mb-3 flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                                </svg>
                            </div>
                            <div className="font-medium">Gaming Consoles</div>
                            <div className="text-xs text-gray-400 mt-1">87 items</div>
                        </motion.a>

                        <motion.a href="#" className="bg-zinc-700 rounded-lg p-6 text-center" variants={itemVariants} whileHover={{ scale: 1.05, backgroundColor: "#3f3f46" }}>
                            <div className="text-emerald-500 mb-3 flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="font-medium">Smartphones</div>
                            <div className="text-xs text-gray-400 mt-1">145 items</div>
                        </motion.a>

                        <motion.a href="#" className="bg-zinc-700 rounded-lg p-6 text-center" variants={itemVariants} whileHover={{ scale: 1.05, backgroundColor: "#3f3f46" }}>
                            <div className="text-emerald-500 mb-3 flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <div className="font-medium">Accessories</div>
                            <div className="text-xs text-gray-400 mt-1">289 items</div>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </App>
    )
}

export default LandingPage;