export default function Page() {
  return (
    <section id="view-trips" className="view hidden">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <div className="text-2xl font-bold">Tuyến/Chuyến</div>
          <div className="text-white/60 text-sm mt-1">
            Theo dõi ETA vs Thực tế
          </div>
        </div>
        <div className="flex items-center gap-2">
          <input
            id="tripSearch"
            type="text"
            placeholder="Tìm chuyến..."
            className="bg-white/10 border border-white/10 rounded-xl px-3 py-2 placeholder:text-white/50"
          />
          <select
            id="tripStatus"
            className="bg-white/10 border border-white/10 rounded-xl px-3 py-2"
          >
            <option value="all">Tất cả</option>
            <option value="scheduled">Lên lịch</option>
            <option value="running">Đang chạy</option>
            <option value="done">Hoàn thành</option>
            <option value="canceled">Huỷ</option>
          </select>
          <button
            id="tripExport"
            className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl px-3 py-2"
          >
            Sao chép CSV
          </button>
          <button
            id="addTrip"
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
              <th className="text-left px-3 py-2">Mã</th>
              <th className="text-left px-3 py-2">Tài xế</th>
              <th className="text-left px-3 py-2">Xe</th>
              <th className="text-left px-3 py-2">Từ → Đến</th>
              <th className="text-left px-3 py-2">ETA / Thực tế</th>
              <th className="text-left px-3 py-2">Trạng thái</th>
              <th className="text-right px-3 py-2">Hành động</th>
            </tr>
          </thead>
          <tbody id="tripRows"></tbody>
        </table>
      </div>
    </section>
  );
}
