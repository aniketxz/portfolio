"use client";

import { use } from "react";
import { addDays, format, getDay, parseISO } from "date-fns";

import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Activity } from "@/components/github/contribution-graph";
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "@/components/github/contribution-graph";

/**
 * Trims data to start from the first complete week (first Sunday on or after
 * the first data point), so the first column is never partially empty.
 * Max data loss: 6 days.
 */
function trimToFullWeek(data: Activity[], weekStart = 0): Activity[] {
  if (data.length === 0) return data;

  const firstDate = parseISO(data[0].date);
  const dayOfWeek = getDay(firstDate); // 0 = Sun … 6 = Sat

  if (dayOfWeek === weekStart) return data; // already starts on the right day

  // How many days to advance to reach the next weekStart
  const daysToAdvance = (weekStart - dayOfWeek + 7) % 7;
  const firstFullWeekStart = addDays(firstDate, daysToAdvance);
  // Use date-fns format() — toISOString() returns UTC which in IST (UTC+5:30)
  // gives the previous day at midnight, cutting one day too early
  const cutoffStr = format(firstFullWeekStart, "yyyy-MM-dd");

  return data.filter((a) => a.date >= cutoffStr);
}

function ContributionBlock({
  activity,
  dayIndex,
  weekIndex,
}: {
  activity: Activity;
  dayIndex: number;
  weekIndex: number;
}) {
  const label =
    activity.count === 0
      ? `No contributions on ${format(new Date(activity.date + "T00:00:00"), "dd MMM yyyy")}`
      : `${activity.count} contribution${activity.count !== 1 ? "s" : ""} on ${format(new Date(activity.date + "T00:00:00"), "dd MMM yyyy")}`;

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <g aria-label={label} tabIndex={-1} style={{ cursor: "default" }}>
            <ContributionGraphBlock
              activity={activity}
              dayIndex={dayIndex}
              weekIndex={weekIndex}
            />
          </g>
        }
      />
      <TooltipContent className="font-sans text-xs">
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export function GitHubContributions({
  contributions,
  githubProfileUrl,
  weeks = 52,
  className,
}: {
  contributions: Promise<Activity[]>;
  githubProfileUrl: string;
  /** Number of weeks to display (rolling window). Default: 52 (full year) */
  weeks?: number;
  className?: string;
}) {
  const allData = use(contributions);

  // 1. Optionally trim to the last N weeks
  const filtered =
    weeks >= 52
      ? allData
      : allData.filter((a) => {
          const cutoff = new Date();
          cutoff.setDate(cutoff.getDate() - weeks * 7);
          return new Date(a.date + "T00:00:00") >= cutoff;
        });

  // 2. Trim to first full week so the first column has no empty slots
  const data = trimToFullWeek(filtered);

  return (
    <ContributionGraph
      className={cn("mx-auto py-2", className)}
      data={data}
      blockSize={12}
      blockMargin={3}
      blockRadius={2}
    >
      <ContributionGraphCalendar
        className="no-scrollbar px-2"
        title="GitHub Contributions"
      >
        {({ activity, dayIndex, weekIndex }) => (
          <ContributionBlock
            activity={activity}
            dayIndex={dayIndex}
            weekIndex={weekIndex}
          />
        )}
      </ContributionGraphCalendar>

      <ContributionGraphFooter className="px-2">
        <ContributionGraphTotalCount>
          {({ totalCount, year }) => (
            <div className="text-xs text-muted-foreground">
              {totalCount.toLocaleString("en")} contributions in {year} on{" "}
              <a
                className="text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
                href={githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </div>
          )}
        </ContributionGraphTotalCount>

        <ContributionGraphLegend />
      </ContributionGraphFooter>
    </ContributionGraph>
  );
}

export function GitHubContributionsFallback() {
  return (
    <div className="flex h-40 w-full items-center justify-center">
      <div className="flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/40 [animation-delay:0ms]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/40 [animation-delay:150ms]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground/40 [animation-delay:300ms]" />
      </div>
    </div>
  );
}
