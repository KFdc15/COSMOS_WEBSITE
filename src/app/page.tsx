import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
            <a href="#" className="text-gray-300 hover:text-white">Home</a>
            <a href="#" className="text-gray-300 hover:text-white">About</a>
            <a href="#" className="text-gray-300 hover:text-white">Wiki Objects</a>
            <a href="#" className="text-gray-300 hover:text-white">Resources</a>
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
      
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
    </div>
  );
}
