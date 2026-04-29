export default function Projects() {
  // Untuk tambah project baru, cukup tambah objek baru di dalam array ini
  const projects = [
    {
      title: "Nama Project 1",
      description: "Deskripsi singkat tentang project ini. Apa yang dibuat, teknologi apa yang dipakai.",
      tech: "Next.js, Tailwind CSS",
      link: "https://github.com/username/project1",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white mb-12 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white flex flex-col gap-3 hover:bg-white/20 transition-colors">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="text-sm text-white/80 flex-1">{project.description}</p>
            <p className="text-xs text-white/50">{project.tech}</p>
            <a href={project.link} target="_blank" className="text-sm underline hover:opacity-70 transition-opacity w-fit">
              Lihat Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}