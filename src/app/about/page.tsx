import Footer from "@/components/Footer";
import NavBar from "@/components/navbar";
import StarsBg from "@/components/stars_bg";

export default function About() {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-4 sm:p-8 md:p-16 lg:p-20 gap-8 sm:gap-12 md:gap-16 font-[family-name:var(--font-geist-sans)]">
            <NavBar />
            <StarsBg />

            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center w-full">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                About Us
                </h1>
                <p className="text-lg text-center w-full">
                  Welcome to “Các Vì Tinh Tú” - Your Gateway to the Universe!
                </p>
                <p className="text-lg text-center w-full">
                  Our website is the perfect destination for anyone passionate about astronomy and eager to explore the mysteries of outer space. Here, you’ll find in-depth information about each planet in the Solar System – from the smallest like Mercury, to the gas giants such as Jupiter, and the icy world of Neptune. Each planet is introduced with accurate scientific data, including its diameter, distance from the Sun, rotation time, climate, and unique characteristics.
                </p>
                <p className="text-lg text-center w-full">
                  More than just a source of knowledge, “Các Vì Tinh Tú” provides a visually engaging and educational space, making astronomy accessible and exciting for users of all ages. Whether you're a student, a teacher, or simply a curious explorer of the cosmos, our website will take you on an inspiring journey through space.
                </p>

            <div className="text-lg text-center w-full justify-center">
                <p className="text-lg text-center w-full">
                    
                </p>
            </div>
            <Footer/>
            </main>
        </div>
    );
}