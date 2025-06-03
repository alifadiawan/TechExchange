import React, { useMemo, useState } from 'react'
import AdminLayout from '../../layout/AdminLayout'

const KelolaTransaksi = () => {

    const initialTransactionsData = [
        { id: "#TX1001", date: "2025-05-28", item: "Razer Viper Mini", price: "Rp550.000", status: "Selesai", paymentMethod: "Gopay" },
        { id: "#TX1002", date: "2025-06-01", item: "Keyboard Keychron K2", price: "Rp1.250.000", status: "Menunggu Pembayaran", paymentMethod: "Bank Transfer" },
        { id: "#TX1003", date: "2025-06-02", item: "Logitech G733 Headset", price: "Rp1.800.000", status: "Dibatalkan", paymentMethod: "Credit Card" },
        { id: "#TX1004", date: "2025-06-03", item: "Steam Wallet Code $10", price: "Rp155.000", status: "Selesai", paymentMethod: "OVO" },
        { id: "#TX1005", date: "2025-06-03", item: "Mousepad Gaming XXL", price: "Rp250.000", status: "Diproses", paymentMethod: "Dana" },
        { id: "#TX1006", date: "2025-06-04", item: "SSD NVMe 1TB Kingston", price: "Rp1.300.000", status: "Selesai", paymentMethod: "Bank Transfer" },
        { id: "#TX1007", date: "2025-06-04", item: "Monitor LG 24 inch IPS", price: "Rp2.100.000", status: "Pengembalian Dana", paymentMethod: "Credit Card" },
        { id: "#TX1008", date: "2025-06-05", item: "Voucher Google Play Rp50k", price: "Rp50.000", status: "Menunggu Pembayaran", paymentMethod: "ShopeePay" },
        { id: "#TX1009", date: "2025-06-05", item: "Webcam Logitech C922", price: "Rp950.000", status: "Selesai", paymentMethod: "Gopay" },
        { id: "#TX1010", date: "2025-06-06", item: "Game AAA Terbaru Pre-order", price: "Rp750.000", status: "Diproses", paymentMethod: "Dana" },
        { id: "#TX1011", date: "2025-06-06", item: "Razer Barracuda X", price: "Rp1.500.000", status: "Selesai", paymentMethod: "Bank Transfer" },
        { id: "#TX1012", date: "2025-06-07", item: "Kursi Gaming Ergonomis", price: "Rp2.500.000", status: "Dibatalkan", paymentMethod: "Credit Card" },
    ];

    // Helper untuk format tanggal (opsional, bisa juga pakai library seperti date-fns)
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    };

    const [searchTerm, setSearchTerm] = useState('');

    const getStatusBadge = (status) => {
        let bgColor = "bg-zinc-600/30";
        let textColor = "text-zinc-300";

        switch (status.toLowerCase()) {
            case "selesai":
                bgColor = "bg-emerald-600/20";
                textColor = "text-emerald-400";
                break;
            case "menunggu pembayaran":
                bgColor = "bg-amber-500/20";
                textColor = "text-amber-400";
                break;
            case "diproses":
                bgColor = "bg-sky-600/20";
                textColor = "text-sky-400";
                break;
            case "dibatalkan":
                bgColor = "bg-red-600/20";
                textColor = "text-red-400";
                break;
            case "pengembalian dana":
                bgColor = "bg-purple-600/20";
                textColor = "text-purple-400";
                break;
        }
        return (
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold leading-5 ${bgColor} ${textColor}`}>
                {status}
            </span>
        );
    };

    const filteredTransactions = useMemo(() => {
        if (!searchTerm) {
            return initialTransactionsData;
        }
        return initialTransactionsData.filter(tx =>
            tx.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tx.item.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tx.price.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tx.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tx.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tx.paymentMethod.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    return (
        <AdminLayout>
            <header className="mb-10">
                <h1 className="text-4xl font-extrabold text-emerald-500">Kelola Transaksi</h1>
                <p className="text-gray-400 mt-2">Kelola transaksi pengguna pada platform TechExchange.</p>
            </header>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div className="w-full md:w-auto md:min-w-[300px]">
                    <input
                        type="text"
                        placeholder="Cari transaksi (ID, item, harga, status)..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2.5 bg-zinc-700/60 border border-zinc-600 text-gray-200 text-sm rounded-lg focus:ring-emerald-500 focus:border-emerald-500 placeholder-zinc-400"
                    />
                </div>
            </div>

            <div className="overflow-x-auto rounded-lg border border-zinc-700">
                <table className="min-w-full divide-y divide-zinc-700">
                    <thead className="bg-zinc-900/60">
                        <tr>
                            <th scope="col" className="px-4 py-3.5 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider whitespace-nowrap">ID Transaksi</th>
                            <th scope="col" className="px-4 py-3.5 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider whitespace-nowrap hidden sm:table-cell">Tanggal</th>
                            <th scope="col" className="px-4 py-3.5 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Item</th>
                            <th scope="col" className="px-4 py-3.5 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider whitespace-nowrap">Harga</th>
                            <th scope="col" className="px-4 py-3.5 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider whitespace-nowrap hidden md:table-cell">Metode Bayar</th>
                            <th scope="col" className="px-4 py-3.5 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider whitespace-nowrap">Status</th>
                            <th scope="col" className="relative px-4 py-3.5"><span className="sr-only">Aksi</span></th>
                        </tr>
                    </thead>
                    <tbody className="bg-zinc-800 divide-y divide-zinc-700">
                        {filteredTransactions.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="px-6 py-12 text-center">
                                    <div className="flex flex-col items-center justify-center text-sm text-gray-400">
                                        <svg className="w-12 h-12 text-zinc-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>
                                        {searchTerm ? "Tidak ada transaksi yang cocok." : "Belum ada transaksi."}
                                        {searchTerm && (
                                            <button
                                                onClick={() => setSearchTerm('')}
                                                className="mt-3 text-xs text-emerald-400 hover:text-emerald-300"
                                            >
                                                Hapus Pencarian
                                            </button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            filteredTransactions.map((tx) => (
                                <tr key={tx.id} className="hover:bg-zinc-700/40 transition-colors duration-150">
                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-emerald-400">{tx.id}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 hidden sm:table-cell">{formatDate(tx.date)}</td>
                                    <td className="px-4 py-4 text-sm text-gray-100 min-w-[200px] break-words">{tx.item}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">{tx.price}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300 hidden md:table-cell">{tx.paymentMethod}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm">{getStatusBadge(tx.status)}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a href="#" className="text-sky-500 hover:text-sky-400 transition-colors">Detail</a>
                                        {/* <a href="#" className="ml-4 text-red-500 hover:text-red-400 transition-colors">Batalkan</a> */}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {initialTransactionsData.length > 0 && (
                <div className="mt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
                    <p>
                        Menampilkan <span className="font-medium text-gray-200">{filteredTransactions.length > 0 ? 1 : 0}</span>
                        {filteredTransactions.length > 1 && ` sampai ${filteredTransactions.length}`}
                        {' '}dari <span className="font-medium text-gray-200">{initialTransactionsData.length}</span> transaksi
                        {searchTerm && ` (hasil filter dari "${searchTerm}")`}
                    </p>
                    <button className="mt-4 sm:mt-0 px-6 py-2.5 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-600/50 transition-colors duration-150">
                        Lihat Semua Transaksi
                    </button>
                </div>
            )}
            {initialTransactionsData.length === 0 && (
                <div className="text-center mt-8">
                    <button className="px-6 py-2.5 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-600/50 transition-colors duration-150">
                        Mulai Transaksi Baru
                    </button>
                </div>
            )}
        </AdminLayout>
    )
}

export default KelolaTransaksi