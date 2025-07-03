const testimonials = [
  { name: "Andi", role: "Ketua Angkatan 2024", year: "2024", quote: "Eterion adalah keluarga kedua saya. Penuh semangat dan inspirasi!" },
  { name: "Budi", role: "Alumni", year: "2025", quote: "Pengalaman di Eterion membentuk karakter dan jejaring yang luas." },
  { name: "Citra", role: "Anggota Aktif", year: "2024", quote: "Bersama Eterion, saya belajar banyak hal baru dan bertemu teman hebat." },
];

export default function Testimoni() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center text-accent mb-12">Testimoni Anggota & Alumni</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={t.name} className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 shadow-lg animate-fade-in" style={{animationDelay: `${idx*0.2}s`}}>
            <div className="text-lg font-bold text-white mb-2">{t.name}</div>
            <div className="text-sm text-accent mb-1">{t.role} ({t.year})</div>
            <blockquote className="italic text-white/90">“{t.quote}”</blockquote>
          </div>
        ))}
      </div>
    </section>
  );
} 