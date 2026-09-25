export function Sidebar() {
  const items = [
    "Dashboard",
    "Projects",
    "Deployments",
    "Users",
    "Analytics",
    "Settings",
  ];

  return (
    <aside className="w-52 border-r border-slate-100 bg-[#FCFDFF] p-4">
      <div className="mb-6 text-sm font-bold text-[#0F172A]">FASONHO</div>

      <nav className="space-y-2">
        {items.map((item, index) => (
          <button
            key={item}
            className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
              index === 0
                ? "bg-[#F5E7B8] font-semibold text-[#0F172A]"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}