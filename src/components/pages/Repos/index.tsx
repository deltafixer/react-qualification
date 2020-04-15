import React, { useEffect, useState } from "react";
import { IGitHubRepo } from "../../../models/IGitHubRepo";
import { fetchMyRepos } from "../../../utils/api";
import { debounce } from "../../../utils/defaults";
import { Spinner, Input, List } from "../..";

const Repos = (): JSX.Element => {
  const [repos, setRepos] = useState([] as IGitHubRepo[]);
  const [searchString, setSearchString] = useState("");
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchMyRepos().then((fetchedRepos) => {
      setRepos(fetchedRepos);
      setLoading(false);
    });
  }, []);

  const searchInitiated = debounce((value: string) => {
    setCount(0);
    setSearchString(value);
  }, 400);

  return loading ? (
    <Spinner text={"Loading repositories..."} />
  ) : (
    <React.Fragment>
      <Input
        type="text"
        autoFocus
        placeholder="Type here to search for repos..."
        onChange={searchInitiated}
      />
      <List items={repos} itemFilter={searchString} resultCount={setCount} />
      {/* still playing with this div below :D */}
      <div className="number-of-results">Number of results:&nbsp;{count}</div>
    </React.Fragment>
  );
};

Repos.defaultProps = {
  text: "",
  resultCount: () => {},
};

export default Repos;
