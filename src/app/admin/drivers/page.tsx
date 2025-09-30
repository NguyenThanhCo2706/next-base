export default function Page() {
  return (
    <section id="view-drivers" className="view hidden">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <div className="text-2xl font-bold">Tài xế</div>
          <div className="text-white/60 text-sm mt-1">
            Quản lý hồ sơ và trạng thái hoạt động
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              id="driverSearch"
              type="text"
              placeholder="Tìm tài xế..."
              className="bg-white/10 border border-white/10 rounded-xl px-3 py-2 placeholder:text-white/50"
            />
          </div>
          <select
            id="driverFilter"
            className="bg-white/10 border border-white/10 rounded-xl px-3 py-2"
          >
            <option value="all">Tất cả trạng thái</option>
            <option value="active">Đang hoạt động</option>
            <option value="off">Nghỉ</option>
            <option value="suspended">Tạm ngưng</option>
          </select>
          <button
            id="driverExport"
            className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl px-3 py-2"
          >
            Sao chép CSV
          </button>
          <button
            id="addDriver"
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
              <th className="text-left px-3 py-2">SĐT</th>
              <th className="text-left px-3 py-2">Bằng lái</th>
              <th className="text-left px-3 py-2">Trạng thái</th>
              <th className="text-left px-3 py-2">Điểm</th>
              <th className="text-right px-3 py-2">Hành động</th>
            </tr>
          </thead>
          <tbody id="driverRows"></tbody>
        </table>
      </div>
    </section>
  );
}
