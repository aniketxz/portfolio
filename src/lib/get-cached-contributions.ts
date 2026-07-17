import { unstable_cache } from "next/cache";

import type { Activity } from "@/components/github/contribution-graph";

type GitHubContributionsResponse = {
  contributions: Activity[];
};

export const getCachedContributions = unstable_cache(
  async (username: string) => {
    const baseUrl =
      process.env.GITHUB_CONTRIBUTIONS_API_URL ||
      "https://github-contributions-api.jogruber.de";
    const res = await fetch(`${baseUrl}/v4/${username}?y=last`);
    if (!res.ok) {
      return [];
    }
    const data = (await res.json()) as GitHubContributionsResponse;
    return data.contributions ?? [];
  },
  ["github-contributions"],
  { revalidate: 86400 }, // Cache for 1 day
);
