// src/app/(marketing)/blog/[slug]/page.tsx

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="container-fasonho mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <article className="max-w-3xl">
        <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#2563EB] ring-1 ring-blue-500/20">
          Blog Post
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-[#08152D] sm:text-3xl capitalize">
          {slug.replace(/-/g, " ")}
        </h1>

        <div className="mt-6 border-t border-slate-100 pt-6 text-xs sm:text-sm leading-relaxed text-slate-600">
          Post content goes here.
        </div>
      </article>
    </main>
  );
}