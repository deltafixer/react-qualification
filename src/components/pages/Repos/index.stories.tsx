import React from "react";
import Repos from "./";

export default {
  component: Repos,
  title: "Repos",
  // excludes dummy objects
  excludeStories: /.*Data$/,
};

// hardcoding styled div wrapper because storybooks theme is dark, app is white
// would make it smarter if it wasn't a test project (not to go deep in this when no need)

// since docs state that React components' state can't be modified in a story,
// not sure if the "Display Spinner or Data" should be described
export const Default = () => (
  <div style={{ background: "white", width: "100%", margin: "auto" }}>
    <Repos />
  </div>
);
