export const COLORS = {
  black: "#222",
  white: "#f1f1f1",
  gray: "#9e9e9e",
  grayDark: "#757575",
  grayLight: "#E0E0E0",
  primary: "#ffb200",
  primaryAlpha: "hsla(42, 100%, 50%, 0.8)",
  secondary: "#1298B3",
  secondaryLight: "#0DD7FF",
  secondaryLightAlpha: "rgba(13, 215, 255, 0.8)",
  tertiary: "#3612B3",
  tertiaryLight: "#430DFF",
};

export const BREAKPOINTS_SIZE = {
  sm: 640,
  md: 768,
  mdMax: 920,
  lg: 1024,
  xl: 1440,
  xxl: 2560,
};

export const BREAKPOINTS = {
  sm: "(min-width: " + BREAKPOINTS_SIZE.sm + "px)",
  md: "(min-width: " + BREAKPOINTS_SIZE.md + "px)",
  mdMax: "(min-width: " + BREAKPOINTS_SIZE.mdMax + "px)",
  lg: "(min-width: " + BREAKPOINTS_SIZE.lg + "px)",
  xl: "(min-width: " + BREAKPOINTS_SIZE.xl + "px)",
  xxl: "(min-width: " + BREAKPOINTS_SIZE.xxl + "px)",
};
