// components/InfoStrip.tsx
import { LucideIcon } from "lucide-react";

interface InfoItem {
  icon: LucideIcon;
  label: string;
  href?: string;
}

export function InfoStrip({ items }: { items: InfoItem[] }) {
  return (
    <div className="flex max-md:flex-col md:flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground md:items-center">
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
              <span className="h-3 w-px bg-border max-md:hidden" />
            )}
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
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
