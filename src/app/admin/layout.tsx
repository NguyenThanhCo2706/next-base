import Sidebar from "@/src/components/Commons/Sidebar";
import TopBar from "@/src/components/Commons/TopBar";

import "./page.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-app min-h-screen text-white font-display selection:bg-accent-500/40">
      <Sidebar />
      <TopBar />

      {/* <!-- Drawer for mobile --> */}
      <div id="drawer" className="fixed inset-0 z-50 hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute left-0 top-0 bottom-0 w-80 p-4 bg-surface-800 border-r border-white/10">
          <div className="flex items-center justify-between">
            <div className="font-bold">Menu</div>
            <button id="closeMenu" className="bg-white/10 rounded-lg px-2 py-1">
              ✕
            </button>
          </div>
          <nav className="mt-4 space-y-1" id="drawerNav">
            {/* <!-- Will be cloned from sidebar --> */}
          </nav>
        </div>
      </div>

      {/* <!-- Main --> */}
      <main className="lg:ml-72 px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {children}
      </main>
    </div>
  );
}
