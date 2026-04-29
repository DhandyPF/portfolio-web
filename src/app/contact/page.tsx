import { a } from "framer-motion/client";

export default function Contact() {
  // Ganti semua href dengan link milikmu
  const links = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dhandy-putra-fahruddin-931011383/" },
    { label: "GitHub", href: "https://github.com/DhandyPF" },
    { label: "Email", href: "mailto:dhandy.pf@gmail.com" },
    { label: "Discord", href: "https://discord.com/users/moisdurdane" },
  ];

  return (
    <section className="container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-4xl font-bold text-white mb-8">Contact</h1>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl font-bold hover:opacity-50 transition-opacity"
        >
          {link.label}
        </a>
      ))}
    </section>
  );
}