import { useState, useEffect } from "react";
import { BiSolidLeaf } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

export default function Hero() {
  const [typed, setTyped] = useState("")
  const full = "Fullstack Developer";

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setTyped(full.slice(0, i + 1));
      i++;
      if (i >= full.length) clearInterval(t);
    }, 60);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full pt-24">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 mb-8 font-mono">
         
          <span className="text-emerald-500 animate-pulse"><BiSolidLeaf /></span>
          Available for work
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
          <span className="text-white">Hi, I'm </span>
          <span className="text-violet-400 underline decoration-violet-500/50 underline-offset-4">
            Abduqodir
          </span>
        </h1>

        <p className="text-xl md:text-2xl font-mono text-gray-400 mb-6">
          <span className="text-violet-400">&gt; </span>
          {typed}
          <span className="animate-pulse">|</span>
        </p>

        <p className="text-gray-400 max-w-xl mb-10 leading-relaxed text-base">
          <span className="text-white font-semibold">Nest.js</span> va{" "}
          <span className="text-white font-semibold">Next.js</span> — mening asosiy qurollarim.
          Kichik loyihalardan tortib katta tizimlargacha qurib beraman. Kod yozish uchun emas,
          muammoni hal qilish uchun dasturlashdaman.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25"
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-semibold text-sm transition-all duration-200"
          >
            Contact Me
          </button>
        </div>

        <div className="flex gap-3">
          <a
            href="https://github.com/AbduqodirDev09"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-all duration-200"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-all duration-200"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://t.me/abduqodir_777_dev"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-gray-400 hover:text-white transition-all duration-200"
          >
            <FaTelegram size={18} />
          </a>
        </div>

        <div className="mt-16 flex flex-col items-center gap-1 text-gray-600 text-xs font-mono">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-gray-600" />
          SCROLL
        </div>
      </div>
    </section>
  );
}
