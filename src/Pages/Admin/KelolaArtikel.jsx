import React from 'react'
import AdminLayout from '../../layout/AdminLayout'

const KelolaArtikel = () => {

    const articlesData = [
        { id: 1, title: "5 Headset Gaming Terbaik 2025", status: "Dipublikasikan", category: "Hardware", lastUpdate: "2024-05-28" },
        { id: 2, title: "Cara Memilih Keyboard Mekanik", status: "Draft", category: "Panduan", lastUpdate: "2024-06-01" },
        { id: 3, title: "Review Mouse Wireless vs Wired", status: "Dipublikasikan", category: "Perbandingan", lastUpdate: "2024-05-15" },
        { id: 4, title: "Setup Streaming untuk Pemula", status: "Review", category: "Panduan", lastUpdate: "2024-06-03" },
        { id: 5, title: "Setup Streaming untuk Pemula", status: "Review", category: "Panduan", lastUpdate: "2024-06-03" },
        { id: 6, title: "Tips Overclocking CPU dengan Aman", status: "Dipublikasikan", category: "Hardware", lastUpdate: "2024-06-02" },
        { id: 7, title: "Panduan Lengkap OBS Studio", status: "Draft", category: "Panduan", lastUpdate: "2024-06-01" },
        { id: 8, title: "Laptop vs PC untuk Gaming", status: "Dipublikasikan", category: "Perbandingan", lastUpdate: "2024-05-30" },
        { id: 9, title: "Cara Merakit PC Budget 5 Jutaan", status: "Review", category: "Panduan", lastUpdate: "2024-06-03" },
        { id: 10, title: "Monitor 144Hz vs 60Hz: Worth It?", status: "Dipublikasikan", category: "Perbandingan", lastUpdate: "2024-05-29" }
    ];

    const getStatusBadge = (status) => {
        switch (status.toLowerCase()) {
            case "dipublikasikan":
                return (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold leading-5 bg-emerald-600/20 text-emerald-400">
                        Dipublikasikan
                    </span>
                );
            case "draft":
                return (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold leading-5 bg-amber-600/20 text-amber-400">
                        Draft
                    </span>
                );
            case "review":
                return (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold leading-5 bg-sky-600/20 text-sky-400">
                        Review
                    </span>
                );
            default:
                return (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold leading-5 bg-zinc-600/30 text-zinc-300">
                        {status}
                    </span>
                );
        }
    };


    return (
        <AdminLayout>
            <header className="mb-10">
                <h1 className="text-4xl font-extrabold text-emerald-500">Kelola Artikel</h1>
                <p className="text-gray-400 mt-2">Kelola Artikel TechExhange</p>
            </header>

            <div className="overflow-x-auto rounded-lg border border-zinc-700">
                <table className="min-w-full divide-y divide-zinc-700">
                    <thead className="bg-zinc-900/60">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3.5 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider"
                            >
                                Judul Artikel
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3.5 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider hidden md:table-cell"
                            >
                                Kategori
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3.5 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider"
                            >
                                Status
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3.5 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider hidden lg:table-cell"
                            >
                                Update Terakhir
                            </th>
                            <th scope="col" className="relative px-6 py-3.5">
                                <span className="sr-only">Aksi</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-zinc-800 divide-y divide-zinc-700">
                        {articlesData.length === 0 ? (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="px-6 py-12 text-center text-sm text-gray-400"
                                >
                                    <div className="flex flex-col items-center justify-center">
                                        {/* Icon Placeholder (e.g., using an SVG or font icon) */}
                                        <svg className="w-12 h-12 text-zinc-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        Belum ada artikel.
                                        <button className="mt-4 px-3 py-1.5 bg-emerald-600 text-white text-xs font-medium rounded-md hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-600/70 transition-colors">
                                            Buat Artikel Pertama
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            articlesData.map((article) => (
                                <tr
                                    key={article.id}
                                    className="hover:bg-zinc-700/40 transition-colors duration-150"
                                >
                                    <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-100 break-words">
                                        {article.title}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300 hidden md:table-cell">
                                        {article.category}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        {getStatusBadge(article.status)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 hidden lg:table-cell">
                                        {article.lastUpdate}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a
                                            href="#"
                                            className="text-emerald-500 hover:text-emerald-400 transition-colors"
                                        >
                                            Edit
                                        </a>
                                        <a
                                            href="#"
                                            className="ml-4 text-red-500 hover:text-red-400 transition-colors"
                                        >
                                            Hapus
                                        </a>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            {articlesData.length > 0 && (
                <div className="mt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
                    <p>
                        Menampilkan <span className="font-medium text-gray-200">1</span> sampai <span className="font-medium text-gray-200">{articlesData.length}</span> dari <span className="font-medium text-gray-200">{articlesData.length}</span> hasil
                    </p>
                    {/* Placeholder untuk pagination jika diperlukan */}
                    {/* <div className="flex space-x-1 mt-3 sm:mt-0">
            <button className="px-3 py-1.5 rounded-md bg-zinc-700 hover:bg-zinc-600 text-gray-200">&laquo; Sebelumnya</button>
            <button className="px-3 py-1.5 rounded-md bg-zinc-700 hover:bg-zinc-600 text-gray-200">Berikutnya &raquo;</button>
          </div> */}
                </div>
            )}
        </AdminLayout>
    )
}

export default KelolaArtikel