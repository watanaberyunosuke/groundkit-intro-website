import Image from "next/image";

import { cn } from "@/lib/utils";

/** A screenshot in a simple device outline. Screenshots are 552 x 1200 (iPhone 17 at 0.46x). */
export function PhoneFrame({
  src,
  alt,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 280px, 60vw",
}: {
  readonly src: string;
  readonly alt: string;
  readonly className?: string;
  readonly priority?: boolean;
  readonly sizes?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-[2.6rem] border border-black/10 bg-neutral-900 p-2 shadow-2xl shadow-black/20 dark:border-white/10 dark:shadow-black/50",
        className
      )}
    >
      <div className="overflow-hidden rounded-[2.1rem] bg-white">
        <Image src={src} alt={alt} width={552} height={1200} priority={priority} sizes={sizes} className="h-auto w-full" />
      </div>
    </div>
  );
}
