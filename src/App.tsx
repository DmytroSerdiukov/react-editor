import React, { FC } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Container from "@mui/material/Container";
import Header from "./components/Header/Header";
import EditZone from "./features/EditZone/EditZone";
import Preview from "./features/Preview";
import ToolBar from "./features/ToolBar/ToolBar";

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
