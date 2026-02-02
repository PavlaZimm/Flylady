import { ProductGridSkeleton, Skeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <main className="space-y-10 animate-in fade-in duration-500">
      <header className="rounded-3xl bg-slate-200 px-6 py-10 sm:px-10">
        <div className="space-y-4">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-10 w-72" />
          <Skeleton className="h-6 w-full max-w-2xl" />
        </div>
      </header>
      <ProductGridSkeleton count={9} />
    </main>
  );
}
