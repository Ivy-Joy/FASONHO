// src/components/about/why-we-exist.tsx

export function WhyWeExist() {
  const traditionalSteps = [
    "Empty Project",
    "Authentication",
    "Users",
    "RBAC",
    "Dashboard",
    "Settings",
    "Notifications",
    "Deployment",
  ];

  const fasonhoSteps = ["Configure", "Customize", "Build", "Deploy"];

  return (
    <section className="container-fasonho mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mb-8 max-w-2xl">
        <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#B7791F] ring-1 ring-amber-500/20">
          Why We Exist
        </div>

        <h2 className="text-2xl font-bold leading-snug tracking-tight text-[#08152D] sm:text-3xl">
          From repeated engineering to reusable foundations.
        </h2>

        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
          Modern software teams often spend weeks creating infrastructure before
          building the unique value of their applications. FASONHO changes that
          equation.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Traditional Workflow */}
        <div className="rounded-2xl border border-red-200/60 bg-red-50/20 p-5 sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-bold text-red-700">
              Traditional Workflow
            </h3>
            <span className="rounded-md bg-red-100/80 px-2 py-0.5 text-[10px] font-semibold text-red-800">
              Higher Friction
            </span>
          </div>

          <div className="space-y-2">
            {traditionalSteps.map((step) => (
              <div
                key={step}
                className="rounded-lg border border-red-100/80 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 shadow-2xs"
              >
                {step}
              </div>
            ))}
          </div>
        </div>

        {/* FASONHO Workflow */}
        <div className="flex flex-col justify-between rounded-2xl border border-blue-200/80 bg-gradient-to-b from-blue-50/30 to-white p-5 sm:p-6 shadow-xs">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm sm:text-base font-bold text-[#2563EB]">
                FASONHO Workflow
              </h3>
              <span className="rounded-md bg-blue-100/80 px-2 py-0.5 text-[10px] font-semibold text-blue-800">
                Accelerated
              </span>
            </div>

            <div className="space-y-2.5">
              <div className="rounded-lg bg-[#2563EB] px-4 py-2.5 text-center text-xs font-bold text-white shadow-xs">
                Starter Pro Foundation
              </div>

              {fasonhoSteps.map((step) => (
                <div
                  key={step}
                  className="rounded-lg border border-blue-100 bg-white px-3.5 py-2 text-center text-xs font-medium text-slate-800 shadow-2xs"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 border-t border-blue-100/60 pt-4 text-xs font-medium leading-relaxed text-slate-600">
            We are not trying to remove engineering - we are removing unnecessary
            engineering.
          </p>
        </div>
      </div>
    </section>
  );
}