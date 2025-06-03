import React from 'react'
import Sidebar from './Sidebar'

const AdminLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-zinc-900 text-white">
            <Sidebar />
            <main className="flex-1 px-12 py-8 md:ml-0 ml-0">
                {children}
            </main>
        </div>
    )
}

export default AdminLayout