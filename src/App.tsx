import React, { FC } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";

const defaultTheme = createTheme();

const App: FC = (): JSX.Element => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="lg">
        <main></main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
