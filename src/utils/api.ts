import { IGitHubRepo } from "../models/IGitHubRepo";

const gitHubUserURL = "https://api.github.com/users/facebook/repos";
const fetchOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export const fetchMyRepos = async (): Promise<IGitHubRepo[]> => {
  const res = await fetch(gitHubUserURL, fetchOptions);
  return res.json();
};
