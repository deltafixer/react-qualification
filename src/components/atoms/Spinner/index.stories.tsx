import React from "react";
import Spinner from "./";

export default {
  component: Spinner,
  title: "Spinner",
};

// hardcoding styled div wrapper because storybooks theme is dark, app is white
// would make it smarter if it wasn't a test project (not to go deep in this when no need)

export const Default = () => (
  <div style={{ background: "white", width: "fit-content", margin: "auto" }}>
    <Spinner />
  </div>
);

export const WithText = () => (
  <div style={{ background: "white", width: "fit-content", margin: "auto" }}>
    <Spinner text="Loading" />
  </div>
);
