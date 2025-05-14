import Image from "next/image";
import NavBar from "@/components/navbar";
import Earth3D from "@/components/planet";
import Mars3D from "@/components/planet2";
import Jupiter3D from "@/components/planet3";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NavBar/>
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

      {/* Hành tinh quay tròn và desc hai bên */}
      <main className="flex flex-row items-center justify-center w-full h-full gap-16 z-10">
        {/* Desc bên trái */}
        <div className="text-white text-xl max-w-xs text-right">
          <p>
            Khám phá vũ trụ rộng lớn, nơi những hành tinh quay quanh các vì sao và mở ra những bí ẩn chưa từng được biết đến.
          </p>
        </div>
        <Earth3D />
        {/* Desc bên phải */}
        <div className="text-white text-xl max-w-xs text-left">
          <p>
            Hãy cùng Cosmos Website khám phá những điều kỳ diệu của không gian và thời gian, từ những hành tinh xa xôi đến các thiên hà bí ẩn!
          </p>
        </div>
      </main>
      <main className="flex flex-row items-center w-full h-full gap-16 z-10 mt-150">
      {/* Hành tinh quay tròn bên trái */}
        <Mars3D />
        {/* Desc bên phải */}
        <div className="text-white text-xl max-w-xs text-left">
          <p>
            Hãy cùng Cosmos Website khám phá những điều kỳ diệu của không gian và thời gian, từ những hành tinh xa xôi đến các thiên hà bí ẩn!
          </p>
        </div>
      </main>
      <main className="flex flex-row items-center w-full h-full gap-10 z-10 mt-150">
        <Jupiter3D />
        <div className="text-white text-xl max-w-xs text-right">
          <p>
            Khám phá vũ trụ rộng lớn, nơi những hành tinh quay quanh các vì sao và mở ra những bí ẩn chưa từng được biết đến.
          </p>
        </div>
      </main>
      <footer>
        <div className="text-white text-center mt-32">
          <p>© 2025 Cosmos. All rights reserved.</p>
          <p>Designed by Three Sheeps</p>
        </div>
      </footer>

                   {/* Footer */}
            <footer className="row-start-3 flex flex-col items-center gap-2 text-white/60">
                <p>&copy; 2025 Cosmos_Website </p>
                <div className="flex space-x-4 text-sm">
                    <a href="#" className="hover:text-white transition-colors">Help</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                </div>
            </footer>

    </div>
  );
}
