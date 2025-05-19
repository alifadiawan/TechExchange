import React from 'react'

const KelolaArtikel = () => {
    return (
        <main className="min-h-screen bg-zinc-900 text-white p-6">
            <h1 className="text-3xl font-bold text-emerald-500 mb-8">Kelola Artikel</h1>

            <section className="bg-zinc-800 p-6 rounded-2xl shadow-md">
                <p className="text-gray-300 mb-4">Atur artikel informasi seputar gear gaming.</p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>"5 Headset Gaming Terbaik 2025" - Dipublikasikan</li>
                    <li>"Cara Memilih Keyboard Mekanik" - Draft</li>
                    <li>"Review Mouse Wireless vs Wired" - Dipublikasikan</li>
                </ul>
                <button className="mt-6 px-4 py-2 bg-emerald-600 rounded hover:bg-emerald-500">
                    Tambah Artikel Baru
                </button>
            </section>
        </main>
    )
}

export default KelolaArtikel