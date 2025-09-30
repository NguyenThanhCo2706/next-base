export default function Page() {
  return (
    <div>
      <section id="view-dashboard" className="flex flex-col gap-6">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="rounded-2xl glass p-5">
            <div className="text-white/70 text-sm">Chuyến hôm nay</div>
            <div id="kpiTripsToday" className="text-3xl font-extrabold mt-1">
              —
            </div>
            <div id="kpiTripsChange" className="text-xs text-white/60 mt-1">
              —
            </div>
          </div>
          <div className="rounded-2xl glass p-5">
            <div className="text-white/70 text-sm">Tỉ lệ đúng giờ</div>
            <div id="kpiOnTime" className="text-3xl font-extrabold mt-1">
              —
            </div>
            <div className="text-xs text-white/60 mt-1">ETA vs Thực tế</div>
          </div>
          <div className="rounded-2xl glass p-5">
            <div className="text-white/70 text-sm">Tài xế đang hoạt động</div>
            <div id="kpiActiveDrivers" className="text-3xl font-extrabold mt-1">
              —
            </div>
            <div className="text-xs text-white/60 mt-1">Trong 24h gần nhất</div>
          </div>
          <div className="rounded-2xl glass p-5">
            <div className="text-white/70 text-sm">Sự cố mở</div>
            <div id="kpiOpenIncidents" className="text-3xl font-extrabold mt-1">
              —
            </div>
            <div className="text-xs text-white/60 mt-1">Cần xử lý</div>
          </div>
        </div>

        <div className="grid xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 rounded-2xl glass p-5">
            <div className="flex items-center justify-between">
              <div className="font-semibold">Xu hư ớng chuyến 7 ngày</div>
              <div className="text-white/60 text-sm" id="trendRange">
                7 ngày gần đây
              </div>
            </div>
            <div className="mt-4 h-56 rounded-lg bg-white/5 border border-white/10 p-3">
              <svg
                id="trendChart"
                viewBox="0 0 600 180"
                className="w-full h-full"
              ></svg>
            </div>
          </div>
          <div className="rounded-2xl glass p-5">
            <div className="font-semibold">Đúng giờ theo khung</div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                <div className="text-xs text-white/60">Sáng</div>
                <div id="slotMorning" className="text-xl font-bold mt-1">
                  —
                </div>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                <div className="text-xs text-white/60">Chiều</div>
                <div id="slotAfternoon" className="text-xl font-bold mt-1">
                  —
                </div>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                <div className="text-xs text-white/60">Tối</div>
                <div id="slotEvening" className="text-xl font-bold mt-1">
                  —
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="h-40 rounded-lg bg-white/5 border border-white/10 p-3">
                <svg
                  id="ontimePie"
                  viewBox="0 0 200 160"
                  className="w-full h-full"
                ></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl glass p-5">
            <div className="flex items-center justify-between">
              <div className="font-semibold">Chuyến sắp khởi hành</div>
              <a
                href="#trips"
                className="text-sm text-brand-400 hover:text-brand-500"
              >
                Xem tất cả →
              </a>
            </div>
            <div className="mt-4 overflow-auto scroll-soft">
              <table className="w-full table-grid">
                <thead className="text-white/70 text-sm">
                  <tr>
                    <th className="text-left px-3 py-2">Mã</th>
                    <th className="text-left px-3 py-2">Tài xế</th>
                    <th className="text-left px-3 py-2">Xe</th>
                    <th className="text-left px-3 py-2">Bắt đầu</th>
                    <th className="text-left px-3 py-2">Trạng thái</th>
                  </tr>
                </thead>
                <tbody id="upcomingTrips"></tbody>
              </table>
            </div>
          </div>
          <div className="rounded-2xl glass p-5">
            <div className="flex items-center justify-between">
              <div className="font-semibold">Cảnh báo mới</div>
              <button
                id="ackAllAlerts"
                className="text-sm bg-white/10 hover:bg-white/15 border border-white/10 px-3 py-1.5 rounded-lg"
              >
                Đã hiểu
              </button>
            </div>
            <div id="alertList" className="mt-4 space-y-2"></div>
          </div>
        </div>
      </section>

      {/* Modal (generic) */}
      <div
        id="modal"
        className="fixed inset-0 z-50 modal-hide items-center justify-center p-6"
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative w-full max-w-xl rounded-2xl bg-surface-800 border border-white/10 p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 id="modalTitle" className="text-2xl font-bold">
                Tiêu đề
              </h3>
              <p id="modalDesc" className="text-white/70 text-sm mt-1"></p>
            </div>
            <button
              id="modalClose"
              className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-lg p-2"
            >
              ✕
            </button>
          </div>
          <form id="modalForm" className="mt-4 space-y-4"></form>
          <div className="mt-4 flex items-center justify-end gap-3">
            <button
              id="modalCancel"
              className="bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl px-4 py-2"
            >
              Huỷ
            </button>
            <button
              id="modalSave"
              className="bg-accent-600 hover:bg-accent-500 text-slate-900 font-semibold rounded-xl px-4 py-2"
            >
              Lưu
            </button>
          </div>
        </div>
      </div>

      {/* Toast */}
      <div id="toast" className="fixed top-4 right-4 z-50 hidden">
        <div className="rounded-xl glass px-4 py-3 flex items-center gap-2">
          <span id="toastIcon">✅</span>
          <span id="toastMsg" className="text-sm"></span>
        </div>
      </div>
    </div>
  );
}
