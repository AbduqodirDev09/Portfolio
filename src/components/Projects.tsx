const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

interface Project {
  title: string;
  desc: string;
  tags: string[];
  live: string | null;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "EduNex — O'quv Markaz Tizimi",
    desc: "O'quv markazini to'liq tizimlashtirish uchun platforma. Director, Manager, Admin, Teacher va Studentlar uchun alohida Telegram bot va web panel. Har bir rol o'z imkoniyatlariga ega.",
    tags: ["NestJS", "Prisma", "PostgreSQL"],
    live: null,
    gradient: "from-violet-600/20 to-blue-600/20",
  },
  {
    title: "Intizom — Productivity App",
    desc: "Odatlar, vazifalar, maqsadlar va moliyani kuzatuvchi to'liq platforma. Obuna tizimi, admin panel va analytics bilan. O'zini rivojlantirmoqchi bo'lgan foydalanuvchilar uchun.",
    tags: ["NestJS", "Prisma", "PostgreSQL"],
    live: null,
    gradient: "from-emerald-600/20 to-teal-600/20",
  },
  {
    title: "Ustoz Support — AI Yordamchi",
    desc: "O'qituvchilar uchun AI asosida taqdimot, test, o'yin va amaliyotlar yaratuvchi zamonaviy platforma. Google autentifikatsiya va obuna tizimi bilan.",
    tags: ["React", "TypeScript"],
    live: null,
    gradient: "from-orange-600/20 to-rose-600/20",
  },
  {
    title: "Prezentor — AI Taqdimot Bot",
    desc: "Telegram bot orqali Google Gemini AI yordamida taqdimot, referat va mustaqil ishlar yaratuvchi xizmat. 1000+ dan ortiq faol foydalanuvchi bilan ishlamoqda.",
    tags: ["Node.js", "Telegraf", "MongoDB", "Google Gemini AI"],
    live: "https://t.me/prezentor_bot",
    gradient: "from-blue-600/20 to-cyan-600/20",
  },
  {
    title: "ShopUz — E-Commerce Platforma",
    desc: "To'liq funksional onlayn do'kon. Mahsulot katalogi, savat, buyurtmalar va admin panel. JWT autentifikatsiya, qidiruv va kategoriya filtri bilan.",
    tags: ["NestJS", "Prisma", "PostgreSQL", "React", "TypeScript", "Tailwind CSS"],
    live: null,
    gradient: "from-amber-600/20 to-yellow-600/20",
  },
  {
    title: "Luvi Uz",
    desc: "Websocket qismi Stomp orqali qilingan. Video va Audio call qismida Jitsi kutubxonasi o'zimizni serverga qo'yilgan va mos interface berilgan.",
    tags: ["Next.js", "Stompjs", "React", "TypeScript", "Tailwindcss"],
    live: null,
    gradient: "from-pink-600/20 to-rose-600/20",
  },
];

function ProjectCard({ title, desc, tags, live, gradient }: Project) {
  return (
    <div
      className={`relative bg-gradient-to-br ${gradient} border border-white/8 hover:border-white/15 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{desc}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 bg-white/5 border border-white/8 rounded-md text-gray-400 text-xs font-mono"
            >
              {t}
            </span>
          ))}
        </div>
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-violet-500/50 text-violet-400 hover:bg-violet-500 hover:text-white rounded-lg text-xs font-semibold transition-all duration-200 w-fit"
          >
            <ExternalLinkIcon /> Live
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-violet-400 font-mono text-sm mb-3">// projects</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">Loyihalar</h2>
          <p className="text-gray-500 text-sm">Qurgan eng yaxshi ishlarimdan ba'zilari</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/AbduqodirDev09"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-semibold text-sm transition-all duration-200"
          >
            GitHub'da ko'proq →
          </a>
        </div>
      </div>
    </section>
  );
}
