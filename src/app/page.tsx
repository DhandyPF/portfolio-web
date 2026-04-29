import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";

export default function Home() {
  return (
    <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 min-h-screen">
      <BlurFade delay={0.2} className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/foto.jpg"
          alt="Foto Profil"
          width={400}
          height={400}
          className="rounded-2xl object-cover shadow-2xl"
        />
      </BlurFade>
      <BlurFade delay={0.4} className="w-full md:w-1/2">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">Halo, aku Nama Kamu</h1>
          <p className="text-lg leading-relaxed text-white/80">
            Tulis deskripsi singkat tentang dirimu di sini. Ceritakan siapa kamu,
            apa yang kamu lakukan, dan apa yang membuatmu unik.
          </p>
        </div>
      </BlurFade>
    </section>
  );
}