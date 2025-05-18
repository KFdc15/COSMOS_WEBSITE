import NavbarInapp from "../navbarInapp/page"
import { StarryBackground } from "@/components/starry-background"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <StarryBackground />
      <NavbarInapp />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        {children}
      </main>
    </div>
  )
} 