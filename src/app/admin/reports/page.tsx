export default function Page() {
  return (
    <section id="view-reports" className="view hidden">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold">Báo cáo & thống kê</div>
          <div className="text-white/60 text-sm mt-1">
            Theo tài xế, xe, tuyến
          </div>
        </div>
        <div className="flex items-center gap-2">
          <select
            id="reportMetric"
            className="bg-white/10 border border-white/10 rounded-xl px-3 py-2"
          >
            <option value="trips">Số chuyến</option>
            <option value="distance">Quãng đường (km)</option>
            <option value="ontime">Tỉ lệ đúng giờ (%)</option>
          </select>
          <select
            id="reportRange"
            className="bg-white/10 border border-white/10 rounded-xl px-3 py-2"
          >
            <option value="7">7 ngày</option>
            <option value="30">30 ngày</option>
            <option value="90">90 ngày</option>
          </select>
          <button
            id="reportCopy"
            className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl px-3 py-2"
          >
            Sao chép CSV
          </button>
        </div>
      </div>
      <div className="mt-4 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl glass p-4">
          <div className="font-semibold">Biểu đồ</div>
          <div className="mt-3 h-64 rounded-lg bg-white/5 border border-white/10 p-3">
            <svg
              id="reportChart"
              viewBox="0 0 700 220"
              className="w-full h-full"
            ></svg>
          </div>
        </div>
        <div className="rounded-2xl glass p-4 overflow-auto scroll-soft">
          <div className="font-semibold">Dữ liệu</div>
          <table className="w-full table-grid mt-3">
            <thead className="text-white/70 text-sm">
              <tr>
                <th className="text-left px-3 py-2">Ngày</th>
                <th className="text-right px-3 py-2">Giá trị</th>
              </tr>
            </thead>
            <tbody id="reportRows"></tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
