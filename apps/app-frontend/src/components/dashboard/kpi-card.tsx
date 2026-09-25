type KPIProps = {
  title: string;
  value: string;
  change: string;
};

export function KPICard({ title, value, change }: KPIProps) {
  return (
    <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
      <p className="text-xs text-slate-500">{title}</p>

      <h3 className="mt-2 text-2xl font-bold text-[#0F172A]">{value}</h3>

      <p className="mt-1 text-xs font-medium text-emerald-600">{change}</p>
    </div>
  );
}