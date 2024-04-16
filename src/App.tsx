import { Header } from "./components/Header";
import { lightGreen } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: lightGreen,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
