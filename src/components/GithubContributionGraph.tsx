import { Suspense } from "react";
import { cn } from "@/lib/utils";
import {
  GitHubContributions,
  GitHubContributionsFallback,
} from "@/components/github/github-contributions";
import { getCachedContributions } from "@/lib/get-cached-contributions";
import type { PortfolioData } from "@/types/portfolio";

export function GithubContributionGraph({ data }: { data: PortfolioData }) {
  const contributions = getCachedContributions(data.githubUsername);

  return (
    <div className="flex flex-col overflow-hidden card-surface">
      <div className="space-y-4 px-6 py-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">GitHub</h3>
            <p className="text-sm text-muted-foreground">
              Recent contributions by{" "}
              <span className="font-semibold text-foreground">
                {data.githubUsername}
              </span>
            </p>
          </div>
          <a
            href={data.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-link"
          >
            View profile
          </a>
        </div>

        <div className="overflow-hidden rounded-md">
          <Suspense fallback={<GitHubContributionsFallback />}>
            <GitHubContributions
              contributions={contributions}
              githubProfileUrl={data.social.github}
              weeks={40}
              className={cn(
                '**:data-[level="0"]:fill-[#eff2f5] dark:**:data-[level="0"]:fill-[#151b23]',
                '**:data-[level="1"]:fill-[#aceebb] dark:**:data-[level="1"]:fill-[#033a16]',
                '**:data-[level="2"]:fill-[#4ac26b] dark:**:data-[level="2"]:fill-[#196c2e]',
                '**:data-[level="3"]:fill-[#2da44e] dark:**:data-[level="3"]:fill-[#2ea043]',
                '**:data-[level="4"]:fill-[#116329] dark:**:data-[level="4"]:fill-[#56d364]',
              )}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
