import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav className="fixed top-0 w-full bg-black bg-opacity-80 p-4 backdrop-blur-sm">
        <div className="max-w-full mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center ml-10">
            <Image
              className="dark:invert"
              src="/planet-svgrepo-com.svg"
              alt="Planet logo"
              width={30}
              height={15}
              priority
            />
            <span className="text-white text-2xl font-bold">Cosmos</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 ml-12">
            <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
            <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
            <Link href="/wikiObjects" className="text-gray-300 hover:text-white">Wiki Objects</Link>
            <a href="/resources" className="text-gray-300 hover:text-white">Resources</a>
          </div>

          {/* Learn More Button */}
          <div className="mr-8">
            <a
              href="#"
              className="bg-white text-[#04080F] px-6 py-2 rounded-full hover:bg-gray-200 transition-colors"
            >
              Explore Universe
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
