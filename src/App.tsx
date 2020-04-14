import React, { useEffect, useState } from "react";
import { IGitHubRepo } from "./models/IGitHubRepo";
import "./App.scss";

const gitHubUserURL = "https://api.github.com/users/facebook/repos";
const fetchOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

const debounce = (func: any, wait: number, isImmediate = false) => {
  let timeout: number | NodeJS.Timeout | null;
  return (...args: any) => {
    const later = () => {
      timeout = null;
      if (!isImmediate) {
        func(...args);
      }
    };
    const callNow = isImmediate && !timeout;
    clearTimeout(timeout as number);
    (timeout as NodeJS.Timeout) = setTimeout(later, wait);
    if (callNow) {
      func(...args);
    }
  };
};

const fetchMyRepos = async (): Promise<IGitHubRepo[]> => {
  const res = await fetch(gitHubUserURL, fetchOptions);
  return res.json();
};

function App() {
  const [repos, setRepos] = useState([] as IGitHubRepo[]);
  const [loading, setLoading] = useState(true);
  const [searchString, setSearchString] = useState("");
  let counter = 0;

  useEffect(() => {
    fetchMyRepos().then((fetchedRepos) => {
      setRepos(fetchedRepos);
      setLoading(false);
    });
  }, []);

  const searchInitiated = debounce((value: string) => {
    counter = 0;
    setSearchString(value);
  }, 400);

  return loading ? (
    <div className="loading">Loading repositories...</div>
  ) : (
    <div className="app-container">
      <input
        type="text"
        autoFocus
        placeholder="Type here to search for repos..."
        onChange={(e) => searchInitiated(e.target.value)}
      />
      <div className="repos-container">
        {repos.map((repo, index) => {
          if (repo.name.toLowerCase().includes(searchString.toLowerCase())) {
            counter += 1;
            return <div key={index}>{repo.name}</div>;
          }
          return null;
        })}
      </div>
      {/* kinda using the advantage of renderer, if this div is placed above, using counter like this won't be possible */}
      <div className="number-of-results">Number of results:&nbsp;{counter}</div>
    </div>
  );
}

export default App;
