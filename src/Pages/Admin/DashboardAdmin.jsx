import { useState } from 'react';
import {
    BarChart3,
    Users,
    FileText,
    ShoppingCart,
    Bell,
    Settings,
    Search,
    ChevronDown,
    TrendingUp,
    Calendar,
    DollarSign,
    ArrowUp,
    ArrowDown
} from 'lucide-react';
import AdminLayout from '../../layout/AdminLayout';

export default function DashboardAdmin() {
    const [notifications, setNotifications] = useState(3);

    // Sample data for the mini stats
    const stats = [
        { title: "Total Revenue", value: "$12,875", icon: DollarSign, change: "+12%", up: true },
        { title: "New Users", value: "234", icon: Users, change: "+18%", up: true },
        { title: "Pending Orders", value: "45", icon: ShoppingCart, change: "-5%", up: false },
        { title: "New Articles", value: "12", icon: FileText, change: "+7%", up: true }
    ];

    return (
        <AdminLayout>
           
                {/* Top navigation bar */}
                <nav className="flex justify-between items-center mb-8 bg-zinc-800 p-3 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 bg-emerald-500 rounded-md flex items-center justify-center">
                            <BarChart3 size={20} className="text-zinc-900" />
                        </div>
                        <h1 className="text-xl font-bold text-white">PanelAdmin</h1>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="bg-zinc-700 rounded-lg flex items-center px-3 py-1">
                            <Search size={16} className="text-zinc-400" />
                            <input
                                className="bg-transparent border-none outline-none ml-2 w-32 text-sm"
                                placeholder="Search..."
                            />
                        </div>

                        <div className="relative">
                            <button className="p-2 rounded-full bg-zinc-700 hover:bg-zinc-600">
                                <Bell size={18} />
                                {notifications > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        {notifications}
                                    </span>
                                )}
                            </button>
                        </div>

                        <div className="flex items-center bg-zinc-700 rounded-lg px-3 py-1 cursor-pointer hover:bg-zinc-600">
                            <div className="h-6 w-6 rounded-full bg-emerald-500 mr-2"></div>
                            <span className="text-sm mr-1">Admin</span>
                            <ChevronDown size={14} />
                        </div>
                    </div>
                </nav>

                {/* Stats section */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-zinc-800 p-4 rounded-xl shadow-lg border border-zinc-700 hover:border-emerald-500 transition-all">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-zinc-400 text-sm">{stat.title}</h3>
                                <div className="p-2 rounded-lg bg-zinc-700">
                                    <stat.icon size={16} className="text-emerald-500" />
                                </div>
                            </div>
                            <div className="flex items-end justify-between">
                                <p className="text-2xl font-bold">{stat.value}</p>
                                <div className={`flex items-center text-xs ${stat.up ? 'text-emerald-500' : 'text-red-500'}`}>
                                    {stat.up ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                                    <span className="ml-1">{stat.change}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}

                {/* Main sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left column - Main features */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Kelola Transaksi */}
                        <section className="bg-zinc-800 p-5 rounded-xl shadow-lg border border-zinc-700 hover:border-emerald-500 transition-all">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center">
                                    <ShoppingCart className="text-emerald-500 mr-2" size={20} />
                                    <h2 className="text-xl font-semibold text-white">Kelola Transaksi</h2>
                                </div>
                                <div className="bg-emerald-500 bg-opacity-20 text-emerald-500 px-3 py-1 rounded-lg text-xs font-medium">
                                    24 pending
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="bg-zinc-700 rounded-lg p-3 mb-3">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h4 className="font-medium">Order #45782</h4>
                                            <p className="text-xs text-zinc-400">May 18, 2025 • Rp 1.250.000</p>
                                        </div>
                                        <span className="px-2 py-1 bg-yellow-500 bg-opacity-20 text-yellow-500 rounded text-xs">Processing</span>
                                    </div>
                                </div>

                                <div className="bg-zinc-700 rounded-lg p-3 mb-3">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h4 className="font-medium">Order #45781</h4>
                                            <p className="text-xs text-zinc-400">May 18, 2025 • Rp 750.000</p>
                                        </div>
                                        <span className="px-2 py-1 bg-emerald-500 bg-opacity-20 text-emerald-500 rounded text-xs">Completed</span>
                                    </div>
                                </div>
                            </div>

                            <a href="/admin/transaksi" className="flex items-center justify-center w-full py-2 bg-emerald-600 rounded-lg hover:bg-emerald-500 transition-colors font-medium">
                                Kelola Transaksi
                            </a>
                        </section>

                        {/* Kelola User */}
                        <section className="bg-zinc-800 p-5 rounded-xl shadow-lg border border-zinc-700 hover:border-emerald-500 transition-all">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center">
                                    <Users className="text-emerald-500 mr-2" size={20} />
                                    <h2 className="text-xl font-semibold text-white">Kelola User</h2>
                                </div>
                                <div className="bg-emerald-500 bg-opacity-20 text-emerald-500 px-3 py-1 rounded-lg text-xs font-medium">
                                    5 new today
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-zinc-700 rounded-lg p-3 flex items-center">
                                        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-medium mr-3">
                                            BU
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Budi Utomo</h4>
                                            <p className="text-xs text-zinc-400">Premium User</p>
                                        </div>
                                    </div>

                                    <div className="bg-zinc-700 rounded-lg p-3 flex items-center">
                                        <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center text-xs font-medium mr-3">
                                            SR
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Siti Rahma</h4>
                                            <p className="text-xs text-zinc-400">New User</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a href="/admin/user" className="flex items-center justify-center w-full py-2 bg-emerald-600 rounded-lg hover:bg-emerald-500 transition-colors font-medium">
                                Kelola User
                            </a>
                        </section>
                    </div>

                    {/* Right column */}
                    <div className="space-y-6">
                        {/* Calendar card */}
                        <section className="bg-zinc-800 p-5 rounded-xl shadow-lg border border-zinc-700">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center">
                                    <Calendar className="text-emerald-500 mr-2" size={20} />
                                    <h2 className="text-lg font-semibold text-white">Calendar</h2>
                                </div>
                                <span className="text-sm text-zinc-400">May 2025</span>
                            </div>

                            <div className="grid grid-cols-7 gap-1 text-center mb-2">
                                <div className="text-xs text-zinc-500">Su</div>
                                <div className="text-xs text-zinc-500">Mo</div>
                                <div className="text-xs text-zinc-500">Tu</div>
                                <div className="text-xs text-zinc-500">We</div>
                                <div className="text-xs text-zinc-500">Th</div>
                                <div className="text-xs text-zinc-500">Fr</div>
                                <div className="text-xs text-zinc-500">Sa</div>
                            </div>

                            <div className="grid grid-cols-7 gap-1 text-center">
                                {[...Array(31)].map((_, i) => {
                                    const day = i + 1;
                                    const isToday = day === 19;
                                    const hasEvent = [8, 15, 22].includes(day);

                                    return (
                                        <div
                                            key={i}
                                            className={`
                      aspect-square flex items-center justify-center text-sm rounded-full
                      ${isToday ? 'bg-emerald-500 text-white' : 'hover:bg-zinc-700 cursor-pointer'}
                      ${hasEvent && !isToday ? 'relative after:absolute after:w-1 after:h-1 after:bg-emerald-500 after:rounded-full after:-bottom-1' : ''}
                    `}
                                        >
                                            {day}
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {/* Kelola Artikel */}
                        <section className="bg-zinc-800 p-5 rounded-xl shadow-lg border border-zinc-700 hover:border-emerald-500 transition-all">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center">
                                    <FileText className="text-emerald-500 mr-2" size={20} />
                                    <h2 className="text-xl font-semibold text-white">Kelola Artikel</h2>
                                </div>
                                <div className="bg-emerald-500 bg-opacity-20 text-emerald-500 px-3 py-1 rounded-lg text-xs font-medium">
                                    3 drafts
                                </div>
                            </div>

                            <div className="space-y-3 mb-4">
                                <div className="bg-zinc-700 rounded-lg p-3">
                                    <h4 className="font-medium mb-1">Tips Mengelola Keuangan</h4>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-zinc-400">Published • May 15</span>
                                        <span className="text-emerald-400">428 views</span>
                                    </div>
                                </div>

                                <div className="bg-zinc-700 rounded-lg p-3">
                                    <h4 className="font-medium mb-1">Panduan Investasi Saham</h4>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-zinc-400">Draft</span>
                                        <span className="text-yellow-400">Needs review</span>
                                    </div>
                                </div>
                            </div>

                            <a href="/admin/artikel" className="flex items-center justify-center w-full py-2 bg-emerald-600 rounded-lg hover:bg-emerald-500 transition-colors font-medium">
                                Kelola Artikel
                            </a>
                        </section>

                       
                    </div>
                </div>
        </AdminLayout>
    );
}