import React from "react";
import List, { ListProps } from "./";
import { IGitHubRepo } from "../../../models/IGitHubRepo";
import { action } from "@storybook/addon-actions";

export default {
  component: List,
  title: "List",
  // excludes dummy objects
  excludeStories: /.*Data$/,
};

const propsData: ListProps = {
  items: [
    {
      name: "Item 1",
      owner: {
        avatar_url: "https://avatars3.githubusercontent.com/u/69631?v=4",
      },
      created_at: new Date("2019, 04, 10").toString(),
      updated_at: new Date("2020, 01, 10").toString(),
    },
    {
      name: "Item 2",
      owner: {
        avatar_url: "https://avatars3.githubusercontent.com/u/69631?v=4",
      },
      created_at: new Date("2019, 04, 10").toString(),
      updated_at: new Date("2020, 01, 12").toString(),
    },
    {
      name: "Item 3",
      owner: {
        avatar_url: "https://avatars3.githubusercontent.com/u/69631?v=4",
      },
      created_at: new Date("2019, 04, 10").toString(),
      updated_at: new Date("2020, 01, 15").toString(),
    },
  ] as IGitHubRepo[],
  itemFilter: "",
  resultCount: () => {},
};

export const actionsData = {
  resultCount: action("resultCount"),
};

// hardcoding styled div wrapper because storybooks theme is dark, app is white
// would make it smarter if it wasn't a test project (not to go deep in this when no need)

export const DefaultAndSorted = () => (
  <div style={{ background: "white", width: "100%", margin: "auto" }}>
    <List {...(propsData as ListProps)} {...actionsData} />
  </div>
);

export const WithFilter = () => (
  <div style={{ background: "white", width: "100%", margin: "auto" }}>
    <List {...(propsData as ListProps)} itemFilter="3" {...actionsData} />
  </div>
);
