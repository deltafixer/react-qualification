import React from "react";
import { action } from "@storybook/addon-actions";
import Input from "./";

export default {
  component: Input,
  title: "Input",
  // excludes dummy objects
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onChange: action("onChange"),
};

export const Default = () => <Input {...actionsData} />;

export const Autofocused = () => <Input autoFocus {...actionsData} />;

export const WithCustomPlaceholder = () => (
  <Input placeholder={"Custom text"} {...actionsData} />
);
