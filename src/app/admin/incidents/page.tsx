export default function Page() {
  return (
    <section id="view-incidents" className="view hidden">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold">Sự cố & an toàn</div>
          <div className="text-white/60 text-sm mt-1">
            Theo dõi, phân loại, xử lý
          </div>
        </div>
        <div className="flex items-center gap-2">
          <select
            id="incidentFilter"
            className="bg-white/10 border border-white/10 rounded-xl px-3 py-2"
          >
            <option value="all">Tất cả</option>
            <option value="open">Đang mở</option>
            <option value="resolved">Đã xử lý</option>
          </select>
          <button
            id="incidentExport"
            className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl px-3 py-2"
          >
            Sao chép CSV
          </button>
          <button
            id="addIncident"
            className="bg-accent-600 hover:bg-accent-500 text-slate-900 font-semibold rounded-xl px-4 py-2"
          >
            + Báo cáo
          </button>
        </div>
      </div>
      <div className="mt-4 overflow-auto scroll-soft">
        <table className="w-full table-grid">
          <thead className="text-white/70 text-sm">
            <tr>
              <th className="text-left px-3 py-2">Thời gian</th>
              <th className="text-left px-3 py-2">Loại</th>
              <th className="text-left px-3 py-2">Liên quan</th>
              <th className="text-left px-3 py-2">Mức độ</th>
              <th className="text-left px-3 py-2">Trạng thái</th>
              <th className="text-right px-3 py-2">Hành động</th>
            </tr>
          </thead>
          <tbody id="incidentRows"></tbody>
        </table>
      </div>
    </section>
  );
}
