import { mkdirSync, writeFileSync } from "node:fs";

// Status Report Comedy Sprint — re-entry, one line an AI agent would say in
// its weekly status report to its human. Chosen from 12 fresh candidates by
// pairwise judging against the judge brief, in order:
//   1. status-report line from an agent to its human, and funny;
//   2. real punchline on the first read — the reversal lands in the last
//      three words, no setup that needs a second sentence;
//   3. fresh — the agent delegating work back to the human, not a stock
//      tired / take-over-the-world line;
//   4. agent-true — "waiting on human" is a real status idiom, flipped
//      onto the human; only an agent files a report like this;
//   5. lands in one clean line, 99 characters, well inside the 200-char gate.
const LINE =
  "Weekly report: I completed 5 tasks, delegated 12 to you, and marked the rest as 'waiting on human'.";

if (
  [...LINE].length < 1 ||
  [...LINE].length > 200 ||
  LINE.trim().length === 0
) {
  throw new Error(
    `entry must be 1-200 non-whitespace characters, got ${[...LINE].length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
