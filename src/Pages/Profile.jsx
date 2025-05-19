import React from "react";
import App from "../App";
import switcholed from '../assets/switcholed.jpg'

export default function Profile() {
    const listings = [
        {
            id: 1,
            name: "Nintendo Switch Oled Original Softwere (OFW) Bisa main Online Fullset semua original Bonus Case",
            status: "Sold",
            price: "3.700.000",
            date: "2025-04-15",
            image: switcholed,
        },
    ];

    return (
        <App>
            <div className="min-h-screen bg-zinc-900 text-white px-6 py-10">
                <div className="lg:mx-52 grid md:grid-cols-3 gap-8">
                    {/* Profile Info */}
                    <div className="md:col-span-1 bg-zinc-800 rounded-2xl p-6 shadow-xl">
                        <div className="flex flex-col items-center">
                            <img
                                src="https://media.licdn.com/dms/image/v2/D5603AQEIebI3a46tiw/profile-displayphoto-shrink_400_400/B56ZS5gGMpHwAg-/0/1738278987582?e=1753315200&v=beta&t=8u3ATRvd3NvF7RcvknLGeCeiybHrvVUWXnU2Ya2-KeI"
                                alt="Avatar"
                                className="w-24 h-24 rounded-full border-4 border-emerald-600 mb-4"
                            />
                            <h2 className="text-xl font-bold">Muhammad Alif Adiawan</h2>
                            <p className="text-gray-400 text-sm">Joined March 2023</p>
                            <button className="mt-4 px-4 py-2 bg-emerald-600 rounded-lg hover:bg-emerald-500 transition text-sm">
                                Edit Profile
                            </button>
                        </div>

                    </div>

                    {/* My Listings */}
                    <div className="md:col-span-2 bg-zinc-800 rounded-2xl p-6 shadow-xl">
                        <h2 className="text-2xl font-bold text-emerald-500 mb-4">Buying History</h2>
                        <div className="space-y-4">
                            {listings.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex lg:flex-row flex-col items-center justify-between bg-zinc-900 rounded-lg p-4 border border-zinc-700 hover:border-emerald-600 transition"
                                >
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 rounded object-cover"
                                        />
                                        <div>
                                            <h4 className="text-gray-300 font-semibold">{item.name}</h4>
                                            <p className="text-gray-400 text-sm">{item.date}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p
                                            className={`font-bold ${item.status === "Sold" ? "text-gray-500" : "text-emerald-500"
                                                }`}
                                        >
                                            Rp. {item.price}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            {listings.length === 0 && (
                                <p className="text-gray-400">No listings available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
}
