import { useState } from 'react';
import { Link } from 'react-router-dom';

// (Optional) กำหนด Type สำหรับ Link
interface NavLink {
    name: string;
    href: string;
}

function Navbar() {
    // Check if the menu is open
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Links Menu
    const links: NavLink[] = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
    ];

    return (
        <nav className="bg-gray-950 text-white shadow-md sticky top-0 z-50">

            {/* Desktop Menu */}
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#" className="text-xl font-bold">
                        Gihub User Viewer
                    </a>
                    <div className="hidden md:flex space-x-4">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className='md:hidden'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <div className="space-y-1.5">
                                <span className="block w-6 h-0.5 bg-current"></span>
                                <span className="block w-6 h-0.5 bg-current"></span>
                                <span className="block w-6 h-0.5 bg-current"></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div id="mobile-menu" className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >{link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;