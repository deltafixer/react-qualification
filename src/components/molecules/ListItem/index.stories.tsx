import React from "react";
import ListItem, { ListItemProps } from "./";

export default {
  component: ListItem,
  title: "ListItem",
  // excludes dummy objects
  excludeStories: /.*Data$/,
};

const propsData = {
  name: "Random name",
  avatar_url: "https://avatars3.githubusercontent.com/u/69631?v=4",
  created_at: new Date().toString(),
  updated_at: new Date().toString(),
};

// hardcoding styled div wrapper because storybooks theme is dark, app is white
// would make it smarter if it wasn't a test project (not to go deep in this when no need)

export const Default = () => (
  <div style={{ background: "white", width: "100%", margin: "auto" }}>
    <ListItem {...(propsData as ListItemProps)} />
  </div>
);
