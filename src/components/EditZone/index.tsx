import React, { FC } from "react";
import Container from "@mui/material/Container";
import Item from "../ToolBar/Item";

const EditZone: FC = (): JSX.Element => {
  return (
    <Container>
      <Item title={"Headline"} />
    </Container>
  );
};

export default EditZone;
