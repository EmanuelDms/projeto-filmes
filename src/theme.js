import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#A52A2A",
    },
  },
  typography: {
    h1: {
      display: "block",
      fontSize: "2rem",
      margin: "0.67rem 0",
      fontWeight: "700",
    },
    h2: {
      display: "block",
      fontSize: "1.5rem",
      margin: "0.83rem 0",
      fontweight: "700",
    },
  },
});

export default theme;
