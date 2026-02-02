import { ProductDetailSkeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="animate-in fade-in duration-500">
      <ProductDetailSkeleton />
    </div>
  );
}
