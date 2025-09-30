export default function Page() {
  return (
    <section id="view-settings" className="view hidden">
      <div className="text-2xl font-bold">Cấu hình hệ thống</div>
      <form
        id="settingsForm"
        className="mt-4 grid md:grid-cols-2 gap-4 max-w-3xl"
      >
        <div className="rounded-xl glass p-4">
          <div className="text-sm text-white/70">Đơn vị đo</div>
          <select
            name="units"
            className="mt-2 bg-white/10 border border-white/10 rounded-xl px-3 py-2 w-full"
          >
            <option value="metric">Metric (km)</option>
            <option value="imperial">Imperial (mi)</option>
          </select>
        </div>
        <div className="rounded-xl glass p-4">
          <div className="text-sm text-white/70">Múi giờ</div>
          <select
            name="tz"
            className="mt-2 bg-white/10 border border-white/10 rounded-xl px-3 py-2 w-full"
          >
            <option value="Asia/Ho_Chi_Minh">Asia/Ho_Chi_Minh (GMT+7)</option>
            <option value="Asia/Hanoi">Asia/Hanoi</option>
          </select>
        </div>
        <div className="rounded-xl glass p-4 md:col-span-2">
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="alerts" className="w-4 h-4" />
              <span>{"Bật cảnh báo trễ > 10 phút"}</span>
            </label>
            <input
              type="number"
              name="alertMins"
              min="1"
              value="10"
              className="bg-white/10 border border-white/10 rounded-xl px-3 py-2 w-28"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <button className="bg-brand-500 hover:bg-brand-400 font-semibold rounded-xl px-5 py-3">
            Lưu
          </button>
          <span id="settingsMsg" className="text-white/70 text-sm ml-2"></span>
        </div>
      </form>
    </section>
  );
}
