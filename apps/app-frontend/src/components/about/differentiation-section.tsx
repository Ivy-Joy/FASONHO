// src/components/about/differentiation-section.tsx

export function DifferentiationSection() {
  const comparisons = [
    ["More features", "Better foundations"],
    ["Complex setup", "Clear developer experience"],
    ["Monolithic codebase", "Modular architecture"],
    ["Documentation later", "Documentation is product"],
    ["Rebuild every project", "Reuse intelligently"],
    ["Lock developers in", "Make developers more capable"],
  ];

  return (
    <section className="border-y border-slate-100 bg-[#F8FBFF] py-10 sm:py-14">
      <div className="container-fasonho mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#B7791F] ring-1 ring-amber-500/20">
            What Makes FASONHO Different?
          </div>

          <h2 className="text-2xl font-bold leading-snug tracking-tight text-[#08152D] sm:text-3xl">
            Better foundations, not just more features.
          </h2>

          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
            Our differentiation is the engineering philosophy behind every product:
            clarity, modularity, documentation, and production quality rather than
            feature quantity.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
          <div className="grid grid-cols-2 border-b border-slate-200 bg-slate-50/80 px-4 py-2.5 sm:px-6 text-xs font-bold text-slate-800">
            <div>Traditional</div>
            <div className="text-[#2563EB]">FASONHO</div>
          </div>

          <div className="divide-y divide-slate-100">
            {comparisons.map(([traditional, fasonho]) => (
              <div
                key={traditional}
                className="grid grid-cols-2 px-4 py-2.5 sm:px-6 text-xs transition-colors hover:bg-blue-50/30"
              >
                <div className="text-slate-500">{traditional}</div>
                <div className="font-semibold text-slate-900">{fasonho}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}