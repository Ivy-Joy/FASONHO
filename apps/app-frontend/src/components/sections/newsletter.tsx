// src/components/sections/newsletter.tsx

export function Newsletter() {
  return (
    <section className="border-t bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-[#081A35] p-10 text-white">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#D4A72C]">
                Stay in the loop
              </p>

              <h2 className="mb-3 text-4xl font-bold">
                Get product updates and engineering insights.
              </h2>

              <p className="text-slate-300">
                Documentation, tutorials, changelogs and new releases from
                FASONHO.
              </p>
            </div>

            <form className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 flex-1 rounded-full border border-slate-600 bg-transparent px-5 outline-none placeholder:text-slate-400 focus:border-[#2563EB]"
              />

              <button
                type="submit"
                className="h-12 rounded-full bg-[#D4A72C] px-6 font-semibold text-[#081A35] transition hover:bg-[#E0B53A]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}