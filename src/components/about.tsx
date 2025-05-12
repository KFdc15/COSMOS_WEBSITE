import NavBar from "@/components/navbar";

export default function About() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <NavBar />
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="text-lg text-center sm:text-left">
            Welcome to the Cosmos website! Here, you can explore the wonders of the universe.
            </p>
        </main>
        </div>
    );
}