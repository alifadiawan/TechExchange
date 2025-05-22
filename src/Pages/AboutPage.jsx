import React from 'react';
import App from '../App';

const AboutPage = () => {
    return (
        <App>
            <div className="min-h-screen bg-zinc-900 text-gray-300">
                {/* Hero Section */}
                <div className="bg-zinc-800 py-16">
                    <div className="max-w-6xl mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tentang TechExchange</h1>
                        <p className="text-xl text-gray-400 max-w-3xl">
                            Marketplace terpercaya Anda untuk perlengkapan gaming bekas berkualitas premium
                        </p>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Misi Kami</h2>
                            <p className="text-gray-300 mb-4">
                                Di TechExchange, kami adalah gamer yang bersemangat dengan misi membuat perlengkapan gaming berkualitas tinggi dapat diakses oleh semua orang. Kami percaya pengalaman gaming premium tidak harus mahal.
                            </p>
                            <p className="text-gray-300 mb-4">
                                Didirikan pada tahun 2021, kami membangun platform terpercaya di mana gamer dapat membeli dan menjual perlengkapan bekas dengan percaya diri, karena setiap barang telah diperiksa dan diverifikasi oleh tim ahli kami.
                            </p>
                            <div className="mt-8">
                                <span className="inline-block bg-emerald-500 text-white px-4 py-2 rounded font-medium">
                                    2.500+ Pelanggan Puas
                                </span>
                                <span className="inline-block bg-emerald-500 text-white px-4 py-2 rounded font-medium ml-4">
                                    10.000+ Barang Terjual
                                </span>
                            </div>
                        </div>
                        <div className="bg-zinc-800 p-8 rounded-lg">
                            <h3 className="text-2xl font-bold text-white mb-4">Nilai-Nilai Kami</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="bg-emerald-600 rounded-full p-1 mr-3 mt-1">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="font-medium text-white">Jaminan Kualitas</span>
                                        <p className="text-gray-400">Setiap barang diuji dan diverifikasi secara menyeluruh oleh tim kami</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-emerald-600 rounded-full p-1 mr-3 mt-1">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="font-medium text-white">Gaming Berkelanjutan</span>
                                        <p className="text-gray-400">Memperpanjang umur perlengkapan gaming mengurangi limbah elektronik</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="bg-emerald-600 rounded-full p-1 mr-3 mt-1">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="font-medium text-white">Komunitas Utama</span>
                                        <p className="text-gray-400">Membangun koneksi antar gamer di seluruh Indonesia</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <h2 className="text-3xl font-bold text-white mb-8">Pertanyaan yang Sering Diajukan</h2>
                    <div className="space-y-6">
                        <div className="border-l-4 border-emerald-500 pl-4">
                            <h3 className="text-xl font-medium text-white">Bagaimana Anda memastikan kualitas barang?</h3>
                            <p className="text-gray-400 mt-2">
                                Setiap barang melewati proses inspeksi 15 poin yang ketat. Kami menguji fungsi, menilai kondisi fisik, dan memverifikasi keaslian sebelum barang dijual.
                            </p>
                        </div>
                        <div className="border-l-4 border-emerald-500 pl-4">
                            <h3 className="text-xl font-medium text-white">Apa kebijakan pengembalian barang?</h3>
                            <p className="text-gray-400 mt-2">
                                Kami menawarkan garansi kepuasan 14 hari. Jika Anda tidak puas dengan pembelian Anda, Anda dapat mengembalikannya untuk pengembalian dana penuh atau penukaran.
                            </p>
                        </div>
                        <div className="border-l-4 border-emerald-500 pl-4">
                            <h3 className="text-xl font-medium text-white">Apakah saya bisa menjual perlengkapan gaming bekas di TechExchange?</h3>
                            <p className="text-gray-400 mt-2">
                                Tentu saja! Buat akun, kirimkan foto dan detail barang Anda, dan tim kami akan meninjaunya dalam 48 jam. Setelah disetujui, barang Anda akan ditampilkan di marketplace kami.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="bg-zinc-800 py-16">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">Hubungi Kami</h2>
                                <p className="text-gray-400 mb-8">
                                    Punya pertanyaan tentang TechExchange atau butuh bantuan? Tim kami siap membantu Anda!
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <div className="bg-emerald-600 rounded-full p-2 mr-4">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">Telepon</p>
                                            <p className="text-gray-400">+62 123 456 7890</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="bg-emerald-600 rounded-full p-2 mr-4">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">Email</p>
                                            <p className="text-gray-400">info@TechExchange.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="bg-emerald-600 rounded-full p-2 mr-4">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">Lokasi</p>
                                            <p className="text-gray-400">Surabaya, Indonesia</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-zinc-900 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-white mb-4">Jam Operasional Kami</h3>
                                <div className="space-y-2 text-gray-400">
                                    <div className="flex justify-between">
                                        <span>Senin - Jumat</span>
                                        <span>09.00 - 18.00 WIB</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sabtu</span>
                                        <span>10.00 - 16.00 WIB</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Minggu</span>
                                        <span>Tutup</span>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-xl font-bold text-white mb-4">Ikuti Kami</h3>
                                    <div className="flex space-x-4">
                                        <a href="#" className="bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-500 transition">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-500 transition">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-500 transition">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="bg-emerald-600 text-white p-2 rounded-full hover:bg-emerald-500 transition">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <div className="bg-zinc-800 rounded-lg p-8 md:p-12">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-white mb-4">Tetap Terhubung</h2>
                            <p className="text-gray-400 max-w-xl mx-auto">
                                Berlangganan newsletter kami untuk promo eksklusif, berita gaming, dan akses pertama ke stok terbaru.
                            </p>
                        </div>
                        <div className="max-w-md mx-auto">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Alamat email Anda"
                                    className="flex-grow px-4 py-3 rounded bg-zinc-900 text-white border border-zinc-700 focus:outline-none focus:border-emerald-500"
                                />
                                <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded transition">
                                    Berlangganan
                                </button>
                            </div>
                            <p className="text-gray-400 text-sm mt-3 text-center">
                                Privasi Anda terjaga. Berhenti berlangganan kapan saja.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
};

export default AboutPage;