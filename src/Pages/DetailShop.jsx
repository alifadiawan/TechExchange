
import { useState } from 'react';
import { Star, ShoppingCart, Heart, Share2, ArrowLeft, AlertCircle, Gamepad2, Zap, BarChart4, X, MessageCircle, Send } from 'lucide-react';

import switcholed from '../assets/switcholed.jpg'
import switcholed2 from '../assets/switcholed2.jpg'
import switcholed3 from '../assets/switcholed3.jpg'

import App from '../App';

const DetailShop = () => {
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [activeTab, setActiveTab] = useState('specs');
    const [showModal, setShowModal] = useState(false);


    const product = {
        name: "Nintendo Switch Oled Original Softwere (OFW) Bisa main Online Fullset semua original Bonus Case",
        condition: "Excellent",
        price: 3700000,
        originalPrice: 1499.99,
        rating: 4.6,
        reviewCount: 47,
        "description": "Nintendo Switch OLED Original – 64GB (Tanpa Game)\nKondisi fullset, semua aksesoris original:\n\n- Tempered glass terpasang\n- Dus original (Serial Number sesuai)\n- Docking untuk TV\n- Joy-Con original\n- Strap original\n- Hand grip\n- Kabel HDMI\n- Charger\n- Case Nintendo Switch",
        warranty: "90-day seller warranty",
        images: [
            switcholed,
            switcholed2,
            switcholed3,
        ],
        specs: {
            processor: "AMD Ryzen 9 5900HX, 8-core, 3.3GHz (4.6GHz boost)",
            graphics: "NVIDIA GeForce RTX 3070 8GB GDDR6",
            memory: "16GB DDR4-3200MHz (Upgradable to 32GB)",
            storage: "1TB NVMe SSD",
            display: "15.6-inch Full HD IPS, 300Hz, 3ms, 100% sRGB",
            cooling: "ROG Intelligent Cooling with liquid metal compound",
            battery: "90WHrs, 4-cell Li-ion",
            ports: "3x USB 3.2 Gen 1, 1x USB-C 3.2 Gen 2, 1x HDMI 2.0b, 1x 3.5mm Audio"
        },
        benchmarkResults: {
            "3DMark Time Spy": "9843",
            "PCMark 10": "6723",
            "Cinebench R23 Multi-core": "12587",
            "Geekbench 5 Single-core": "1487",
            "Geekbench 5 Multi-core": "8956"
        },
        sellerNotes: "Used for light gaming for 8 months. No issues or damage. Upgraded to desktop setup, so selling this laptop. Original box and all accessories included. Battery health at 97%."
    };

    const handleQuantityChange = (amount) => {
        const newQuantity = quantity + amount;
        if (newQuantity >= 1 && newQuantity <= 10) {
            setQuantity(newQuantity);
        }
    };

    const handleAddToCart = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };


    return (
        <App>
            <div className="bg-zinc-900 min-h-screen text-gray-300">
                {/* Product detail section */}
                <div className="container mx-auto py-8 px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Product images */}
                        <div className="lg:w-2/5">
                            <div className="bg-zinc-800 rounded-lg overflow-hidden">
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-4">
                                {product.images.map((img, index) => (
                                    <div key={index} className="bg-zinc-800 rounded-lg overflow-hidden">
                                        <img
                                            src={img}
                                            alt={`${product.name} view ${index + 1}`}
                                            className="w-full h-24 object-cover cursor-pointer"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product details */}
                        <div className="lg:w-3/5">
                            <div className="flex flex-wrap items-center gap-2">
                                <h1 className="text-3xl font-bold text-white">{product.name}</h1>
                                <span className="bg-emerald-600 text-white text-xs px-2 py-1 rounded-md uppercase font-semibold">
                                    {product.condition}
                                </span>
                            </div>

                            <div className="mt-6 flex items-center">
                                <span className="text-3xl text-white font-bold">${product.price.toFixed(2)}</span>
                            </div>

                            <div
                                className="mt-6 text-gray-400 whitespace-pre-line"
                                dangerouslySetInnerHTML={{ __html: product.description }}
                            ></div>

                            {/* Action buttons */}
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <button
                                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white py-3 px-6 rounded-md flex items-center justify-center transition-all"
                                    onClick={handleAddToCart}
                                >
                                    <MessageCircle size={20} className="mr-2" />
                                    Tanya Penjual
                                </button>
                                <a
                                    className="flex-1 border border-emerald-600 hover:bg-emerald-500 text-white py-3 px-6 rounded-md flex items-center justify-center transition-all"
                                   href='/shop/cart'
                                >
                                    <ShoppingCart size={20} className="mr-2" />
                                    Beli
                                </a>

                                {showModal && (
                                    <div className="fixed bottom-4 right-4 z-50 w-80 min-h-96 bg-zinc-900 rounded-lg shadow-lg border border-zinc-800 flex flex-col">
                                        {/* Header */}
                                        <div className="flex items-center justify-between p-3">
                                            <span className="font-medium text-white text-sm">Chat with Seller</span>
                                            <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                                                <X size={18} />
                                            </button>
                                        </div>

                                        {/* Chat Body */}
                                        <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-zinc-800">
                                            {/* User Message Bubble */}
                                            <div className="flex flex-col items-end">
                                                <div className="bg-emerald-600 text-white text-sm px-4 py-2 rounded-lg max-w-[75%]">
                                                    Apakah masih ada?
                                                </div>
                                                <span className="text-sm text-zinc-500">11:04 AM</span>
                                            </div>
                                        </div>

                                        {/* Optional: Footer or Input area (disabled since it's just a 1-time message) */}
                                        <div className="p-3 flex flex-row gap-3 text-center text-xs text-gray-400">
                                            <input type="text" className="bg-zinc-700 rounded-md w-full text-white" />
                                            <Send />
                                        </div>
                                    </div>
                                )}
                                <button className="flex items-center justify-center py-3 px-4 rounded-md border border-gray-400 text-gray-400 hover:border-white hover:text-white">
                                    <Share2 size={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Specs and Details Tabs */}
                    <div className="mt-12">
                        <div className="border-b border-zinc-800">
                            <div className="flex overflow-x-auto">
                                <button
                                    className={`px-6 py-3 font-medium ${activeTab === 'specs' ? 'text-emerald-500 border-b-2 border-emerald-500' : 'text-gray-400 hover:text-white'}`}
                                    onClick={() => setActiveTab('specs')}
                                >
                                    <span className="flex items-center">
                                        {/* <CPU size={18} className="mr-2" /> */}
                                        Specifications
                                    </span>
                                </button>
                                <button
                                    className={`px-6 py-3 font-medium ${activeTab === 'benchmarks' ? 'text-emerald-500 border-b-2 border-emerald-500' : 'text-gray-400 hover:text-white'}`}
                                    onClick={() => setActiveTab('benchmarks')}
                                >
                                    <span className="flex items-center">
                                        <BarChart4 size={18} className="mr-2" />
                                        Benchmark Results
                                    </span>
                                </button>
                                <button
                                    className={`px-6 py-3 font-medium ${activeTab === 'seller' ? 'text-emerald-500 border-b-2 border-emerald-500' : 'text-gray-400 hover:text-white'}`}
                                    onClick={() => setActiveTab('seller')}
                                >
                                    <span className="flex items-center">
                                        <AlertCircle size={18} className="mr-2" />
                                        Seller Notes
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Specs Tab Content */}
                        {activeTab === 'specs' && (
                            <div className="mt-6 bg-zinc-800 rounded-lg p-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex items-center text-white mb-1">
                                                <Zap size={16} className="mr-2 text-emerald-500" />
                                                <h4 className="font-medium">Processor</h4>
                                            </div>
                                            <p className="text-gray-300 ml-6">{product.specs.processor}</p>
                                        </div>
                                        <div>
                                            <div className="flex items-center text-white mb-1">
                                                <Gamepad2 size={16} className="mr-2 text-emerald-500" />
                                                <h4 className="font-medium">Graphics</h4>
                                            </div>
                                            <p className="text-gray-300 ml-6">{product.specs.graphics}</p>
                                        </div>
                                        <div>
                                            <div className="flex items-center text-white mb-1">
                                                {/* <CPU size={16} className="mr-2 text-emerald-500" /> */}
                                                <h4 className="font-medium">Memory</h4>
                                            </div>
                                            <p className="text-gray-300 ml-6">{product.specs.memory}</p>
                                        </div>
                                        <div>
                                            <div className="flex items-center text-white mb-1">
                                                {/* <CPU size={16} className="mr-2 text-emerald-500" /> */}
                                                <h4 className="font-medium">Storage</h4>
                                            </div>
                                            <p className="text-gray-300 ml-6">{product.specs.storage}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex items-center text-white mb-1">
                                                {/* <CPU size={16} className="mr-2 text-emerald-500" /> */}
                                                <h4 className="font-medium">Display</h4>
                                            </div>
                                            <p className="text-gray-300 ml-6">{product.specs.display}</p>
                                        </div>
                                        <div>
                                            <div className="flex items-center text-white mb-1">
                                                {/* <CPU size={16} className="mr-2 text-emerald-500" /> */}
                                                <h4 className="font-medium">Cooling</h4>
                                            </div>
                                            <p className="text-gray-300 ml-6">{product.specs.cooling}</p>
                                        </div>
                                        <div>
                                            <div className="flex items-center text-white mb-1">
                                                {/* <CPU size={16} className="mr-2 text-emerald-500" /> */}
                                                <h4 className="font-medium">Battery</h4>
                                            </div>
                                            <p className="text-gray-300 ml-6">{product.specs.battery}</p>
                                        </div>
                                        <div>
                                            <div className="flex items-center text-white mb-1">
                                                {/* <CPU size={16} className="mr-2 text-emerald-500" /> */}
                                                <h4 className="font-medium">Ports</h4>
                                            </div>
                                            <p className="text-gray-300 ml-6">{product.specs.ports}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Benchmarks Tab Content */}
                        {activeTab === 'benchmarks' && (
                            <div className="mt-6 bg-zinc-800 rounded-lg p-6">
                                <div className="space-y-6">
                                    {Object.entries(product.benchmarkResults).map(([test, score]) => (
                                        <div key={test}>
                                            <div className="flex justify-between mb-1">
                                                <h4 className="text-white font-medium">{test}</h4>
                                                <span className="text-emerald-500 font-bold">{score}</span>
                                            </div>
                                            <div className="w-full bg-zinc-900 rounded-full h-2.5">
                                                <div
                                                    className="bg-emerald-600 h-2.5 rounded-full"
                                                    style={{ width: `${Math.min(parseInt(score) / 100, 100)}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Seller Notes Tab Content */}
                        {activeTab === 'seller' && (
                            <div className="mt-6 bg-zinc-800 rounded-lg p-6">
                                <div className="border-l-4 border-emerald-500 pl-4">
                                    <p className="text-gray-300 italic">{product.sellerNotes}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Similar Products */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-white mb-6">Similar Gaming Laptops</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="bg-zinc-800 rounded-lg overflow-hidden hover:ring-1 hover:ring-emerald-500 transition-all">
                                    <div className="h-48 bg-zinc-700">
                                        <img
                                            src={`/api/placeholder/280/200`}
                                            alt={`Similar product ${item}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-white font-medium">Used Gaming Laptop {item}</h3>
                                        <div className="flex items-center mt-1">
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={14}
                                                        fill={i < 4 ? "#10b981" : "none"}
                                                        stroke={i < 4 ? "#10b981" : "#6b7280"}
                                                    />
                                                ))}
                                            </div>
                                            <span className="ml-1 text-xs text-gray-400">(32)</span>
                                        </div>
                                        <div className="mt-2 flex justify-between items-center">
                                            <span className="text-white font-bold">${(800 + (item * 100)).toFixed(2)}</span>
                                            <span className="text-xs bg-emerald-600/20 text-emerald-500 px-2 py-1 rounded">
                                                Good
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </App>
    )
}

export default DetailShop