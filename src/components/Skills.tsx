const backendSkills = [
  { name: "Node.js",     icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Express.js",  icon: "https://cdn.simpleicons.org/express/ffffff" },
  { name: "REST API",    icon: "https://cdn.simpleicons.org/fastapi/009688" },
  { name: "PostgreSQL",  icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "MongoDB",     icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "NestJS",      icon: "https://cdn.simpleicons.org/nestjs/E0234E" },
];

const frontendSkills = [
  { name: "React.js",    icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "JavaScript",  icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript",  icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "HTML / CSS",  icon: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "Tailwind CSS",icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Next.js",     icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
];

const devopsSkills = [
  { name: "Git",     icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub",  icon: "https://cdn.simpleicons.org/github/ffffff" },
  { name: "Docker",  icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Linux",   icon: "https://cdn.simpleicons.org/linux/FCC624" },
  { name: "Nginx",   icon: "https://cdn.simpleicons.org/nginx/009639" },
  { name: "Swagger", icon: "https://cdn.simpleicons.org/swagger/85EA2D" },
];

const alsoSkills = ["JWT", "Socket.io", "GraphQL", "Prisma", "Jest", "Webpack", "Figma", "Postman"];


function SkillCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-white/3 hover:bg-white/6 border border-white/5 hover:border-white/10 rounded-xl transition-all duration-200 cursor-default">
      <img
        src={icon}
        alt={name}
        className="w-8 h-8 object-contain"
        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
      />
      <span className="text-gray-400 text-xs text-center font-medium">{name}</span>
    </div>
  );
}

function SkillGroup({
  title,
  color,
  skills,
}: {
  title: string;
  color: string;
  skills: { name: string; icon: string }[];
}) {
  return (
    <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <span className="w-2 h-2 rounded-full" style={{ background: color }} />
        <span className="font-mono font-bold text-sm" style={{ color }}>
          {title}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {skills.map((s) => (
          <SkillCard key={s.name} {...s} />
        ))}
      </div>
    </div>
  );
}


export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-violet-400 font-mono text-sm mb-3">// skills</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">Texnologiyalar</h2>
          <p className="text-gray-500 text-sm">Ishlatadigan asosiy texnologiyalar va asboblar</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-5">
          <SkillGroup title="Backend"       color="#4ade80" skills={backendSkills} />
          <SkillGroup title="Frontend"      color="#60a5fa" skills={frontendSkills} />
          <SkillGroup title="Tools & DevOps" color="#a78bfa" skills={devopsSkills} />
        </div>

        <div className="bg-white/3 border border-white/8 rounded-2xl px-6 py-4 flex flex-wrap items-center gap-3">
          <span className="text-gray-500 text-sm font-medium mr-2">Shuningdek:</span>
          {alsoSkills.map((s) => (
            <span
              key={s}
              className="px-3 py-1 bg-white/5 border border-white/8 rounded-full text-gray-400 text-xs font-mono hover:text-white hover:border-white/20 transition-colors cursor-default"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
