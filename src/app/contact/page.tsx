export default function Contact() {
  // Ganti semua href dengan link milikmu
  const links = [
    { label: "LinkedIn", href: "https://linkedin.com/in/username_kamu" },
    { label: "GitHub", href: "https://github.com/username_kamu" },
    { label: "Email", href: "mailto:email_kamu@gmail.com" },
    { label: "Discord", href: "https://discord.com/users/username_kamu" },
  ];

  return (
    <section className="container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-4xl font-bold text-white mb-8">Contact</h1>
      {links.map((link, index) => (
        
          key={index}
          href={link.href}
          target="_blank"
          className="text-white text-3xl font-bold hover:opacity-50 transition-opacity"
        >
          {link.label}
        </a>
      ))}
    </section>
  );
}