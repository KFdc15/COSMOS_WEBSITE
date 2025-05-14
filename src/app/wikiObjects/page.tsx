"use client";

import { useState, useEffect } from "react";
import NavBar from "@/components/navbar";

export default function WikiProject() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedItem, setSelectedItem] = useState<WikiItem | null>(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

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
            title: "Milky Way Galaxy",
            img: "https://solarsystem.nasa.gov/internal_resources/125",
            desc: "The Milky Way is the galaxy that contains our solar system, with billions of stars, planets, and nebulae.",
            category: "Astronomy",
            lastEdited: "2025-05-10",
            content: "The Milky Way is a barred spiral galaxy with a diameter between 170,000 and 200,000 light-years. It contains over 100 billion stars and is part of the Local Group of galaxies."
        },
        {
            id: 2,
            title: "Black Holes",
            img: "https://solarsystem.nasa.gov/internal_resources/3622",
            desc: "Regions of spacetime with gravitational forces so strong that nothing, not even light, can escape.",
            category: "Cosmology",
            lastEdited: "2025-05-09",
            content: "Black holes are the densest objects in the universe, formed when massive stars collapse. They have an event horizon beyond which nothing can escape."
        },
        {
            id: 3,
            title: "Andromeda Galaxy",
            img: "https://th.bing.com/th/id/OIP.VYZlPiWpSQ8QRV23QzLecQHaE6?rs=1&pid=ImgDetMain",
            desc: "The nearest major galaxy to the Milky Way, destined to collide with it in 4.5 billion years.",
            category: "Astronomy",
            lastEdited: "2025-05-08",
            content: "Andromeda Galaxy (M31) is the closest major galaxy to Earth, located about 2.5 million light-years away. It's on a collision course with the Milky Way."
        },
        {
            id: 4,
            title: "Exoplanets",
            img: "https://exoplanets.nasa.gov/system/resources/detail_files/2318_5K_Exo_Info_lores_FINAL.jpg",
            desc: "Planets that orbit stars outside our solar system — many may hold the potential for life.",
            category: "Space Science",
            lastEdited: "2025-05-11",
            content: "Over 5,000 exoplanets have been discovered so far. Some are potentially habitable, located in the 'Goldilocks zone' of their star systems."
        },
        {
            id: 5,
            title: "Nebulae",
            img: "https://th.bing.com/th/id/OIP.CkHMnH09Pw9eypMNMjSNCAHaG5?rs=1&pid=ImgDetMain",
            desc: "Vast clouds of gas and dust in space, often the birthplaces of stars.",
            category: "Astronomy",
            lastEdited: "2025-05-07",
            content: "Nebulae are clouds of gas and dust in space. Emission nebulae glow from ionized gas, while reflection nebulae reflect starlight."
        },
        {
            id: 6,
            title: "James Webb Space Telescope",
            img: "https://science.nasa.gov/wp-content/uploads/2023/06/jwst-spacecraftpotentialtargetsmontageflip-1200px-4-jpg.webp",
            desc: "A revolutionary telescope launched to study the universe in infrared wavelengths.",
            category: "Technology",
            lastEdited: "2025-05-12",
            content: "JWST is the most powerful space telescope ever built, capable of observing the first galaxies and studying exoplanet atmospheres."
        }
    ];

    const filteredItems = wikiItems.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const categories = [...new Set(wikiItems.map(item => item.category))];

    // API stars
    useEffect(() => {
        const fetchStars = async () => {
            try {
                const mockApiStars = Array.from({ length: 20 }, (_, i) => ({
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
                setStars([]);
            }
        };

        fetchStars();

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

    interface WikiItem {
        id: number;
        title: string;
        img: string;
        desc: string;
        category: string;
        lastEdited: string;
        content: string;
    }

    const handleItemClick = (item: WikiItem): void => {
        setSelectedItem(item);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setSelectedItem(null);
    };

    const fetchNASAAPOD = async () => {
        try {
            const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
            const data = await res.json();
            return data;
        } catch (error) {
            console.error('Error fetching NASA APOD:', error);
            return null;
        }
    };

    const handleLoadAPOD = async () => {
        const apodData = await fetchNASAAPOD();
        if (apodData) {
            // Update the selected item with APOD data
            setSelectedItem(prev => prev ? { ...prev, apodData: apodData } : null);
        }
    };

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      
    <NavBar />


            {/* Stars Background */}
            <div className="fixed inset-0 -z-10 bg-black">
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

                {stars.map((star, i) => (
                    <div
                        key={`api-star-${i}`}
                        className="absolute rounded-full bg-yellow-200 opacity-90"
                        style={{
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            top: `${star.y}%`,
                            left: `${star.x}%`,
                            boxShadow: `0 0 ${star.brightness}px 2px ${star.color}`
                        }}
                    />
                ))}
            </div>

            <main className="flex flex-col gap-10 row-start-2 items-center w-full max-w-6xl">
                {/* NASA APOD Section */}
                <section className="w-full bg-white/10 rounded-xl p-6 text-white backdrop-blur-md flex flex-col md:flex-row items-center gap-6 shadow-lg">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-2">NASA Astronomy Picture of the Day</h2>
                        <p className="mb-4">Each day, NASA shares a breathtaking image or video of our cosmos. Discover the wonders of space, stars, and galaxies beyond.</p>
                        <button
                            onClick={async () => {
                                const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
                                const data = await res.json();
                                const image = document.getElementById("apod-image") as HTMLImageElement;
                                const title = document.getElementById("apod-title");
                                const desc = document.getElementById("apod-desc");
                                const date = document.getElementById("apod-date");
                                if (image && title && desc && date) {
                                    image.src = data.url;
                                    title.textContent = data.title;
                                    desc.textContent = data.explanation;
                                    date.textContent = data.date;
                                }
                            }}
                            className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Load Today's APOD
                        </button>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                        <img id="apod-image" src="https://www.atscope.com.au/BRO/APOD_Logo.jpg" alt="NASA APOD" className="rounded-xl shadow-md max-h-64 object-cover" />
                        <h3 id="apod-title" className="mt-4 text-lg font-semibold"></h3>
                        <p id="apod-desc" className="text-sm text-white/80 mt-2 max-h-32 overflow-auto"></p>
                        <p id="apod-date" className="text-xs mt-1 text-white/50"></p>
                    </div>
                </section>

                {/* Search */}
                <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-md px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                {/* Categories */}
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

                {/* Result Count */}
                {searchTerm && (
                    <p className="text-white/80 text-lg">
                        Found {filteredItems.length} article{filteredItems.length !== 1 ? 's' : ''} for "{searchTerm}"
                    </p>
                )}

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white/15 rounded-2xl shadow-lg flex flex-col p-6 backdrop-blur-md hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                            onClick={() => handleItemClick(item)}
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

                {/* No Result */}
                {filteredItems.length === 0 && searchTerm && (
                    <div className="text-center py-12">
                        <p className="text-white/80 text-lg mb-4">No articles found matching your search.</p>
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Create "{searchTerm}" article
                        </button>
                    </div>
                )}


            </main>

            {/* Footer */}
            <footer className="row-start-3 flex flex-col items-center gap-2 text-white/60">
                <p>&copy; 2025 Cosmos_Website </p>
                <div className="flex space-x-4 text-sm">
                    <a href="#" className="hover:text-white transition-colors">Help</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                </div>
            </footer>

            {/* Popup Modal */}
            {isPopupOpen && selectedItem && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
                    <div className="bg-white/15 rounded-2xl shadow-lg flex flex-col p-6 backdrop-blur-md hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                        <div className="flex justify-between items-start mb-6">
                            <h2 className="text-3xl font-bold text-white">{selectedItem.title}</h2>
                            <button
                                onClick={closePopup}
                                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                            >
                                ×
                            </button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <img
                                    src={selectedItem.img}
                                    alt={selectedItem.title}
                                    className="w-full h-64 object-cover rounded-lg shadow-md"
                                />
                                <div className="mt-4 space-y-2">
                                    <p className="text-sm text-white/70">
                                        <strong>Category:</strong> {selectedItem.category}
                                    </p>
                                    <p className="text-sm text-white/70">
                                        <strong>Last edited:</strong> {selectedItem.lastEdited}
                                    </p>
                                </div>
                            </div>
                            
                            <div>
                                <p className="text-white/80 mb-4">{selectedItem.desc}</p>
                                <p className="text-white/80 mb-6">{selectedItem.content}</p>
                                
                             
                            </div>
                        </div>
                        

                    </div>
                </div>
            )}
        </div>
    );
}