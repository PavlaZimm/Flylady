import Image from "next/image";

export type Photo = { src: string; alt: string; caption: string; width: number; height: number };

/** Vlastní fotka s popiskem a kreditem; rozměry jsou pevné, takže stránka neposkakuje. */
export function PhotoFigure({ photo, priority = false, className = "" }: { photo: Photo; priority?: boolean; className?: string }) {
  return <figure className={`space-y-2 ${className}`}>
    <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} priority={priority} sizes="(max-width: 768px) 100vw, 768px" className="h-auto w-full rounded-2xl border border-slate-200 bg-slate-100" />
    <figcaption className="text-xs leading-relaxed text-slate-500">{photo.caption}</figcaption>
  </figure>;
}
