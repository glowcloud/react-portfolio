import Home from "./pages/Home";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#647dee",
      },
      secondary: {
        main: "#f4c430",
      },
      text: {
        primary: "rgba(255, 255, 255, 0.87)",
      },
      background: {
        default: "#282c35",
        paper: "#323d49",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
