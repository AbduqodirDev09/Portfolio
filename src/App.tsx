import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function Footer() {
  return (
    <footer className="border-t border-white/5 py-6 px-6 text-center">
      <p className="text-gray-600 text-xs font-mono">
        &lt;Tokhirjonov/&gt; · {new Date().getFullYear()} · Built with React & Tailwind CSS
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0d12] text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
