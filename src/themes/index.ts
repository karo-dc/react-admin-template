import { createTheme } from "@material-ui/core";
import { Colors } from "../assets/colors";
import { hexToRgbA } from "../utils/misc";
import shadows from "./shadows";
import typography from "./typography";

export const defaultTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: Colors.Dashboard,
      paper: Colors.BlueGray500,
    },
    divider: hexToRgbA(Colors.BlueGray200, 0.24),
    error: {
      contrastText: Colors.White,
      main: Colors.Red300,
    },
    primary: {
      contrastText: Colors.White,
      main: Colors.Blue300,
    },
    success: {
      contrastText: Colors.White,
      main: Colors.Green300,
    },
    text: {
      primary: Colors.White,
      secondary: Colors.BlueGray200,
    },
    warning: {
      contrastText: Colors.White,
      main: Colors.Orange300,
    },
  },
  typography,
  shadows,
});
