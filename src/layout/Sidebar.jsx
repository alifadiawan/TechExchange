import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    Users,
    ShoppingCart,
    FileText,
    Menu,
    X,
    BarChart3,
    Settings,
    ChevronLeft,
    ChevronRight,
    LogOut
} from 'lucide-react';

// Sub-component for menu items to keep the main component clean
const MenuItem = ({ item, isActive, isExpanded, onClick, onSubMenuClick, activeSubMenu }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const handleParentClick = (e) => {
        // If it's a direct link, let the anchor tag handle navigation.
        // We just call the onClick prop to set the active state.
        if (!item.subMenu) {
            onClick(item.id);
            return;
        }

        // If it has a submenu, prevent default link behavior (if any)
        // and toggle the submenu.
        e.preventDefault();
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    const subMenuVariants = {
        open: {
            height: 'auto',
            opacity: 1,
            transition: { duration: 0.3, when: "beforeChildren", staggerChildren: 0.05 }
        },
        closed: {
            height: 0,
            opacity: 0,
            transition: { duration: 0.3, when: "afterChildren" }
        }
    };

    const subMenuItemVariants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: -10 }
    };

    // This is the visual content of the menu item.
    const itemContent = (
        <div className={`w-full flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-colors duration-200 ${(isActive && !item.subMenu) ? 'bg-emerald-500 text-white' :
                (isActive && item.subMenu) ? 'bg-zinc-700 text-white' : 'hover:bg-zinc-700'
            }`}>
            <div className="flex items-center space-x-3">
                <item.icon className="h-6 w-6 flex-shrink-0" />
                <AnimatePresence>
                    {isExpanded && (
                        <motion.span
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: 'auto' }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.2 }}
                            className="font-medium overflow-hidden whitespace-nowrap"
                        >
                            {item.name}
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>
            {item.subMenu && isExpanded && (
                <ChevronRight size={16} className={`transition-transform duration-300 ${isSubMenuOpen ? 'rotate-90' : 'rotate-0'}`} />
            )}
        </div>
    );

    return (
        <div className="text-zinc-300">
            {/* If it's a direct link, render an anchor tag. Otherwise, render a div for toggling. */}
            {item.link && !item.subMenu ? (
                <a href={item.link} onClick={handleParentClick}>
                    {itemContent}
                </a>
            ) : (
                <div onClick={handleParentClick}>
                    {itemContent}
                </div>
            )}

            <AnimatePresence>
                {isExpanded && item.subMenu && isSubMenuOpen && (
                    <motion.ul
                        variants={subMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="ml-8 mt-1 space-y-1"
                    >
                        {item.subMenu.map(subItem => (
                            <motion.li key={subItem.id} variants={subMenuItemVariants}>
                                <a
                                    href={subItem.link}
                                    onClick={() => onSubMenuClick(subItem.id)}
                                    className={`block w-full text-sm px-4 py-2 rounded-md ${activeSubMenu === subItem.id ? 'text-emerald-400 font-semibold' : 'text-zinc-400 hover:text-white'
                                        }`}
                                >
                                    {subItem.name}
                                </a>
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};


const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('dashboard');
    const [activeSubMenu, setActiveSubMenu] = useState('');

    const menuItems = [
        { id: 'dashboard', name: 'Dashboard', link: '/admin/dashboard', icon: LayoutDashboard },
        {
            id: 'users',
            name: 'Manage User',
            icon: Users,
            subMenu: [
                { id: 'all-users', name: 'All Users', link: '/admin/user' },
                { id: 'add-user', name: 'Add New', link: '/admin/user/new' },
            ]
        },
        { id: 'transactions', name: 'Manage Transaction', link: '/admin/transaksi', icon: ShoppingCart },
        { id: 'articles', name: 'Manage Article', link: '/admin/artikel', icon: FileText }
    ];

    const sidebarVariants = {
        expanded: { width: "16rem" }, // 256px
        collapsed: { width: "5rem" }   // 80px
    };

    const mobileSidebarVariants = {
        open: { x: 0 },
        closed: { x: "-100%" }
    };

    const transition = {
        type: "spring",
        stiffness: 300,
        damping: 30
    };

    const handleMenuClick = (id) => {
        setActiveMenu(id);
        setActiveSubMenu('');
    };

    const handleSubMenuClick = (id) => {
        setActiveSubMenu(id);
        // Set parent menu as active
        const parent = menuItems.find(item => item.subMenu?.some(sub => sub.id === id));
        if (parent) {
            setActiveMenu(parent.id);
        }
    };

    return (
        <>
            {/* Mobile menu button */}
            <button
                onClick={() => setIsMobileOpen(true)}
                className="fixed top-4 left-4 z-50 md:hidden bg-zinc-800 hover:bg-zinc-700 text-white p-2 rounded-md transition-colors duration-200 shadow-lg"
            >
                <Menu size={24} />
            </button>

            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMobileOpen(false)}
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar for Mobile */}
            <motion.aside
                variants={mobileSidebarVariants}
                initial="closed"
                animate={isMobileOpen ? "open" : "closed"}
                transition={transition}
                className="fixed left-0 top-0 h-full w-64 bg-zinc-800 border-r border-zinc-700 z-50 flex flex-col md:hidden"
            >
                <SidebarContent
                    isExpanded={true}
                    menuItems={menuItems}
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                    activeSubMenu={activeSubMenu}
                    setActiveSubMenu={handleSubMenuClick}
                    onClose={() => setIsMobileOpen(false)}
                />
            </motion.aside>

            {/* Sidebar for Desktop */}
            <motion.aside
                variants={sidebarVariants}
                initial={false}
                animate={isExpanded ? "expanded" : "collapsed"}
                transition={transition}
                className="hidden md:flex flex-col h-screen bg-zinc-800 border-r border-zinc-700 relative"
            >
                <SidebarContent
                    isExpanded={isExpanded}
                    menuItems={menuItems}
                    activeMenu={activeMenu}
                    setActiveMenu={handleMenuClick}
                    activeSubMenu={activeSubMenu}
                    setActiveSubMenu={handleSubMenuClick}
                />

                {/* Collapse button */}
                <div className="absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="bg-zinc-700 hover:bg-emerald-500 text-white rounded-full p-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    >
                        {isExpanded ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                    </button>
                </div>
            </motion.aside>
        </>
    );
};

// Extracted sidebar content to avoid duplication
const SidebarContent = ({ isExpanded, menuItems, activeMenu, setActiveMenu, activeSubMenu, setActiveSubMenu, onClose }) => (
    <>
        {/* Header */}
        <div className="px-4 py-6 border-b border-zinc-700 flex-shrink-0">
            <div className={`flex items-center ${isExpanded ? 'space-x-3' : 'justify-center'}`}>
                <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 size={24} className="text-white" />
                </div>
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                        >
                            <h2 className="text-white font-bold text-lg whitespace-nowrap">Admin Panel</h2>
                            <p className="text-gray-400 text-sm whitespace-nowrap">Tech Exchange</p>
                        </motion.div>
                    )}
                </AnimatePresence>
                {onClose && (
                    <button onClick={onClose} className="absolute top-5 right-4 text-zinc-400 hover:text-white">
                        <X size={24} />
                    </button>
                )}
            </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-grow px-2 py-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => (
                <MenuItem
                    key={item.id}
                    item={item}
                    isExpanded={isExpanded}
                    isActive={activeMenu === item.id}
                    onClick={setActiveMenu}
                    activeSubMenu={activeSubMenu}
                    onSubMenuClick={setActiveSubMenu}
                />
            ))}
        </nav>

        {/* Footer */}
        <div className="p-2 border-t border-zinc-700 flex-shrink-0">
            <a href="/" className="block rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-800">
                <div className={`flex items-center space-x-3 p-2 rounded-lg hover:bg-zinc-700 transition-colors duration-200 cursor-pointer ${!isExpanded ? 'justify-center' : ''}`}>
                    <img src="https://placehold.co/40x40/10b981/ffffff?text=A" alt="Admin" className="w-10 h-10 rounded-full flex-shrink-0" />
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                                className="flex-1 min-w-0 overflow-hidden"
                            >
                                <p className="text-white font-medium text-sm truncate">Admin</p>
                                <p className="text-gray-400 text-xs truncate">admin@tech-exchange.com</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <LogOut className="h-5 w-5 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </a>
        </div>
    </>
);


export default Sidebar;
