import React, { useState } from "react";
import App from "../App";
import { Check } from "lucide-react";

const Keranjang = () => {
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const cartItems = [
        { id: 1, name: "Nintendo Switch Oled Original Softwere (OFW) Bisa main Online Fullset semua original Bonus Case", price: 3700000, quantity: 1 },
    ];

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const handleCheckout = () => {
        setShowModal(true);
        setIsLoading(true);

        // Simulate checkout delay
        setTimeout(() => {
            setIsLoading(false);
        }, 1000); // 2 seconds
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <App>
            <div className="min-h-screen bg-zinc-900 text-white py-10 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Cart Items Section */}
                    <div className="md:col-span-2 bg-zinc-800 rounded-2xl p-6 shadow-lg">
                        <h1 className="text-3xl font-bold mb-6 text-emerald-500 border-b border-zinc-700 pb-4">
                            Keranjang
                        </h1>
                        <div className="space-y-6">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between border-b border-zinc-700 pb-4"
                                >
                                    <div>
                                        <h2 className="text-xl text-gray-300">{item.name}</h2>
                                        <p className="text-sm text-gray-400">
                                            Rp {item.price}
                                        </p>
                                    </div>
                                    <p className="text-emerald-500 font-semibold text-lg">
                                        Rp {item.price}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Summary Section */}
                    <div className="bg-zinc-800 rounded-2xl p-6 shadow-lg h-fit">
                        <h2 className="text-2xl font-bold text-emerald-500 mb-4 border-b border-zinc-700 pb-2">
                            Order Summary
                        </h2>
                        <div className="flex justify-between mb-4">
                            <span className="text-gray-300">Subtotal</span>
                            <span className="text-gray-300">Rp {total}</span>
                        </div>
                        <div className="flex justify-between font-semibold text-lg border-t border-zinc-700 pt-4">
                            <span className="text-gray-300">Total</span>
                            <span className="text-emerald-500">Rp {total}</span>
                        </div>
                        <button onClick={handleCheckout} className="bg-emerald-600 hover:bg-emerald-500 text-white w-full mt-6 py-3 rounded-lg font-semibold">
                            Buy and notify Seller
                        </button>

                        {showModal && (
                            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                                <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg text-center">
                                    {isLoading ? (
                                        <>
                                            <div className="flex justify-center mb-4">
                                                <div className="w-10 h-10 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
                                            </div>
                                            <p className="text-lg font-medium text-gray-700">Processing your checkout...</p>
                                        </>
                                    ) : (
                                        <>
                                            <h2 className="text-xl font-bold text-emerald-600 mb-2">Checkout Confirmed!</h2>
                                            <p className="text-gray-600">The seller has been notified. Thank you!</p>
                                            <button
                                                onClick={closeModal}
                                                className="mt-6 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg"
                                            >
                                                <Check />
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </App>
    );
};

export default Keranjang;
