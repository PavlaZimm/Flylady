import { HeroSkeleton, ProductGridSkeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <main className="space-y-16 animate-in fade-in duration-500">
      <HeroSkeleton />
      <ProductGridSkeleton count={6} />
    </main>
  );
}
