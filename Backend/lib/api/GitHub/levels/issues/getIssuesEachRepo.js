/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { getOctokitAuth } from "../../../Octokit/utils.js";

export const getIssuesEachRepo = async (user, repo) => {
  const { username, createdAt } = user;
  const octokit = getOctokitAuth(user);

  const issues = await octokit.paginate(
    `GET /repos/${username}/${repo}/issues`,
    {
      state: "closed",
      since: createdAt,
      author: username,
      per_page: 100,
    },
    (response) => response.data,
  );

  const filteredIssues = issues.filter((issue) => !issue.pull_request);

  return filteredIssues.length;
};