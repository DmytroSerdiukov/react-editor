import React, { FC } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import ToolBar from "./components/ToolBar";
import EditZone from "./components/EditZone";
import Preview from "./components/Preview";

const defaultTheme = createTheme();

const App: FC = (): JSX.Element => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        maxWidth={false}
        sx={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header title={"REACT EDITOR Test"} />
        <main style={{ display: "flex", height: "100%" }}>
          <ToolBar />
          <EditZone />
          <Preview />
        </main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
