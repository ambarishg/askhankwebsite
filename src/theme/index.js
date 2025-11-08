import { extendTheme } from "@chakra-ui/react";

const brandColors = {
  50: "#e5ecf7",
  100: "#c0cee9",
  200: "#99aedb",
  300: "#728ecd",
  400: "#4b6ec0",
  500: "#3154a6",
  600: "#263f80",
  700: "#1b2c5a",
  800: "#101a34",
  900: "#050713",
};

const accentColors = {
  50: "#fff2df",
  100: "#ffd9b0",
  200: "#ffc180",
  300: "#ffa850",
  400: "#ff9021",
  500: "#e67608",
  600: "#b45b05",
  700: "#824103",
  800: "#512701",
  900: "#210d00",
};

const neutrals = {
  50: "#f8fafc",
  100: "#edf2f7",
  200: "#e2e8f0",
  300: "#cbd5f5",
  400: "#a0aec0",
  500: "#718096",
  600: "#4a5568",
  700: "#2d3748",
  800: "#1a202c",
  900: "#0b111c",
};

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "Arial, Helvetica, sans-serif",
    body: "Arial, Helvetica, sans-serif",
  },
  colors: {
    brand: brandColors,
    accent: accentColors,
    neutral: neutrals,
  },
  semanticTokens: {
    colors: {
      surface: { default: "white", _dark: "neutral.900" },
      surfaceMuted: { default: "neutral.50", _dark: "neutral.900" },
      surfaceElevated: { default: "white", _dark: "neutral.800" },
      surfaceSubtle: { default: "neutral.100", _dark: "neutral.800" },
      textPrimary: { default: "neutral.900", _dark: "neutral.50" },
      textMuted: { default: "neutral.700", _dark: "neutral.300" },
      borderSubtle: { default: "neutral.200", _dark: "neutral.700" },
      action: { default: "accent.500", _dark: "accent.300" },
      onAction: { default: "white", _dark: "brand.900" },
    },
  },
  styles: {
    global: {
      "::selection": {
        backgroundColor: "accent.200",
        color: "brand.900",
      },
      body: {
        bg: "surfaceMuted",
        color: "textPrimary",
      },
    },
  },
});

export default theme;
