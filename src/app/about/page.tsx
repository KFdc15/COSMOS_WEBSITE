import NavBar from "@/components/navbar";

export default function About() {
    const items = [
        {
            img: "/images/planet1.jpg",
            desc: "Planet 1: A beautiful world."
        },
        {
            img: "/images/planet2.jpg",
            desc: "Planet 2: Mysterious and vast."
        },
        {
            img: "/images/planet3.jpg",
            desc: "Planet 3: Full of wonders."
        },
        {
            img: "/images/planet4.jpg",
            desc: "Planet 4: Distant and cold."
        },
        {
            img: "/images/planet5.jpg",
            desc: "Planet 5: Bright and lively."
        },
        {
            img: "/images/planet6.jpg",
            desc: "Planet 6: The unknown frontier."
        }
    ];
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <NavBar />
            <div className="fixed inset-0 -z-10 bg-black">
                {/* Các ngôi sao */}
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
            </div>

            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
                <h1 className="text-4xl font-bold">About Us</h1>
                <p className="text-lg text-center sm:text-left">
                    Welcome to the Cosmos website! Here, you can explore the wonders of the universe.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl mt-8">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white/10 rounded-2xl shadow-lg flex flex-col items-center p-6 backdrop-blur-md"
                        >
                            <img
                                src={item.img}
                                alt={`Planet ${idx + 1}`}
                                className="w-32 h-32 object-cover rounded-xl mb-4"
                            />
                            <p className="text-white text-center">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}