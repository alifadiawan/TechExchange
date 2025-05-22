import React from 'react';
import App from '../App';
import { Link } from 'react-router-dom';

const ArtikelList = () => {
    const articles = [
        {
            id: "3123asa-975d-4f74-342342-27e830efe285",
            title: "Tiptap Editor 3.0 Beta - Flexible, open-source editor built for modern web developers",
            excerpt: "Tiptap Editor 3.0 is a beta version of a flexible, open-source headless rich text editor designed for modern web developers and built by the open-source community. Its release offers new opportunities for integration and innovation in web development projects.",
            image: "https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/72dd294099030a03fb1800a247bdae6e?_a=AQAEuj9",
            date: "20 Mei 2024",
            author: "Admin"
        },
        {
            id: "3123asa-975d-4f74-342342-27e830efe285",
            title: "How to detect VPN users on your website/app",
            excerpt: "Learn how to detect VPN users on your website or web app using the IPLocate API. The post provides examples for both client-side detection using Javascript and server-side detection with Express.js. It details fetching IP data and checking specific fields such as 'is_vpn' to determine if a user is connected through a VPN. Additional filtering options like 'is_proxy' and 'is_tor' are also discussed.",
            image: "https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/3cd9554d3f142a6890c7cb1d30c56b1c?_a=AQAEuj9",
            date: "18 Mei 2024",
            author: "Admin"
        },
        {
            id: "3123asa-975d-4f74-342342-27e830efe285",
            title: "Why Your Code is Slow: Common Performance Mistakes Beginners Make",
            excerpt: "Slow code is a common issue for beginners. This guide explores seven frequent performance pitfalls and offers solutions to enhance code efficiency. Key topics include logging, loop optimization, database query handling, understanding hardware, memory management, array traversal, and avoiding unnecessary data copies. ",
            image: "https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/ef8aaabe7d304f0d02cf1324db96ec63?_a=AQAEuj9",
            date: "15 Mei 2024",
            author: "Admin"
        }
    ];

    return (
        <App>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-white">Artikel Terbaru</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <Link 
                            key={article.id}
                            to={`/artikel/detail/${article.id}`}
                            className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="relative">
                                <img 
                                    src={article.image} 
                                    alt={article.title} 
                                    className="h-48 w-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-900 to-transparent p-4">
                                    <div className="flex items-center space-x-4 text-sm">
                                        <span className="text-emerald-500">{article.date}</span>
                                        <span className="text-gray-400">Oleh {article.author}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-medium text-white text-lg mb-2">{article.title}</h3>
                                <p className="text-gray-400 text-sm">{article.excerpt}</p>
                                <div className="mt-4 flex items-center text-emerald-500 text-sm">
                                    Baca selengkapnya
                                    <svg 
                                        className="ml-2 h-4 w-4" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M9 5l7 7-7 7" 
                                        />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </App>
    );
};

export default ArtikelList;