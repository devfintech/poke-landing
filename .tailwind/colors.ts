import colors from "tailwindcss/colors"
import { appendDefault } from "./utils"

const primary = {
  50: "#fff1d0",
  100: "#ffe7b1",
  200: "#ffdb8a",
  300: "#ffcf63",
  400: "#ffc33c",
  500: "#ffb715",
  600: "#d59912",
  700: "#aa7a0e",
  800: "#805c0b",
  900: "#553d07",
  950: "#332504",
}

// Colors should be hex code colors

const config = {
  light: {
    default: colors.stone[100],
    primary: appendDefault(colors.pink),
    secondary: colors.emerald[500],
    body: colors.white,
    component: colors.white,
    modal: colors.white,
    table: colors.white,
    muted: colors.neutral[200],
    content: colors.black,
    invert: colors.white,
    line: appendDefault(colors.neutral),
    success: appendDefault(colors.green),
    warning: appendDefault(colors.amber),
    info: appendDefault(colors.blue),
    error: appendDefault(colors.red),
    warm: appendDefault(colors.neutral),
    cool: appendDefault(colors.gray),
  },
  dark: {
    default: colors.gray[900],
    primary: appendDefault(primary),
    secondary: colors.emerald[500],
    body: colors.gray[950],
    component: colors.gray[800],
    modal: colors.gray[800],
    table: colors.zinc[900],
    muted: colors.gray[800],
    content: colors.white,
    invert: colors.black,
    line: appendDefault(colors.gray),
    success: appendDefault(colors.green),
    warning: appendDefault(colors.amber),
    info: appendDefault(colors.blue),
    error: appendDefault(colors.red),
    warm: appendDefault(colors.neutral),
    cool: appendDefault(colors.gray),
  },
}

export default config
