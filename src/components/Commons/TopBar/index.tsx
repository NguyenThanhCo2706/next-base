export default function TopBar() {
  return (
    <header className="lg:ml-72 px-4 sm:px-6 lg:px-8 py-4 sticky top-0 z-40 backdrop-blur bg-surface-900/70 border-b border-white/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            id="openMenu"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10"
          >
            ☰
          </button>
          <div id="pageTitle" className="text-xl font-bold">
            Dashboard
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 bg-white/10 border border-white/10 rounded-xl px-3 py-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="white" opacity=".7" />
              <path d="M21 21l-4.3-4.3" stroke="white" opacity=".7" />
            </svg>
            <input
              id="globalSearch"
              type="text"
              placeholder="Tìm nhanh (tài xế, xe, chuyến)..."
              className="bg-transparent outline-none placeholder:text-white/50 w-64"
            />
          </div>
          <div className="relative">
            <button
              id="profileBtn"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-xl px-3 py-2"
            >
              <span>🧑‍🚀</span>
              <span className="hidden sm:inline">Admin</span>
            </button>
            <div
              id="profileMenu"
              className="absolute right-0 mt-2 w-44 p-2 rounded-xl glass modal-hide"
            >
              <a
                href="#settings"
                className="block px-3 py-2 rounded-lg hover:bg-white/10"
              >
                Cài đặt
              </a>
              <button
                id="switchTheme"
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/10"
              >
                Đổi giao diện
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
