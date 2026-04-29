import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Dhandy Putra Fahruddin",
  description: "Portfolio website milik Dhandy Putra Fahruddin",
};

function Navbar() {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-white font-bold text-xl">Dhandy Putra Fahruddin</span>
        <ul className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-white/60 text-sm">© 2025 Dhandy Putra Fahruddin. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="https://instagram.com/dhandyputra.f" target="_blank" className="text-white/60 hover:text-white transition-colors text-sm">Instagram</a>
          <a href="https://github.com/DhandyPF" target="_blank" className="text-white/60 hover:text-white transition-colors text-sm">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={geist.className}>
        <div className="relative min-h-screen flex flex-col">
          <div className="fixed inset-0 -z-10">
            <HeroGeometric badge="" title1="" title2="" description="" />
          </div>
          <Navbar />
          <main className="flex-1 pt-16 pb-14">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}