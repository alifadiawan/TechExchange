import Sidebar from './Sidebar'

const AdminLayout = ({ children }) => {

    return (
        <div className="flex min-h-screen bg-zinc-900 text-gray-300">
            {/* Sidebar akan selalu ditampilkan di sini */}
            <Sidebar />

            {/* Konten utama halaman akan dirender di sini */}
            <main className="flex-1 p-4 lg:p-6">
                {children}
            </main>
        </div>
    );
}

export default AdminLayout