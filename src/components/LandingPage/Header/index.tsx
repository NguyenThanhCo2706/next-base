export default function Header() {
  return (
    <header className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {/* Simple SVG mark */}
        <svg
          width="36"
          height="36"
          viewBox="0 0 48 48"
          fill="none"
          className="drop-shadow"
        >
          <rect x="6" y="6" width="36" height="36" rx="10" fill="#1d86ff" />
          <path
            d="M16 30c6-1 7-9 16-10 3 0 6 1 8 2"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="18" cy="30" r="3" fill="#22d3a3" />
          <circle cx="32" cy="20" r="3" fill="#22d3a3" />
        </svg>
        <span className="text-xl font-semibold tracking-wide">
          Lộ Trình Pro
        </span>
        <span className="ml-3 text-white/60 hidden sm:inline">
          Đề xuất tuyến ngắn nhất
        </span>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-white/80">
        <a href="#features" className="hover:text-white transition">
          Tính năng
        </a>
        <a href="#demo" className="hover:text-white transition">
          Demo
        </a>
        <a href="#pricing" className="hover:text-white transition">
          Giá
        </a>
        <a href="#faq" className="hover:text-white transition">
          FAQ
        </a>
      </nav>
      <div className="flex items-center gap-3">
        <button
          id="openConsult"
          className="hidden sm:inline-flex bg-accent-600 hover:bg-accent-500 text-slate-900 font-semibold px-4 py-2 rounded-xl transition focus:outline-none focus:ring-2 focus:ring-accent-500/60"
        >
          Đặt tư vấn
        </button>
        <a
          href="#demo"
          className="inline-flex bg-white/10 hover:bg-white/15 border border-white/15 px-4 py-2 rounded-xl transition focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          Dùng thử demo
        </a>
      </div>
    </header>
  );
}
