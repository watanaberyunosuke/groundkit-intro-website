import { cn } from "@/lib/utils";

/** Layout for text pages (privacy, support): a narrow column with consistent heading and list styles. */
export function ProsePage({
  title,
  intro,
  updated,
  children,
  className,
}: {
  readonly title: string;
  readonly intro?: string;
  readonly updated?: string;
  readonly children: React.ReactNode;
  readonly className?: string;
}) {
  return (
    <article className={cn("mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-20", className)}>
      <header className="space-y-3 border-b pb-8">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        {intro ? <p className="text-lg text-muted-foreground text-pretty">{intro}</p> : null}
        {updated ? <p className="text-sm text-muted-foreground">Last updated {updated}</p> : null}
      </header>
      <div
        className={cn(
          "mt-8 space-y-4 leading-relaxed",
          "[&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight",
          "[&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_li]:text-muted-foreground [&_p]:text-muted-foreground",
          "[&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4",
          "[&_strong]:font-semibold [&_strong]:text-foreground"
        )}
      >
        {children}
      </div>
    </article>
  );
}
