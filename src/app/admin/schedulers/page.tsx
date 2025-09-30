export default function Page() {
  return (
    <section id="view-scheduler" className="view hidden">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold">Lịch điều phối (tuần)</div>
          <div className="text-white/60 text-sm mt-1">
            Kéo thanh thời gian bằng nút để điều chỉnh (+/− 1 giờ)
          </div>
        </div>
        <div className="flex items-center gap-2">
          <select
            id="schedDriver"
            className="bg-white/10 border border-white/10 rounded-xl px-3 py-2"
          >
            <option value="all">Tất cả tài xế</option>
          </select>
          <select
            id="schedVehicle"
            className="bg-white/10 border border-white/10 rounded-xl px-3 py-2"
          >
            <option value="all">Tất cả xe</option>
          </select>
        </div>
      </div>
      <div className="mt-4 rounded-2xl glass p-4 overflow-auto scroll-soft">
        <div id="scheduleGrid" className="min-w-[900px]">
          {/* <!-- Timeline grid --> */}
        </div>
      </div>
    </section>
  );
}
