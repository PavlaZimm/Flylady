type SkeletonProps = {
  className?: string;
};

export const Skeleton = ({ className = "" }: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse rounded-lg bg-slate-200 ${className}`}
      role="status"
      aria-label="Načítání..."
    />
  );
};

export const ProductCardSkeleton = () => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
      <Skeleton className="aspect-[4/3] w-full rounded-none" />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="space-y-2">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <div className="mt-auto flex items-center justify-between pt-4">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-10 w-20 rounded-full" />
        </div>
      </div>
    </article>
  );
};

export const ProductGridSkeleton = ({ count = 6 }: { count?: number }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
};

export const ProductDetailSkeleton = () => {
  return (
    <div className="space-y-10">
      <Skeleton className="h-6 w-32" />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <Skeleton className="aspect-[4/3] w-full rounded-3xl" />
          <div className="grid gap-4 sm:grid-cols-3">
            <Skeleton className="aspect-[4/3] rounded-2xl" />
            <Skeleton className="aspect-[4/3] rounded-2xl" />
            <Skeleton className="aspect-[4/3] rounded-2xl" />
          </div>
        </div>
        <aside className="rounded-3xl border border-slate-100 bg-white p-8">
          <div className="space-y-4">
            <div className="flex gap-2">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-28 rounded-full" />
            </div>
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-5 w-1/2" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-16 w-full rounded-2xl" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-14 w-full rounded-full" />
          </div>
        </aside>
      </div>
    </div>
  );
};

export const HeroSkeleton = () => {
  return (
    <section className="rounded-3xl bg-slate-200 px-6 py-16 sm:px-10 lg:px-14">
      <div className="max-w-3xl space-y-5">
        <div className="flex gap-3">
          <Skeleton className="h-8 w-40 rounded-full" />
          <Skeleton className="h-8 w-32 rounded-full" />
        </div>
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-2/3" />
        <div className="flex gap-3 pt-4">
          <Skeleton className="h-12 w-44 rounded-full" />
          <Skeleton className="h-12 w-48 rounded-full" />
        </div>
      </div>
    </section>
  );
};
