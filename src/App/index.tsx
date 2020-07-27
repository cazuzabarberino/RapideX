import React from "react";
import Dashboard from "./pages/Dashboard";
import { ThemeProvider } from "styled-components";
import { theme } from "./global/theme";
import { GlobalStyle } from "./global/style";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
