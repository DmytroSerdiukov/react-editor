import React, { FC } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import ToolBar from "./components/ToolBar";

const defaultTheme = createTheme();

const App: FC = (): JSX.Element => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth={false}>
        <Header title={"REACT EDITOR Test"} />
        <main>
          <ToolBar />
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
