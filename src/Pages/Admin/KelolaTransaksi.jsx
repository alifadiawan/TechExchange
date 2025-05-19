import React from 'react'

const KelolaTransaksi = () => {
    return (
        <main className="min-h-screen bg-zinc-900 text-white px-6 py-10">
            <header className="mb-10">
                <h1 className="text-4xl font-extrabold text-emerald-500">Kelola Transaksi</h1>
                <p className="text-gray-400 mt-2">Kelola transaksi pengguna pada platform jual beli gear gaming.</p>
            </header>

            <section className="bg-zinc-800 p-6 rounded-2xl shadow-lg transition-all duration-300">
                <ul className="divide-y divide-zinc-700">
                    {[
                        { id: "#TX1001", item: "Razer Mouse", price: "Rp500.000", status: "Selesai" },
                        { id: "#TX1002", item: "Keyboard Ducky", price: "Rp1.200.000", status: "Menunggu" },
                        { id: "#TX1003", item: "Logitech G733", price: "Rp1.000.000", status: "Dibatalkan" },
                    ].map(({ id, item, price, status }) => (
                        <li key={id} className="py-4 flex justify-between items-center">
                            <div>
                                <span className="font-semibold text-white">{id}</span>
                                <span className="mx-2">-</span>
                                <span>{item}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-emerald-400">{price}</span>
                                <span className={`px-3 py-1 rounded-full text-sm font-medium
                                ${status === "Selesai" ? "bg-emerald-700 text-white" :
                                        status === "Menunggu" ? "bg-yellow-600 text-white" :
                                            "bg-red-600 text-white"}
                            `}>
                                    {status}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="text-center mt-8">
                    <button className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 transition rounded-lg font-medium">
                        Lihat Semua Transaksi
                    </button>
                </div>
            </section>
        </main>
    )
}

export default KelolaTransaksi