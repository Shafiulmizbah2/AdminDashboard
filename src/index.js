import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      light: green[500],
      main: green[900],
    },
    background: {
      default: "#f6f6f6",
      paper: "#ffffff",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
