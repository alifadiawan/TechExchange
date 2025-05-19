import React from 'react'
import App from '../App'

const LandingPage = () => {
    return (
        <App>

            {/* hero */}
            <div className="relative bg-zinc-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="md:w-1/2 md:pr-8">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Barang Bekas <br /> Rasa Sultan!</h1>
                            <p className="text-lg text-gray-300 mb-6">Beli dan jual perlengkapan gaming, laptop, dan aksesori
                                teknologi bekas berkualitas tinggi dengan harga yang terjangkau.</p>
                            <div className="flex space-x-4">
                                <a href="#" className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-6 rounded-md">Belanja
                                    Sekarang</a>
                                <a href="#" className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-medium py-2 px-6 rounded-md">Jual
                                    Barang</a>
                            </div>
                        </div>
                        <div className="hidden md:block md:w-1/2">
                            <div className="grid grid-cols-2 gap-4 mt-8 md:mt-0">
                                <div className="bg-zinc-700 rounded-lg p-4 transform hover:scale-105 transition-transform duration-200">
                                    <div className="h-40 bg-zinc-800 rounded flex items-center justify-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-center text-sm font-medium">Laptop Gaming</p>
                                </div>
                                <div className="bg-zinc-700 rounded-lg p-4 transform hover:scale-105 transition-transform duration-200">
                                    <div className="h-40 bg-zinc-800 rounded flex items-center justify-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-center text-sm font-medium">Smartphone</p>
                                </div>
                                <div className="bg-zinc-700 rounded-lg p-4 transform hover:scale-105 transition-transform duration-200">
                                    <div className="h-40 bg-zinc-800 rounded flex items-center justify-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                                        </svg>
                                    </div>
                                    <p className="text-center text-sm font-medium">Konsol Gaming</p>
                                </div>
                                <div className="bg-zinc-700 rounded-lg p-4 transform hover:scale-105 transition-transform duration-200">
                                    <div className="h-40 bg-zinc-800 rounded flex items-center justify-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <p className="text-center text-sm font-medium">Aksesori</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* product */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-white">Featured Products</h2>
                    <a href="#" className="text-emerald-500 hover:text-emerald-400">View all</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Product 1 */}
                    <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="relative">
                            <img src="https://scontent.fsub6-7.fna.fbcdn.net/v/t45.5328-4/489376547_1323803232247723_1149380987790561750_n.jpg?stp=dst-jpg_p960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeFyMHAiY40q80OLgXpdWLCx-6imkDBPsaz7qKaQME-xrLZBGGzMq-meYCdX5CFrxModuAihSNqrMfcENWmOTDaQ&_nc_ohc=yKu9BJnwEaQQ7kNvwGenJmZ&_nc_oc=Adn2JIffnFf3uQZ49CSL-WWN4A6CWvySmbo0ZfPB-czqSh5aZaoucRYcSTWxAorJtAY&_nc_zt=23&_nc_ht=scontent.fsub6-7.fna&_nc_gid=_daL99lB30ljwb1NmrWICA&oh=00_AfIQUch04t1GBvDoRCcOc29jyn1sq9RyWb6MSj2b4NlzIQ&oe=6829A6B3" alt="Razer Blade 15" className="h-48 w-full object-cover" />
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">joystick steelseries nimbus+ with apple arcade</h3>
                                <div className="text-emerald-500 font-bold">Rp275.000</div>
                            </div>
                            {/* <p class="text-gray-400 text-sm mb-4">Gaming Laptop, RTX 3070, 16GB RAM</p> */}
                            <div className="flex justify-between items-center">
                                <button className="bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="relative">
                            <img src="https://scontent.fsub6-6.fna.fbcdn.net/v/t45.5328-4/497945418_981722160454266_34869432875288257_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeEVgKG2TH6Nt_m_3_7RhkAI98opwG-mQnj3yinAb6ZCeFYFEAFrg5iOoZmLvC41m4fy5KpT3xzJbu4wEwzIPZAJ&_nc_ohc=1uixMgoIA0MQ7kNvwEycqxy&_nc_oc=AdkbXfsOqlhY7IDaBZE_4LFmXPqtK78P9VfWlQ04pcXneg7pxFVfxDZ7f4NsYGFQHmc&_nc_zt=23&_nc_ht=scontent.fsub6-6.fna&_nc_gid=cOxvtcZvDOnZaeiPOf3IXA&oh=00_AfJlw28enO-pmrKtYeYVE74pC1oJn4JEcobuTDn_7x2o6Q&oe=6829B42C" alt="Razer Blade 15" className="h-48 w-full object-cover" />
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">Nintendo Switch V1 OFW Joycon Original + Memori 128GB Docking Strap HDMI
                                    Charger Original</h3>
                                <div className="text-emerald-500 font-bold">Rp 2.200.000</div>
                            </div>
                            {/* <p class="text-gray-400 text-sm mb-4">Gaming Laptop, RTX 3070, 16GB RAM</p> */}
                            <div className="flex justify-between items-center">
                                <button className="bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="relative">
                            <img src="https://scontent.fsub6-3.fna.fbcdn.net/v/t45.5328-4/495164059_1081362597162175_4260054515771579560_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeFX5MQ9-DVPkJsFQ_D5GMl_psTUw0LHpoemxNTDQsemhwiAlV4QYeU6tdy0Uy7cgjnDJxprM2g2CVcCpCzS2Xtz&_nc_ohc=ERuRJRbociIQ7kNvwGVkEj7&_nc_oc=AdmE9DOaLN2cHJ2_A9eAMoF4cYnzZNTmJ-3JG9rpEfz_5gVR9OABAg88lzAhXOb3YVw&_nc_zt=23&_nc_ht=scontent.fsub6-3.fna&_nc_gid=bszuOfjiKi-_rKP3y99ZhA&oh=00_AfI2nn8qMq5d2PI9wQT9Lt0MbC9ny2B8P4WK36GayWJ5OA&oe=6829B352" alt="Razer Blade 15" className="h-48 w-full object-cover" />
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">Hansed DBE GM190</h3>
                                <div className="text-emerald-500 font-bold">Rp70.000</div>
                            </div>
                            <div className="flex justify-between items-center">
                                <button className="bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="relative">
                            <img src="https://scontent.fsub6-6.fna.fbcdn.net/v/t45.5328-4/491774810_555301883903354_3273164709764506150_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeGNrjFVVccmRpyvP9KVT3C0Qxo9xjr5KIBDGj3GOvkogOx9jRamSb3uI64bw8mFX8sg8a_gupqd9IEIG8Z7LnbW&_nc_ohc=GQVqy2I89uEQ7kNvwGvuFGH&_nc_oc=AdkuHbbinNoFF9cVhmxPsfwC323OGKK59m0zxbXnfm0nTjlEPOFjF1QDaI2_MoWe4F0&_nc_zt=23&_nc_ht=scontent.fsub6-6.fna&_nc_gid=sXh9IGkUnILNmlsz5Zb11g&oh=00_AfLNNTIJqGyt9ZuKhO9L6M891MZ-8xYlh4e3kJufWj29rw&oe=6829B4C6" alt="Razer Blade 15" className="h-48 w-full object-cover" />
                        </div>
                        <div className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-medium">Macbook Air M1</h3>
                                <div className="text-emerald-500 font-bold">Rp8.000.00</div>
                            </div>
                            <div className="flex justify-between items-center">
                                <button className="bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-zinc-800 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-white mb-8">Browse Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <a href="#" className="bg-zinc-700 rounded-lg p-6 text-center hover:bg-zinc-600 transition-colors duration-200">
                            <div className="text-emerald-500 mb-3 flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="font-medium">Laptops</div>
                            <div className="text-xs text-gray-400 mt-1">212 items</div>
                        </a>
                        <a href="#" className="bg-zinc-700 rounded-lg p-6 text-center hover:bg-zinc-600 transition-colors duration-200">
                            <div className="text-emerald-500 mb-3 flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                                </svg>
                            </div>
                            <div className="font-medium">Gaming Consoles</div>
                            <div className="text-xs text-gray-400 mt-1">87 items</div>
                        </a>
                        <a href="#" className="bg-zinc-700 rounded-lg p-6 text-center hover:bg-zinc-600 transition-colors duration-200">
                            <div className="text-emerald-500 mb-3 flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="font-medium">Smartphones</div>
                            <div className="text-xs text-gray-400 mt-1">145 items</div>
                        </a>
                        <a href="#" className="bg-zinc-700 rounded-lg p-6 text-center hover:bg-zinc-600 transition-colors duration-200">
                            <div className="text-emerald-500 mb-3 flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <div className="font-medium">Accessories</div>
                            <div className="text-xs text-gray-400 mt-1">289 items</div>
                        </a>
                    </div>
                </div>
            </div>


        </App>
    )
}

export default LandingPage