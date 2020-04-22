import React, { useEffect, useState, useRef } from "react";
import { IGitHubRepo } from "../../../models/IGitHubRepo";
import { fetchMyRepos } from "../../../utils/api";
import { debounce } from "../../../utils/defaults";
import { Spinner, Input, List } from "../..";
import { ReposStyleWrapper } from "./index.styles";

const Repos = (): JSX.Element => {
  const [repos, setRepos] = useState([] as IGitHubRepo[]);
  const [searchString, setSearchString] = useState("");
  const [count, setCount] = useState(0);
  const loading = useRef(true);

  useEffect(() => {
    fetchMyRepos().then((fetchedRepos) => {
      loading.current = false;
      setRepos(fetchedRepos);
    });
  }, []);

  const searchInitiated = debounce((value: string) => {
    setCount(0);
    setSearchString(value);
  }, 400);

  return loading.current ? (
    <Spinner text={"Loading repositories..."} />
  ) : (
    <ReposStyleWrapper>
      <Input
        type="text"
        autoFocus
        placeholder="Type here to search for repos..."
        onChange={searchInitiated}
      />
      <List items={repos} itemFilter={searchString} resultCount={setCount} />
      {/* still playing with this div below :D */}
      <div className="number-of-results">Number of results:&nbsp;{count}</div>
    </ReposStyleWrapper>
  );
};

export default Repos;
