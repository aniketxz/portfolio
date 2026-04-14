import type { SimpleIcon } from "simple-icons";

interface SkillBadgeProps {
	name: string;
	icon?: SimpleIcon;
	size?: "sm" | "xs";
	variant?: "icon-text" | "text-only";
}

export function SkillBadge({
	name,
	icon,
	size = "sm",
	variant = "icon-text",
}: SkillBadgeProps) {
	const title = name || icon?.title || "";

	const baseClass =
		"inline-flex items-center rounded-md border border-dashed border-black/20 bg-black/5 dark:border-white/30 dark:bg-white/15 dark:text-white";

	const sizeClasses =
		size === "xs"
			? "px-2 py-0.5 text-xs font-medium"
			: "px-2 py-1 text-sm font-bold";

	return (
		<span className={`${baseClass} ${sizeClasses}`}>
			{/* Icon */}
			{variant !== "text-only" && icon && (
				<svg
					role="img"
					viewBox="0 0 24 24"
					className="size-4"
          fill={`#${icon.hex}`}
					aria-hidden="true"
				>
					<path d={icon.path} />
				</svg>
			)}

			{/* Title */}
			<span className={variant === "icon-text" && icon ? "ml-1" : ""}>
				{title}
			</span>
		</span>
	);
}
