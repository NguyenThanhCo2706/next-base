import Header from "@/src/components/LandingPage/Header";
import "./globals.css";
import "./page.css";

export default function Home() {
  return (
    <div className="min-h-screen text-white font-display animated-gradient selection:bg-accent-500/40">
      <Header />

      {/* Hero */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/90 rounded-full px-3 py-1 text-sm mb-5">
              <span className="inline-block w-2 h-2 rounded-full bg-accent-500"></span>
              Tối ưu giao hàng – Giảm 18% thời gian di chuyển
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Gợi ý tuyến đường ngắn nhất cho tài xế
            </h1>
            <p className="text-white/80 mt-5 text-lg">
              Tính toán điểm đến thông minh, tránh tắc đường, ưu tiên thời gian
              thực — giúp đội xe giao đúng hẹn với chi phí thấp hơn.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#demo"
                className="inline-flex justify-center items-center gap-2 bg-accent-600 hover:bg-accent-500 text-slate-900 font-semibold px-6 py-3 rounded-xl transition"
              >
                Dùng thử ngay
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="#0b2b2b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <button
                id="heroConsult"
                className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 font-semibold px-6 py-3 rounded-xl transition"
              >
                Đặt tư vấn miễn phí
              </button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-white/80">
              <div>
                <div className="text-2xl font-bold text-white">-18%</div>
                <div className="text-sm">Thời gian giao hàng</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">+12%</div>
                <div className="text-sm">Tỉ lệ đúng hẹn</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">-9%</div>
                <div className="text-sm">Chi phí nhiên liệu</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-5 lg:p-6 backdrop-blur-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Xem trước tuyến mẫu</h3>
                <span className="text-xs text-white/60">
                  Demo mô phỏng (không dùng bản đồ thực)
                </span>
              </div>

              <form
                id="routeForm"
                className="grid sm:grid-cols-2 gap-4"
                autoComplete="off"
              >
                <div>
                  <label htmlFor="from" className="text-sm text-white/80">
                    Điểm xuất phát
                  </label>
                  <input
                    id="from"
                    name="from"
                    type="text"
                    required
                    placeholder="VD: Kho Quận 7"
                    className="mt-1 w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-500/40 placeholder:text-white/40"
                  />
                </div>
                <div>
                  <label htmlFor="to" className="text-sm text-white/80">
                    Điểm đến
                  </label>
                  <input
                    id="to"
                    name="to"
                    type="text"
                    required
                    placeholder="VD: Bưu cục Hà Đông"
                    className="mt-1 w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-500/40 placeholder:text-white/40"
                  />
                </div>

                <div className="flex items-center gap-3 sm:col-span-2">
                  <label className="toggle relative inline-flex items-center cursor-pointer select-none">
                    <input
                      id="avoidTraffic"
                      type="checkbox"
                      className="sr-only"
                    />
                    <span className="w-12 h-7 bg-white/15 rounded-full border border-white/15 relative"></span>
                  </label>
                  <span className="text-sm">Bật tránh tắc đường</span>
                </div>

                <div className="sm:col-span-2 flex flex-wrap gap-2">
                  <button
                    type="button"
                    data-pair="Kho Quận 7|Cửa hàng Quận 1"
                    className="chip inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 rounded-full px-3 py-1.5 text-sm"
                  >
                    Gợi ý: Quận 7 → Q.1
                  </button>
                  <button
                    type="button"
                    data-pair="Kho Long Biên|Bưu cục Hà Đông"
                    className="chip inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 rounded-full px-3 py-1.5 text-sm"
                  >
                    Gợi ý: Long Biên → Hà Đông
                  </button>
                  <button
                    type="button"
                    data-pair="Ga Đà Nẵng|Cảng Tiên Sa"
                    className="chip inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 rounded-full px-3 py-1.5 text-sm"
                  >
                    Gợi ý: Đà Nẵng
                  </button>
                </div>

                <div className="sm:col-span-2 flex items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white font-semibold px-5 py-3 rounded-xl transition"
                  >
                    Tính tuyến
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    id="clearRoute"
                    className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 px-4 py-3 rounded-xl transition"
                  >
                    Xoá
                  </button>
                  <span id="demoNote" className="text-xs text-white/60">
                    Kết quả chỉ để minh hoạ
                  </span>
                </div>
              </form>

              <div className="mt-6 grid lg:grid-cols-2 gap-6">
                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Bản đồ demo</h4>
                    <div id="legend" className="text-xs text-white/60">
                      A • B • Tuyến
                    </div>
                  </div>
                  <div
                    className="mt-3 rounded-lg grid-bg overflow-hidden"
                    id="mapWrap"
                  >
                    <svg
                      id="miniMap"
                      viewBox="0 0 560 320"
                      className="w-full h-[220px]"
                    >
                      {/* Grid is CSS; We'll draw nodes and path here */}
                    </svg>
                  </div>
                </div>

                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <h4 className="font-semibold">Ước tính hành trình</h4>
                  <div className="mt-3 grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                      <div className="text-xs text-white/60">Quãng đường</div>
                      <div id="distanceOut" className="text-xl font-bold mt-1">
                        —
                      </div>
                    </div>
                    <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                      <div className="text-xs text-white/60">Thời gian</div>
                      <div id="timeOut" className="text-xl font-bold mt-1">
                        —
                      </div>
                    </div>
                    <div className="col-span-2 rounded-lg bg-white/5 border border-white/10 p-3">
                      <div className="text-xs text-white/60">Gợi ý</div>
                      <div id="tipOut" className="mt-1 text-sm">
                        Nhập 2 điểm để xem kết quả
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      id="ctaConsult"
                      className="w-full inline-flex justify-center items-center gap-2 bg-accent-600 hover:bg-accent-500 text-slate-900 font-semibold px-5 py-3 rounded-xl transition"
                    >
                      Nâng cấp cho đội xe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent glow */}
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl bg-brand-500/20 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="features" className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="w-12 h-12 rounded-xl bg-accent-600/20 flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13 3a9 9 0 1 0 8 8"
                    stroke="#22d3a3"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M21 3l-7 7"
                    stroke="#22d3a3"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-xl">Tuyến ngắn nhất</h3>
              <p className="mt-2 text-white/80">
                Tự động tính lộ trình tối ưu với nhiều điểm dừng.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="w-12 h-12 rounded-xl bg-accent-600/20 flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 12h18M3 6h12M3 18h12"
                    stroke="#22d3a3"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-xl">Tránh tắc đường</h3>
              <p className="mt-2 text-white/80">
                Cập nhật thời gian thực để giảm chờ đợi tại điểm nóng.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="w-12 h-12 rounded-xl bg-accent-600/20 flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3v18M3 12h18"
                    stroke="#22d3a3"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-xl">Tiết kiệm chi phí</h3>
              <p className="mt-2 text-white/80">
                Giảm quãng đường di chuyển và tiêu hao nhiên liệu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section id="pricing" className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-2xl font-bold">Gói Cơ Bản</h3>
              <p className="mt-2 text-white/80">
                Phù hợp cho nhóm nhỏ, thử nghiệm tính năng.
              </p>
              <div className="mt-6 flex items-end gap-2">
                <div className="text-4xl font-extrabold">Miễn phí</div>
                <div className="text-white/60 mb-2">/ 14 ngày</div>
              </div>
              <ul className="mt-4 space-y-2 text-white/80 text-sm">
                <li>• Tối ưu 1–3 điểm dừng</li>
                <li>• Báo cáo chuyến cơ bản</li>
                <li>• Hỗ trợ chat</li>
              </ul>
              <button
                className="mt-6 bg-brand-500 hover:bg-brand-400 px-5 py-3 rounded-xl font-semibold"
                id="tryFree"
              >
                Bắt đầu dùng thử
              </button>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 relative">
              <div className="absolute -top-3 right-6 bg-accent-600 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                Đề xuất
              </div>
              <h3 className="text-2xl font-bold">Gói Doanh Nghiệp</h3>
              <p className="mt-2 text-white/80">
                Quy mô lớn, tuyến nâng cao, hỗ trợ ưu tiên.
              </p>
              <div className="mt-6 flex items-end gap-2">
                <div className="text-4xl font-extrabold">Theo nhu cầu</div>
              </div>
              <ul className="mt-4 space-y-2 text-white/80 text-sm">
                <li>• Tối ưu nhiều điểm dừng</li>
                <li>• Tránh tắc đường tức thời</li>
                <li>• API tích hợp đội xe</li>
              </ul>
              <button
                className="mt-6 bg-accent-600 hover:bg-accent-500 text-slate-900 px-5 py-3 rounded-xl font-semibold"
                id="contactSales"
              >
                Liên hệ tư vấn
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <h3 className="text-3xl font-bold mb-6">Câu hỏi thường gặp</h3>
          <div className="space-y-3">
            {/* FAQ item */}
            <details className="rounded-xl bg-white/5 border border-white/10 p-5">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="font-semibold">
                  Demo này có dùng dữ liệu giao thông thật không?
                </span>
                <span className="text-white/60">+</span>
              </summary>
              <p className="mt-3 text-white/80">
                Đây là mô phỏng để minh hoạ trải nghiệm. Chưa sử dụng bản đồ hay
                kẹt xe theo thời gian thực trong bản demo này.
              </p>
            </details>
            <details className="rounded-xl bg-white/5 border border-white/10 p-5">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="font-semibold">
                  Tôi có thể thêm nhiều điểm dừng?
                </span>
                <span className="text-white/60">+</span>
              </summary>
              <p className="mt-3 text-white/80">
                Bản chính thức hỗ trợ nhiều điểm dừng. Bản demo minh hoạ A → B
                đơn giản.
              </p>
            </details>
            <details className="rounded-xl bg-white/5 border border-white/10 p-5">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="font-semibold">Triển khai trong bao lâu?</span>
                <span className="text-white/60">+</span>
              </summary>
              <p className="mt-3 text-white/80">
                Thường 1–2 tuần cho quy mô nhỏ, tuỳ yêu cầu tích hợp đội xe.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-10 pb-14 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/70">
          <div className="flex items-center gap-3">
            <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
              <rect x="6" y="6" width="36" height="36" rx="10" fill="#1d86ff" />
              <path
                d="M16 30c6-1 7-9 16-10 3 0 6 1 8 2"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <span>Lộ Trình Pro © 2025</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#pricing" className="hover:text-white">
              Giá
            </a>
            <a href="#features" className="hover:text-white">
              Tính năng
            </a>
            <button id="openPolicy" className="hover:text-white">
              Chính sách
            </button>
          </div>
        </div>
      </footer>

      {/* Modal: Tư vấn */}
      <div
        id="consultModal"
        className="fixed inset-0 z-50 hidden items-center justify-center p-6"
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-white/10 p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-2xl font-bold">Đăng ký tư vấn</h3>
              <p className="text-white/70 mt-1 text-sm">
                Chúng tôi sẽ liên hệ trong 1 ngày làm việc.
              </p>
            </div>
            <button
              id="closeConsult"
              className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-lg p-2"
            >
              ✕
            </button>
          </div>
          <form id="consultForm" className="mt-5 space-y-4">
            <div>
              <label className="text-sm text-white/80">Họ và tên</label>
              <input
                required
                type="text"
                name="name"
                className="mt-1 w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-500/40"
              />
            </div>
            <div>
              <label className="text-sm text-white/80">Email công việc</label>
              <input
                required
                type="email"
                name="email"
                className="mt-1 w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-500/40"
              />
            </div>
            <div>
              <label className="text-sm text-white/80">
                Quy mô đội xe (ước tính)
              </label>
              <select
                name="fleet"
                className="mt-1 w-full bg-white/10 border border-white/15 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-500/40"
              >
                <option value="1-5">1–5</option>
                <option value="6-20">6–20</option>
                <option value="21-50">21–50</option>
                <option value="50+">50+</option>
              </select>
            </div>
            <div className="flex items-center justify-between gap-3">
              <button
                className="bg-accent-600 hover:bg-accent-500 text-slate-900 font-semibold px-5 py-3 rounded-xl"
                type="submit"
              >
                Gửi yêu cầu
              </button>
              <span id="consultMsg" className="text-sm text-white/70"></span>
            </div>
          </form>
        </div>
      </div>

      {/* Modal: Chính sách */}
      <div
        id="policyModal"
        className="fixed inset-0 z-50 hidden items-center justify-center p-6"
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-white/10 p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-2xl font-bold">Chính sách & Quyền riêng tư</h3>
            <button
              id="closePolicy"
              className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-lg p-2"
            >
              ✕
            </button>
          </div>
          <div className="mt-4 text-white/80 space-y-3 text-sm leading-6 max-h-[60vh] overflow-auto">
            <p>
              Bản demo chỉ nhằm minh hoạ sản phẩm. Không thu thập dữ liệu nhạy
              cảm. Thông tin liên hệ bạn gửi ở đây chỉ hiển thị cục bộ trong
              trình duyệt của bạn trong bản thử này.
            </p>
            <p>
              Phiên bản sản phẩm chính thức sẽ có đầy đủ điều khoản và bảo vệ dữ
              liệu theo quy định pháp luật hiện hành.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
