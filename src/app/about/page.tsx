import Footer from "@/components/Footer";
import NavBar from "@/components/navbar";

export default function About() {
    // Example items array, replace with your actual data
    const items = [
        { name: "Galaxy", desc: "A system of millions or billions of stars." },
        { name: "Nebula", desc: "A giant cloud of dust and gas in space." },
        { name: "Black Hole", desc: "A region of spacetime with strong gravity." }
    ];
    return (
        <div className="grid grid-rows-[20px_1fr_2  0px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                       <div className="fixed top-0 left-0 right-0 z-50">
                <NavBar />
            </div>
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

            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center w-full">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                About Us
                </h1>
                <p className="text-lg text-center w-full">
                  Welcome to the Cosmos website! Here, you can explore the wonders of the universe.
                </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 w-full max-w-5xl mt-8 justify-items-center mx-auto justify-center">
                {/* Example items array, replace with your actual data */}
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="w-64 h-60 bg-white/10 rounded-2xl shadow-lg flex flex-col items-center p-6 backdrop-blur-md"
                    >
                        <p className="text-white text-lg font-semibold mb-2">{item.name}</p>
                        <div
                            className="w-32 h-32 object-cover rounded-xl mb-2 bg-gray-300 flex items-center justify-center"
                        >
                            {/* You can put an image or icon here */}
                        </div>
                        <p className="text-white text-center">{item.desc}</p>
                    </div>
                ))}
            </div>
            <Footer/>
            </main>
        </div>
    );
}