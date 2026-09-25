// src/app/(marketing)/blog/page.tsx

export default function BlogPage() {
  return (
    <main className="container-fasonho mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mb-8 max-w-2xl">
        <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#B7791F] ring-1 ring-amber-500/20">
          Blog & Insights
        </div>
        <h1 className="text-2xl font-bold leading-snug tracking-tight text-[#08152D] sm:text-3xl">
          Engineering Insights & Product Updates
        </h1>
        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
          Articles, architectural decisions, and stories behind building FASONHO.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-xs">
        <p className="text-xs text-slate-500">No blog posts published yet.</p>
      </div>
    </main>
  );
}