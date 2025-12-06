import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme(); // <-- use global theme
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500">
      <div
        className={`px-10 py-3 flex items-center gap-12 rounded-3xl border backdrop-blur-2xl shadow-lg transition-all duration-500
        ${
          scrolled
            ? "bg-white/10 dark:bg-black/20 border-white/10 scale-[0.95]"
            : "bg-white/20 dark:bg-black/20 border-white/20 scale-100"
        }`}
      >
        {/* Navigation Links */}
        <div className="hidden md:flex gap-10">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-black dark:hover:text-white transition-all"
            >
              {item}
              {/* underline */}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-current transition-all duration-300 rounded-full group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-xl bg-white/30 dark:bg-white/10 hover:bg-white/40 dark:hover:bg-white/20 backdrop-blur-xl shadow-md transition-all text-gray-900 dark:text-gray-100"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
