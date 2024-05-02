import { ThemeProvider } from "@emotion/react";
import { Home } from "./Screens/Home";
import { theme } from "./theme/theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
