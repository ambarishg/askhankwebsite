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
  styles: {
    global: {
      "::selection": {
        backgroundColor: "accent.200",
        color: "brand.900",
      },
      body: {
        bg: "neutral.50",
        color: "neutral.800",
      },
    },
  },
});

export default theme;
