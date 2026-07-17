// components/InfoStrip.tsx
import { LucideIcon } from "lucide-react";

interface InfoItem {
  icon: LucideIcon;
  label: string;
  href?: string;
}

export function InfoStrip({ items }: { items: InfoItem[] }) {
  return (
    <div className="flex max-md:flex-col md:flex-wrap gap-x-4 gap-y-2 text-sm text-neutral-500 md:items-center dark:text-neutral-400">
      {items.map((item, idx) => {
        const Icon = item.icon;
        const content = (
          <span className="inline-flex items-center gap-1.5">
            <Icon className="size-3.5" />
            {item.label}
          </span>
        );
        return (
          <span key={idx} className="inline-flex items-center gap-4">
            {idx > 0 && (
              <span className="h-3 w-px bg-neutral-200 max-md:hidden dark:bg-neutral-700" />
            )}
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                {content}
              </a>
            ) : (
              content
            )}
          </span>
        );
      })}
    </div>
  );
}
