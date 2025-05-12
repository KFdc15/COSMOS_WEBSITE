"use client";

import { useState, useEffect } from "react";
import NavBar from "@/components/navbar";

export default function WikiProject() {
    const [searchTerm, setSearchTerm] = useState("");
    interface Star {
        id: number;
        name: string;
        size: number;
        x: number;
        y: number;
        brightness: number;
        color: string;
        constellation: string;
    }

    const [stars, setStars] = useState<Star[]>([]);
    
    const wikiItems = [
        {
            id: 1,
            title: "Space Exploration",
            img: "/api/placeholder/300/200",
            desc: "Discover the history and future of human space exploration, from the first satellite to Mars missions.",
            category: "Science",
            lastEdited: "2025-05-10"
        },
        {
            id: 2,
            title: "Quantum Physics",
            img: "/api/placeholder/300/200",
            desc: "Understanding the fundamental principles that govern the behavior of matter and energy at the smallest scales.",
            category: "Physics",
            lastEdited: "2025-05-09"
        },
        {
            id: 3,
            title: "Ancient Civilizations",
            img: "/api/placeholder/300/200",
            desc: "Explore the rise and fall of great civilizations throughout human history.",
            category: "History",
            lastEdited: "2025-05-08"
        },
        {
            id: 4,
            title: "Artificial Intelligence",
            img: "/api/placeholder/300/200",
            desc: "The development of intelligent machines and their impact on society.",
            category: "Technology",
            lastEdited: "2025-05-11"
        },
        {
            id: 5,
            title: "Marine Biology",
            img: "/api/placeholder/300/200",
            desc: "Life beneath the waves - from microscopic plankton to massive whales.",
            category: "Biology",
            lastEdited: "2025-05-07"
        },
        {
            id: 6,
            title: "Climate Change",
            img: "/api/placeholder/300/200",
            desc: "Understanding the causes, effects, and solutions to global climate change.",
            category: "Environment",
            lastEdited: "2025-05-12"
        }
    ];

    const filteredItems = wikiItems.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const categories = [...new Set(wikiItems.map(item => item.category))];

    // Fetch stars from API
    useEffect(() => {
        // Giả lập API call để lấy thông tin về các ngôi sao
        const fetchStars = async () => {
            try {
                // Tạo dữ liệu ngôi sao giả lập (có thể thay thế bằng real API)
                const mockApiStars = Array.from({length: 20}, (_, i) => ({
                    id: i,
                    name: `Star-${i + 1}`,
                    size: Math.random() * 3 + 2,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    brightness: Math.random() * 10 + 5,
                    color: ['white', 'yellow', 'cyan', 'gold'][Math.floor(Math.random() * 4)],
                    constellation: ['Orion', 'Ursa Major', 'Cassiopeia', 'Andromeda'][Math.floor(Math.random() * 4)]
                }));
                
                setStars(mockApiStars);
            } catch (error) {
                console.error('Lỗi khi fetch stars từ API:', error);
                // Fallback với dữ liệu mặc định
                setStars([]);
            }
        };

        fetchStars();
        
        // Update stars position mỗi 5 giây (tạo hiệu ứng chuyển động)
        const interval = setInterval(() => {
            setStars(prevStars => 
                prevStars.map(star => ({
                    ...star,
                    x: (star.x + 0.1) % 100,
                    y: star.y + Math.sin(Date.now() * 0.001 + star.id) * 0.01
                }))
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
            <NavBar />

            {/* Background với stars như code gốc và thêm API stars */}
            <div className="fixed inset-0 -z-10 bg-black">
                {/* Các ngôi sao cố định như code gốc */}
                {[...Array(80)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white opacity-80"
                        style={{
                            width: `${Math.random() * 2 + 1}px`,
                            height: `${Math.random() * 2 + 1}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            boxShadow: `0 0 6px 1px white`
                        }}
                    />
                ))}
                
                {/* API stars - Các ngôi sao lấy từ API */}
                {stars.map((star, i) => (
                    <div
                        key={`api-star-${i}`}
                        className="absolute rounded-full bg-yellow-200 opacity-90"
                        style={{
                            width: `${star.size || 3}px`,
                            height: `${star.size || 3}px`,
                            top: `${star.y || Math.random() * 100}%`,
                            left: `${star.x || Math.random() * 100}%`,
                            boxShadow: `0 0 ${star.brightness || 8}px 2px ${star.color || 'yellow'}`
                        }}
                    />
                ))}
            </div>

            <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-6xl">
                {/* Search bar bên trong main */}
                <div className="w-full flex justify-center">
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="max-w-md px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                {/* Categories Filter */}
                <div className="flex flex-wrap gap-3 justify-center">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className="px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Search Results Info */}
                {searchTerm && (
                    <p className="text-white/80 text-lg">
                        Found {filteredItems.length} article{filteredItems.length !== 1 ? 's' : ''} for "{searchTerm}"
                    </p>
                )}

                {/* Wiki Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white/15 rounded-2xl shadow-lg flex flex-col p-6 backdrop-blur-md hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                        >
                            <div className="relative overflow-hidden rounded-xl mb-4">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-lg text-sm">
                                    {item.category}
                                </div>
                            </div>
                            
                            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                            <p className="text-white/80 text-sm mb-4 flex-grow">{item.desc}</p>
                            
                            <div className="flex justify-between items-center text-white/60 text-xs">
                                <span>Last edited: {item.lastEdited}</span>
                                <div className="flex space-x-2">
                                    <button className="hover:text-white transition-colors">Edit</button>
                                    <button className="hover:text-white transition-colors">History</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results */}
                {filteredItems.length === 0 && searchTerm && (
                    <div className="text-center py-12">
                        <p className="text-white/80 text-lg mb-4">No articles found matching your search.</p>
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Create "{searchTerm}" article
                        </button>
                    </div>
                )}

                {/* Recent Activity Section */}
                <div className="w-full mt-8 p-6 bg-white/10 rounded-2xl backdrop-blur-md">
                    <h2 className="text-2xl font-bold text-white mb-4">Recent Activity</h2>
                    <div className="space-y-3">
                        {wikiItems.slice(0, 3).map((item) => (
                            <div key={item.id} className="flex items-center space-x-3 text-white/80">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span className="text-sm">
                                    <strong className="text-white">{item.title}</strong> was edited on {item.lastEdited}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="row-start-3 flex flex-col items-center gap-2 text-white/60">
                <p>&copy; 2025 KnowledgeWiki. All rights reserved.</p>
                <div className="flex space-x-4 text-sm">
                    <a href="#" className="hover:text-white transition-colors">Help</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                </div>
            </footer>
        </div>
    );
}