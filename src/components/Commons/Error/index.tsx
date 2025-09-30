export default function Error({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-sm font-medium text-red-600 ">{children}</label>
  );
}
