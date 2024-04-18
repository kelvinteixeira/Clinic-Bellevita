import { ThemeProvider } from "@emotion/react";
import { Home } from "./screens/Home";
import { theme } from "./theme/theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
