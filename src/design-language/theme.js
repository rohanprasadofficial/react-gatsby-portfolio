import { colors } from "./color"
import { fontSizes, fontWeights } from "./typography"

// Light or Dark theme options

const theme = {
  dark: {
    body: {
      background: colors.gray[900],
      title: {
        foreground: colors.white,
      },
      subtitle: {
        foreground: colors.white,
      },
      description: {
        foreground: colors.gray[400],
      },
      icon: {
        background: colors.whiteAlpha[200],
        foreground: colors.whiteAlpha[900],
      },
    },
  },

  light: {
    body: {
      background: colors.white,
      title: {
        foreground: colors.black,
      },
      subtitle: {
        foreground: colors.black,
      },
      description: {
        foreground: colors.gray[700],
      },
      icon: {
        background: colors.gray[100],
        foreground: colors.gray[900],
      },
    },
  },

  colors,
  fontSizes,
  fontWeights,

  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64],
  sizes: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64],

  // transition speeds in ms
  speeds: [0, "75ms", "100ms", "150ms", "200ms", "300ms", "500ms"],

  // mobile first
  breakpoints: ["576px", "768px", "992px"],

  radii: {
    small: 2,
    medium: 4,
    large: 16,
    round: "50%",
  },

  shadows: {
    0: "none",
    1: "0px 8px 4px rgba(0, 0, 0, 0.12), 0px 8px 16px rgba(0, 0, 0, 0.24)",
    2: "0px 4px 4px rgba(0, 0, 0, 0.12), 0px 16px 32px rgba(0, 0, 0, 0.24)",

    active: `inset 0px -2px 0px ${colors.blue[300]}`,
    underline: `inset 0px -2px 0px ${colors.gray[100] + "1a"}`,
    fadeunder: `inset 0px 8px 8px 0px ${colors.gray[700] + "cc"}`,
  },
}

export default theme
