export default function ProgressBar({ step }: { step: number }) {
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm">Bước {step} / 5</span>
        <span className="text-sm">{step * 20}%</span>
      </div>
      <div className="w-full bg-white/30 rounded-full h-2">
        <div
          className="bg-white h-2 rounded-full transition-all duration-300"
          style={{ width: `${step * 20}%` }}
        ></div>
      </div>
    </div>
  );
}
