import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    ArrowDown,
    Menu,
    X,
    LayoutDashboard,
    Package
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import AdminLayout from '../../layout/AdminLayout';

// Mock Data
const salesData = [
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 5000 },
    { name: 'Apr', revenue: 4500 },
    { name: 'May', revenue: 6000 },
    { name: 'Jun', revenue: 5500 },
];

const userGrowthData = [
    { name: 'Week 1', users: 20 },
    { name: 'Week 2', users: 45 },
    { name: 'Week 3', users: 30 },
    { name: 'Week 4', users: 60 },
];

const orderStatusData = [
    { name: 'Completed', value: 400 },
    { name: 'Pending', value: 150 },
    { name: 'Canceled', value: 50 },
];
const COLORS = ['#10B981', '#F59E0B', '#EF4444'];


// Sidebar Component
const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
    const navItems = [
        { icon: LayoutDashboard, label: "Dashboard" },
        { icon: Users, label: "Users" },
        { icon: Package, label: "Products" },
        { icon: ShoppingCart, label: "Orders" },
        { icon: FileText, label: "Articles" },
        { icon: Settings, label: "Settings" },
    ];

    const sidebarVariants = {
        open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
        closed: { x: "-100%", transition: { type: "spring", stiffness: 300, damping: 30 } }
    };

    return (
        <>
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    ></motion.div>
                )}
            </AnimatePresence>
            <motion.div
                variants={sidebarVariants}
                initial={false}
                animate={isSidebarOpen ? "open" : "closed"}
                className="fixed top-0 left-0 h-full bg-zinc-800 w-64 z-40 lg:relative lg:translate-x-0"
            >
                <div className="flex items-center justify-between p-4 border-b border-zinc-700">
                    <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 bg-emerald-500 rounded-md flex items-center justify-center">
                            <BarChart3 size={20} className="text-zinc-900" />
                        </div>
                        <h1 className="text-xl font-bold text-white">PanelAdmin</h1>
                    </div>
                    <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-zinc-400 hover:text-white">
                        <X size={24} />
                    </button>
                </div>
                <nav className="p-4">
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href="#" className={`flex items-center p-3 rounded-lg text-zinc-300 hover:bg-zinc-700 transition-colors ${index === 0 ? 'bg-zinc-700 text-white' : ''}`}>
                                    <item.icon size={20} className="mr-3" />
                                    <span>{item.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </motion.div>
        </>
    );
}

// Main Dashboard Component
export default function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const stats = [
        { title: "Total Revenue", value: "$12,875", icon: DollarSign, change: "+12.5%", up: true },
        { title: "New Users", value: "234", icon: Users, change: "+18.2%", up: true },
        { title: "Pending Orders", value: "45", icon: ShoppingCart, change: "-5.1%", up: false },
        { title: "New Articles", value: "12", icon: FileText, change: "+7.8%", up: true }
    ];

    const recentTransactions = [
        { id: '#45782', user: 'Budi Utomo', avatar: 'BU', avatarBg: 'bg-blue-500', date: 'May 19, 2025', amount: 'Rp 1.250.000', status: 'Processing' },
        { id: '#45781', user: 'Siti Rahma', avatar: 'SR', avatarBg: 'bg-purple-500', date: 'May 18, 2025', amount: 'Rp 750.000', status: 'Completed' },
        { id: '#45780', user: 'Agus Santoso', avatar: 'AS', avatarBg: 'bg-orange-500', date: 'May 17, 2025', amount: 'Rp 300.000', status: 'Canceled' },
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case 'Completed': return 'bg-emerald-500/20 text-emerald-400';
            case 'Processing': return 'bg-yellow-500/20 text-yellow-400';
            case 'Canceled': return 'bg-red-500/20 text-red-400';
            default: return 'bg-zinc-500/20 text-zinc-400';
        }
    };

    return (

            <AdminLayout className="flex-1 p-4 lg:p-6">
                {/* Top navigation bar */}
                <header className="flex justify-between items-center mb-6">
                    <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-zinc-400 hover:text-white">
                        <Menu size={24} />
                    </button>
                    <div className="hidden lg:block">
                        <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
                        <p className="text-zinc-400 text-sm">Welcome back, Admin!</p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="hidden md:flex bg-zinc-800 rounded-lg items-center px-3">
                            <Search size={16} className="text-zinc-400" />
                            <input
                                className="bg-transparent border-none outline-none ml-2 w-40 text-sm py-2"
                                placeholder="Search anything..."
                            />
                        </div>

                        <div className="relative">
                            <button className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700">
                                <Bell size={18} />
                                <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full h-4 w-4 flex items-center justify-center text-white">3</span>
                            </button>
                        </div>

                        <div className="flex items-center bg-zinc-800 rounded-lg px-2 py-1 cursor-pointer hover:bg-zinc-700">
                            <img src="https://placehold.co/32x32/10b981/ffffff?text=A" alt="Admin" className="h-8 w-8 rounded-full mr-2" />
                            <div>
                                <span className="text-sm font-medium mr-1 text-white">Admin</span>
                                <p className="text-xs text-zinc-400">Super Admin</p>
                            </div>
                            <ChevronDown size={16} className="ml-2" />
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    {/* Stats section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="bg-zinc-800 p-5 rounded-xl shadow-lg border border-zinc-700 hover:border-emerald-500 transition-all cursor-pointer"
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div className="p-3 rounded-lg bg-zinc-700">
                                        <stat.icon size={20} className="text-emerald-500" />
                                    </div>
                                    <div className={`flex items-center text-xs font-semibold ${stat.up ? 'text-emerald-500' : 'text-red-500'}`}>
                                        {stat.up ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
                                        <span className="ml-1">{stat.change}</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-zinc-400 text-sm mb-1">{stat.title}</h3>
                                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Charts section */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
                        {/* Sales Overview */}
                        <div className="lg:col-span-3 bg-zinc-800 p-5 rounded-xl shadow-lg border border-zinc-700">
                            <h3 className="text-lg font-semibold text-white mb-4">Sales Overview</h3>
                            <div style={{ width: '100%', height: 300 }}>
                                <ResponsiveContainer>
                                    <BarChart data={salesData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
                                        <XAxis dataKey="name" fontSize={12} tick={{ fill: '#a1a1aa' }} stroke="#a1a1aa" />
                                        <YAxis fontSize={12} tick={{ fill: '#a1a1aa' }} stroke="#a1a1aa" tickFormatter={(value) => `$${value / 1000}k`} />
                                        <Tooltip cursor={{ fill: '#404040' }} contentStyle={{ backgroundColor: '#18181b', border: '1px solid #404040' }} />
                                        <Legend iconSize={10} wrapperStyle={{ fontSize: "12px" }} />
                                        <Bar dataKey="revenue" fill="#10B981" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        {/* Order Status */}
                        <div className="lg:col-span-2 bg-zinc-800 p-5 rounded-xl shadow-lg border border-zinc-700">
                            <h3 className="text-lg font-semibold text-white mb-4">Order Status</h3>
                            <div style={{ width: '100%', height: 300 }}>
                                <ResponsiveContainer>
                                    <PieChart>
                                        <Pie
                                            data={orderStatusData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={80}
                                            fill="#8884d8"
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {orderStatusData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip contentStyle={{ backgroundColor: '#18181b', border: '1px solid #404040' }} />
                                        <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: "12px", paddingTop: "20px" }} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    {/* Recent Transactions */}
                    <div className="bg-zinc-800 p-5 rounded-xl shadow-lg border border-zinc-700">
                        <h3 className="text-lg font-semibold text-white mb-4">Recent Transactions</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-zinc-400 uppercase border-b border-zinc-700">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Order ID</th>
                                        <th scope="col" className="px-6 py-3">Customer</th>
                                        <th scope="col" className="px-6 py-3">Date</th>
                                        <th scope="col" className="px-6 py-3">Amount</th>
                                        <th scope="col" className="px-6 py-3">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentTransactions.map((tx) => (
                                        <tr key={tx.id} className="border-b border-zinc-700 hover:bg-zinc-700/50">
                                            <td className="px-6 py-4 font-medium text-white">{tx.id}</td>
                                            <td className="px-6 py-4 flex items-center">
                                                <div className={`h-8 w-8 rounded-full ${tx.avatarBg} flex items-center justify-center text-xs font-bold text-white mr-3`}>
                                                    {tx.avatar}
                                                </div>
                                                {tx.user}
                                            </td>
                                            <td className="px-6 py-4">{tx.date}</td>
                                            <td className="px-6 py-4">{tx.amount}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(tx.status)}`}>
                                                    {tx.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </motion.div>
            </AdminLayout>
    );
}
