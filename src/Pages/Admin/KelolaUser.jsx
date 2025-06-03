import React, { useState, useMemo } from 'react';
import AdminLayout from '../../layout/AdminLayout'; // Pastikan path ini benar

// Helper untuk format tanggal (opsional)
const formatDate = (dateString) => {
    if (!dateString) return '-';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
};

// Komponen Ikon untuk Sortir
const SortIcon = ({ column, currentSortBy, currentSortOrder }) => {
    if (currentSortBy !== column) {
        return ( // Default/Inactive
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
        );
    }
    if (currentSortOrder === 'asc') {
        return ( // Ascending
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
        );
    }
    return ( // Descending
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    );
};


const KelolaUser = () => {
    const initialUsers = [
        { id: 1, name: 'GamerOne', email: 'gamer1@example.com', role: 'Penjual', status: 'Active', joinDate: '2025-01-15', lastLogin: '2025-06-01' },
        { id: 2, name: 'BuyerX', email: 'buyerx@example.com', role: 'Pembeli', status: 'Active', joinDate: '2025-02-20', lastLogin: '2025-05-30' },
        { id: 3, name: 'TechSeller', email: 'techseller@example.com', role: 'Penjual', status: 'Inactive', joinDate: '2025-03-10', lastLogin: '2025-05-15' },
        { id: 4, name: 'GadgetBuyer', email: 'gadgetbuyer@example.com', role: 'Pembeli', status: 'Active', joinDate: '2025-04-05', lastLogin: '2025-06-02' },
        { id: 5, name: 'AdminPro', email: 'admin@example.com', role: 'Admin', status: 'Active', joinDate: '2025-01-01', lastLogin: '2025-06-03' }
    ];

    const [users, setUsers] = useState(initialUsers);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterRole, setFilterRole] = useState('All');
    const [sortBy, setSortBy] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');

    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [modalType, setModalType] = useState('view'); // 'view', 'edit', 'add', 'delete'

    const [formData, setFormData] = useState({
        id: null,
        name: '',
        email: '',
        role: 'Pembeli',
        status: 'Active',
        joinDate: '',
        lastLogin: null
    });

    // Filter and sort users
    const filteredUsers = useMemo(() => {
        return users
            .filter(user => {
                const searchTermLower = searchTerm.toLowerCase();
                const matchesSearch = user.name.toLowerCase().includes(searchTermLower) ||
                    user.email.toLowerCase().includes(searchTermLower);
                const matchesRole = filterRole === 'All' || user.role === filterRole;
                return matchesSearch && matchesRole;
            })
            .sort((a, b) => {
                const aValue = a[sortBy] ? a[sortBy].toString().toLowerCase() : '';
                const bValue = b[sortBy] ? b[sortBy].toString().toLowerCase() : '';
                if (sortOrder === 'asc') {
                    return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
                }
                return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
            });
    }, [users, searchTerm, filterRole, sortBy, sortOrder]);

    const handleSort = (column) => {
        if (sortBy === column) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(column);
            setSortOrder('asc');
        }
    };

    const openModal = (type, user = null) => {
        setModalType(type);
        if (type === 'add') {
            const today = new Date().toISOString().split('T')[0];
            setFormData({
                id: null, name: '', email: '', role: 'Pembeli', status: 'Active',
                joinDate: today, lastLogin: null
            });
            setSelectedUser(null); // Pastikan selectedUser null untuk 'add'
        } else if (user) {
            setSelectedUser(user);
            setFormData({ ...user }); // Isi formData untuk edit atau view
        }
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedUser(null);
        // Reset formData
        setFormData({ id: null, name: '', email: '', role: 'Pembeli', status: 'Active', joinDate: '', lastLogin: null });
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSaveUser = () => {
        if (modalType === 'add') {
            const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
            setUsers([...users, { ...formData, id: newId, lastLogin: null }]); // joinDate sudah di formData
        } else if (modalType === 'edit' && selectedUser) {
            setUsers(users.map(user => user.id === selectedUser.id ? { ...user, ...formData } : user));
        }
        closeModal();
    };

    const handleDelete = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
        closeModal();
    };

    const toggleUserStatus = (userId) => {
        setUsers(users.map(user =>
            user.id === userId
                ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' }
                : user
        ));
    };

    const getRoleBadge = (role) => {
        let classes = "bg-zinc-700 text-zinc-300";
        if (role === 'Penjual') classes = "bg-sky-500/20 text-sky-400";
        else if (role === 'Pembeli') classes = "bg-purple-500/20 text-purple-400";
        else if (role === 'Admin') classes = "bg-amber-500/20 text-amber-400";
        return <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${classes}`}>{role}</span>;
    };

    const getStatusBadge = (status) => {
        let classes = status === 'Active' ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400";
        return <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${classes}`}>{status}</span>;
    };


    return (
        <AdminLayout>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-emerald-500">Kelola User</h1>
                <p className="mt-1 text-sm text-gray-400">Manajemen data pengguna terdaftar dalam sistem.</p>
            </div>



            {/* Search and Filter Controls */}
            <div className="mb-6 flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Cari pengguna (nama, email)..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-11 pr-4 py-2.5 bg-zinc-700/60 border border-zinc-600 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                    </div>
                </div>

                <select
                    value={filterRole}
                    onChange={(e) => setFilterRole(e.target.value)}
                    className="px-4 py-2.5 bg-zinc-700/60 border border-zinc-600 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                    <option value="All">Semua Role</option>
                    <option value="Penjual">Penjual</option>
                    <option value="Pembeli">Pembeli</option>
                    <option value="Admin">Admin</option>
                </select>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-lg border border-zinc-700">
                <table className="min-w-full text-sm text-left text-gray-300">
                    <thead className="bg-zinc-900/60">
                        <tr className="border-b border-zinc-700">
                            {['name', 'email', 'role', 'status', 'joinDate', 'lastLogin'].map((col) => (
                                <th
                                    key={col}
                                    scope="col"
                                    className="px-4 py-3.5 text-xs font-semibold uppercase tracking-wider cursor-pointer hover:text-emerald-400 transition-colors duration-200 whitespace-nowrap"
                                    onClick={() => handleSort(col)}
                                >
                                    <div className="flex items-center gap-1.5">
                                        {col === 'name' ? 'Nama' : col === 'email' ? 'Email' : col === 'role' ? 'Role' : col === 'status' ? 'Status' : col === 'joinDate' ? 'Bergabung' : 'Login Terakhir'}
                                        <SortIcon column={col} currentSortBy={sortBy} currentSortOrder={sortOrder} />
                                    </div>
                                </th>
                            ))}
                            <th scope="col" className="px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="bg-zinc-800 divide-y divide-zinc-700">
                        {filteredUsers.map((user) => (
                            <tr key={user.id} className="hover:bg-zinc-700/40 transition-colors duration-150">
                                <td className="px-4 py-3 whitespace-nowrap font-medium text-white">{user.name}</td>
                                <td className="px-4 py-3 whitespace-nowrap">{user.email}</td>
                                <td className="px-4 py-3 whitespace-nowrap">{getRoleBadge(user.role)}</td>
                                <td className="px-4 py-3 whitespace-nowrap">{getStatusBadge(user.status)}</td>
                                <td className="px-4 py-3 whitespace-nowrap text-gray-400">{formatDate(user.joinDate)}</td>
                                <td className="px-4 py-3 whitespace-nowrap text-gray-400">{formatDate(user.lastLogin)}</td>
                                <td className="px-4 py-3 whitespace-nowrap">
                                    <div className="flex items-center justify-end gap-1">
                                        <button
                                            onClick={() => openModal('view', user)}
                                            className="p-1.5 text-gray-400 hover:text-sky-400 hover:bg-zinc-700 rounded-md transition-all duration-200"
                                            title="Lihat Detail"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => openModal('edit', user)}
                                            className="p-1.5 text-gray-400 hover:text-emerald-400 hover:bg-zinc-700 rounded-md transition-all duration-200"
                                            title="Edit"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => toggleUserStatus(user.id)}
                                            className={`p-1.5 hover:bg-zinc-700 rounded-md transition-all duration-200 ${user.status === 'Active' ? 'text-gray-400 hover:text-yellow-400' : 'text-gray-400 hover:text-green-400'}`}
                                            title={user.status === 'Active' ? 'Nonaktifkan' : 'Aktifkan'}
                                        >
                                            {user.status === 'Active' ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            )}
                                        </button>
                                        <button
                                            onClick={() => openModal('delete', user)}
                                            className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-zinc-700 rounded-md transition-all duration-200"
                                            title="Hapus"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {filteredUsers.length === 0 && (
                <div className="text-center py-10">
                    <svg className="mx-auto h-12 w-12 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                    <h3 className="mt-2 text-sm font-semibold text-gray-300">Tidak ada pengguna</h3>
                    <p className="mt-1 text-sm text-gray-400">
                        {searchTerm || filterRole !== 'All' ? "Tidak ada pengguna yang cocok dengan filter Anda." : "Belum ada pengguna terdaftar."}
                    </p>
                    {(searchTerm || filterRole !== 'All') && (
                        <button
                            onClick={() => { setSearchTerm(''); setFilterRole('All'); }}
                            className="mt-3 text-xs text-emerald-400 hover:text-emerald-300"
                        >
                            Hapus Filter
                        </button>
                    )}
                </div>
            )}
            {filteredUsers.length > 0 && (
                <div className="mt-5 text-xs text-gray-400">
                    Menampilkan {filteredUsers.length} dari {users.length} pengguna.
                </div>
            )}

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-in-out">
                    <div className="bg-zinc-800 rounded-xl p-6 w-full max-w-md border border-zinc-700 shadow-2xl transform transition-all duration-300 ease-in-out scale-100">
                        {/* Close button for modal */}
                        <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {modalType === 'view' && selectedUser && (
                            <>
                                <h3 className="text-lg font-semibold text-white mb-5">Detail Pengguna</h3>
                                <div className="space-y-2.5 text-sm text-gray-300">
                                    <p><strong className="text-gray-100 font-medium w-28 inline-block">ID:</strong> #{selectedUser.id}</p>
                                    <p><strong className="text-gray-100 font-medium w-28 inline-block">Nama:</strong> {selectedUser.name}</p>
                                    <p><strong className="text-gray-100 font-medium w-28 inline-block">Email:</strong> {selectedUser.email}</p>
                                    <p><strong className="text-gray-100 font-medium w-28 inline-block">Role:</strong> {getRoleBadge(selectedUser.role)}</p>
                                    <p><strong className="text-gray-100 font-medium w-28 inline-block">Status:</strong> {getStatusBadge(selectedUser.status)}</p>
                                    <p><strong className="text-gray-100 font-medium w-28 inline-block">Bergabung:</strong> {formatDate(selectedUser.joinDate)}</p>
                                    <p><strong className="text-gray-100 font-medium w-28 inline-block">Login Terakhir:</strong> {formatDate(selectedUser.lastLogin)}</p>
                                </div>
                                <div className="mt-6">
                                    <button onClick={closeModal} className="w-full bg-zinc-700 hover:bg-zinc-600 text-white py-2.5 px-4 rounded-lg font-medium text-sm transition-colors">Tutup</button>
                                </div>
                            </>
                        )}

                        {modalType === 'delete' && selectedUser && (
                            <>
                                <h3 className="text-lg font-semibold text-white mb-2">Hapus Pengguna</h3>
                                <p className="text-sm text-gray-300 mb-6">
                                    Apakah Anda yakin ingin menghapus pengguna <strong className="text-white">{selectedUser.name}</strong>? Tindakan ini tidak dapat diurungkan.
                                </p>
                                <div className="flex gap-3">
                                    <button onClick={() => handleDelete(selectedUser.id)} className="flex-1 bg-red-600 hover:bg-red-500 text-white py-2.5 px-4 rounded-lg font-medium text-sm transition-colors">Hapus</button>
                                    <button onClick={closeModal} className="flex-1 bg-zinc-700 hover:bg-zinc-600 text-white py-2.5 px-4 rounded-lg font-medium text-sm transition-colors">Batal</button>
                                </div>
                            </>
                        )}

                        {(modalType === 'edit' || modalType === 'add') && (
                            <>
                                <h3 className="text-lg font-semibold text-white mb-5">
                                    {modalType === 'edit' ? 'Edit Pengguna' : 'Tambah Pengguna Baru'}
                                </h3>
                                <form onSubmit={(e) => { e.preventDefault(); handleSaveUser(); }} className="space-y-4 text-sm">
                                    <div>
                                        <label className="block text-gray-200 font-medium mb-1.5">Nama</label>
                                        <input
                                            type="text" name="name" value={formData.name} onChange={handleFormChange} required
                                            className="w-full px-3.5 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-200 font-medium mb-1.5">Email</label>
                                        <input
                                            type="email" name="email" value={formData.email} onChange={handleFormChange} required
                                            className="w-full px-3.5 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-200 font-medium mb-1.5">Role</label>
                                        <select
                                            name="role" value={formData.role} onChange={handleFormChange}
                                            className="w-full px-3.5 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                                        >
                                            <option value="Pembeli">Pembeli</option>
                                            <option value="Penjual">Penjual</option>
                                            <option value="Admin">Admin</option>
                                        </select>
                                    </div>
                                    {modalType === 'edit' && ( // Hanya tampilkan status jika edit
                                        <div>
                                            <label className="block text-gray-200 font-medium mb-1.5">Status</label>
                                            <select
                                                name="status" value={formData.status} onChange={handleFormChange}
                                                className="w-full px-3.5 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                                            >
                                                <option value="Active">Active</option>
                                                <option value="Inactive">Inactive</option>
                                            </select>
                                        </div>
                                    )}
                                    <div className="flex gap-3 pt-3">
                                        <button type="submit" className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 px-4 rounded-lg font-medium text-sm transition-colors">Simpan</button>
                                        <button type="button" onClick={closeModal} className="flex-1 bg-zinc-700 hover:bg-zinc-600 text-white py-2.5 px-4 rounded-lg font-medium text-sm transition-colors">Batal</button>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}

export default KelolaUser;