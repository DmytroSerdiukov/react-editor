import React, { FC } from "react";
import Container from "@mui/material/Container";
import EditItem from "./EditItem";

const EditZone: FC = (): JSX.Element => {
  return (
    <Container sx={{ backgroundColor: "#F6F9FE", height: 700, width: 530 }}>
      <EditItem title="Headline" />
    </Container>
  );
};

export default EditZone;
