import { useState } from "react";
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoSend } from "react-icons/io5";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    // Agar tugma form ichida bo'lsa yoki sahifa qayta yuklanishini oldini olish uchun
    if (e && e.preventDefault) e.preventDefault();
    
    if (!form.name || !form.email || !form.message) return;

    const subject = encodeURIComponent(`Portfolio orqali xabar: ${form.name}`);
    const body = encodeURIComponent(
      `Ismi: ${form.name}\nEmail: ${form.email}\n\nXabar:\n${form.message}`
    );
    // Holatni yangilash va inputlarni tozalash
    setSent(true);
    setForm({ name: "", email: "", message: "" }); 
    
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-violet-400 font-mono text-sm mb-3">// contact</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">Bog'lanish</h2>
          <p className="text-gray-500 text-sm">Loyiha yoki hamkorlik bo'yicha murojaat qiling</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Chap tomon: Kontakt ma'lumotlari */}
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-2">Kontakt</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Hozirda yangi loyihalarga ochiqman. Quyidagi manzillar orqali bog'laning.
            </p>

            <div className="flex flex-col gap-5">
              <a
                href="mailto:abduqodirtohirjonov@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-violet-500/10 border border-violet-500/20 rounded-xl text-violet-400 group-hover:bg-violet-500/20 transition-colors">
                  <MdEmail size={20} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-mono">Email</p>
                  <p className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    abduqodirtohirjonov@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://t.me/abduqodir_777_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  <FaTelegram size={18} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-mono">Telegram</p>
                  <p className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    @abduqodir_777_dev
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 flex items-center justify-xl bg-sky-500/10 border border-sky-500/20 rounded-xl text-sky-400 group-hover:bg-sky-500/20 transition-colors flex items-center justify-center">
                  <FaLinkedin size={18} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-mono">LinkedIn</p>
                  <p className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    Tohirjonov Abduqodir
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* O'ng tomon: Forma */}
          <form onSubmit={handleSubmit} className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 flex flex-col gap-5">
            <div>
              <label className="text-gray-400 text-xs font-mono mb-2 block">Ismingiz</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Abduqodir"
                required
                className="w-full bg-white/5 border border-white/8 focus:border-violet-500/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors placeholder-gray-600"
              />
            </div>
            <div>
              <label className="text-gray-400 text-xs font-mono mb-2 block">Email</label>
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="email@example.com"
                type="email"
                required
                className="w-full bg-white/5 border border-white/8 focus:border-violet-500/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors placeholder-gray-600"
              />
            </div>
            <div className="flex-1">
              <label className="text-gray-400 text-xs font-mono mb-2 block">Xabar</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Sizning loyihangiz haqida qisqacha..."
                rows={5}
                required
                className="w-full bg-white/5 border border-white/8 focus:border-violet-500/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors placeholder-gray-600 resize-none"
              />
            </div>
            <button
              type="submit"
              className={`w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                sent
                  ? "bg-emerald-600 text-white"
                  : "bg-violet-600 hover:bg-violet-500 text-white hover:shadow-lg hover:shadow-violet-500/25"
              }`}
            >
              {sent ? (
                "✓ Yuborildi!"
              ) : (
                <>
                  <IoSend size={16} /> Xabar yuborish
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
