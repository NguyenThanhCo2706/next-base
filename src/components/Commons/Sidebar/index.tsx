import Link from "next/link";

const sideBarItems = [
  { label: "Dashboard", link: "/admin/dashboards", icon: "📊" },
  { label: "Tài xế", link: "/admin/incidents", icon: "👨‍✈️" },
  { label: "Người dùng", link: "/admin/users", icon: "🧑" },
  { label: "Xe", link: "/admin/drivers", icon: "🚘" },
  { label: "Tuyến/Chuyến", link: "/admin/trips", icon: "🗺️" },
  { label: "Lịch điều phối", link: "/admin/schedulers", icon: "📅" },
  { label: "Sự cố", link: "/admin/reports", icon: "⚠️" },
  { label: "Báo cáo", link: "/dashboards", icon: "📈" },
  { label: "Cấu hình", link: "/admin/settings", icon: "⚙️" },
];
export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 w-72 hidden lg:flex flex-col gap-4 px-4 py-6">
      <div className="flex items-center gap-3 px-2">
        <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
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
        <div>
          <div className="font-bold tracking-wide">Admin Lộ Trình</div>
          <div className="text-xs text-white/60">Bảng điều khiển</div>
        </div>
      </div>
      <nav id="sidebarNav" className="mt-4 space-y-1">
        {sideBarItems.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="navlink flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-auto p-3 rounded-xl glass">
        <div className="text-sm text-white/80">Vai trò</div>
        <div className="mt-1 font-semibold">Chủ hệ thống</div>
        <div className="mt-3 text-xs text-white/60">
          Bạn có toàn quyền truy cập.
        </div>
      </div>
    </aside>
  );
}
