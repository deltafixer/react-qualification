import { create } from "@storybook/theming/create";

export default create({
  base: "dark",

  colorPrimary: "darkred",
  colorSecondary: "#212121",

  appBg: "#252525",
  appContentBg: "#1e1e1e",
  appBorderColor: "#1e1e1e",
  appBorderRadius: 12,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "white",
  textInverseColor: "#212121",

  // Toolbar
  barTextColor: "white",
  barSelectedColor: "white",
  barBg: "darkred",

  // Form
  inputBg: "#1e1e1e",
  inputBorder: "#1e1e1e",
  inputTextColor: "black",
  inputBorderRadius: 12,

  brandTitle: "DeltaFixer's first Storybook",
});
