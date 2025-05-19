import React from 'react'

const KelolaUser = () => {
    return (
        <main className="min-h-screen bg-zinc-900 text-white p-6">
            <h1 className="text-3xl font-bold text-emerald-500 mb-8">Kelola User</h1>

            <section className="bg-zinc-800 p-6 rounded-2xl shadow-md">
                <p className="text-gray-300 mb-4">Pantau dan atur data pengguna yang terdaftar.</p>
                <table className="w-full text-left text-gray-400">
                    <thead>
                        <tr className="border-b border-zinc-700">
                            <th className="pb-2">Nama</th>
                            <th className="pb-2">Email</th>
                            <th className="pb-2">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-zinc-800">
                            <td>GamerOne</td>
                            <td>gamer1@example.com</td>
                            <td>Penjual</td>
                        </tr>
                        <tr>
                            <td>BuyerX</td>
                            <td>buyerx@example.com</td>
                            <td>Pembeli</td>
                        </tr>
                    </tbody>
                </table>
                <button className="mt-6 px-4 py-2 bg-emerald-600 rounded hover:bg-emerald-500">
                    Kelola Pengguna
                </button>
            </section>
        </main>
    )
}

export default KelolaUser