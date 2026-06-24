"use client";
import { GitHubCalendar } from "react-github-calendar";

function GithubActivity() {
  return (
    <GitHubCalendar
      username="Donabest"
      blockSize={10}
      blockMargin={3}
      fontSize={12}
    />
  );
}

export default GithubActivity;
