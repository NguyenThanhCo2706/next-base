export default function Page() {
  return (
    <section id="view-users" className="view hidden">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <div className="text-2xl font-bold">Người dùng</div>
          <div className="text-white/60 text-sm mt-1">
            Khách hàng / Hành khách dùng App
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input
            id="userSearch"
            type="text"
            placeholder="Tìm người dùng..."
            className="bg-white/10 border border-white/10 rounded-xl px-3 py-2 placeholder:text-white/50"
          />
          <select
            id="userType"
            className="bg-white/10 border border-white/10 rounded-xl px-3 py-2"
          >
            <option value="all">Tất cả</option>
            <option value="personal">Cá nhân</option>
            <option value="business">Doanh nghiệp</option>
          </select>
          <button
            id="userExport"
            className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl px-3 py-2"
          >
            Sao chép CSV
          </button>
          <button
            id="addUser"
            className="bg-accent-600 hover:bg-accent-500 text-slate-900 font-semibold rounded-xl px-4 py-2"
          >
            + Thêm
          </button>
        </div>
      </div>
      <div className="mt-4 overflow-auto scroll-soft">
        <table className="w-full table-grid">
          <thead className="text-white/70 text-sm">
            <tr>
              <th className="text-left px-3 py-2">Tên</th>
              <th className="text-left px-3 py-2">Email</th>
              <th className="text-left px-3 py-2">Loại</th>
              <th className="text-left px-3 py-2">Xác minh</th>
              <th className="text-right px-3 py-2">Hành động</th>
            </tr>
          </thead>
          <tbody id="userRows"></tbody>
        </table>
      </div>
    </section>
  );
}
